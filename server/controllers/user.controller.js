const User = require("../models/User");
const EmailToken = require("../models/EmailToken.js");
const sendVerificationEmail = require("../config/sendEmail");
const { v4: uuidv4 } = require("uuid");

const bcrypt = require("bcrypt");

module.exports = {
  async createUser(req, res) {
    try {
      const isUser = await User.findOne({ email: req.body.email });
      if (isUser)
        return res.status(500).json({ error: "User is already here!" });

      const hashedPwd = await bcrypt.hash(
        req.body.password,
        parseInt(process.env.SALT)
      );

      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPwd,
      });

      res.status(200).json({ user, token: user.generateToken() });
    } catch (e) {
      console.log({ error: e.message });
      res.status(500).json({ error: e.message });
    }
  },
  async logIn(req, res) {
    try {
      const user = await User.findOne({ username: req.body.username });

      // Rewrite Auth System later.

      if (!user)
        return res.status(404).json({ error: "That user does not exist!" });

      const verified = await bcrypt.compare(req.body.password, user.password);

      if (!verified)
        return res.status(400).json({ error: "Incorrect Password." });

      res.status(200).json({ user, token: user.generateToken() });
    } catch (e) {
      res.status(500).json({ error: e.message });
      console.log(e);
    }
  },
  async getUserData(req, res) {
    try {
      const user = await User.findById(req.user._id);

      res.status(200).json(user);
    } catch (e) {
      console.log({ error: e.message });
      res.status(500).json({ error: e.message });
    }
  },
  async updateData(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.user._id, req.body);

      res.status(200).json(user);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  async getAllData(req, res) {
    try {
      const users = await User.find();

      res.status(200).json(users);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  async sendEmail(req, res) {
    try {
      const token = await EmailToken.create({
        userId: req.user._id,
        token: uuidv4(),
      });

      console.log(token);

      const link = `/user/${req.user._id}/confirm/${token.token}`;

      await sendVerificationEmail(
        `${req.body.email}`,
        "Verify your email.",
        `Click on this link to verify your email: ${process.env.FRONTEND_URL}${link}`
      );

      res
        .status(200)
        .json({ message: "Email verification sent successfully!" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  async verifyEmailToken(req, res) {
    try {
      const user = await User.findOne({ _id: req.body._id });
      if (!user) return res.status(400).json({ message: "Invalid Link." });

      const token = await EmailToken.findOne({
        userId: user._id,
        token: req.body.token,
      });

      if (!token) return res.status(400).json({ message: "Invalid Link. " });

      if (!user.verified) {
        user.verified = true;
        await User.findByIdAndUpdate(user._id, user);
      }

      await token.remove();

      res.status(200).json({ user });
      console.log("Sucessful!");
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  async resetPassword(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });

      const token = await EmailToken.create({
        userId: user._id,
        token: uuidv4(),
      });

      const link = `/user/${user._id}/resetpwd/${token.token}`;

      await sendVerificationEmail(
        `${req.body.email}`,
        "Reset your password.",
        `Click on this link to change your password. Make sure not to reload the page, otherwise, the page will reset. This is ensured for security purposes. ${process.env.FRONTEND_URL}${link}`
      );

      res
        .status(200)
        .json({ message: "Password reset email sent successfully!" });
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
  async changePassword(req, res) {
    try {
      const user = await User.findOne({ _id: req.body.user_id });
      console.log(user);
      user.password = await bcrypt.hash(
        req.body.pwd,
        parseInt(process.env.SALT)
      );
      console.log(user);
      let updated = await User.findByIdAndUpdate(req.body.user_id, user);
      res.status(200).json(updated);
    } catch (e) {
      res.status(500).json(e.message);
      console.log(e.message);
    }
  },
  async logInWithGoogle(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        let newuser = await User.create({
          username: req.body.name,
          email: req.body.email,
          password: req.body.jti,
          verified: true,
          provider: true,
        });

        res.status(200).json({ newuser, token: newuser.generateToken() });
      } else {
        res.status(200).json({ user, token: user.generateToken() });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
};

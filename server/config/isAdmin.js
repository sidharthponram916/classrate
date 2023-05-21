const Admins = require("../models/Admin.js");

let isAdmin = async (userid) => {
  let admins = await Admins.find();

  let exists = admins.find((admin) => {
    return admin.user.toString() === userid.toString();
  });

  if (typeof exists != "undefined") return true;

  return false;
};

module.exports = isAdmin;

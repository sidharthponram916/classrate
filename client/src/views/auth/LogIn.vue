<template>
  <div>
    <form @submit.prevent="login" autocomplete="off">
      <h1 class="p-2 m-2 text-white text-7xl mt-7 mb-7">
        Class<span class="text-yellow-300">Rate</span
        ><span class="text-2xl">.org</span>
      </h1>
      <input
        type="text"
        class="p-2 m-2 border-b-4 border-black text-white w-1/2 bg-transparent text-2xl focus:outline-none mb-10"
        placeholder="Username"
        v-model="user.username"
      />

      <input
        type="password"
        class="p-2 m-2 border-b-4 border-black text-white w-1/2 bg-transparent text-2xl focus:outline-none mb-10"
        placeholder="Password"
        v-model="user.password"
        autocomplete="off"
      />
      <br />
      <button
        @click="login()"
        class="p-2 m-2 bg-blue-800 rounded text-white text-2xl"
      >
        Sign In
      </button>
      <h1
        v-if="err"
        class="text-red-600 bg-gray-200 mt-2 p-2 m-2 rounded w-1/2 m-auto"
      >
        {{ err }}
      </h1>
      <p class="text-white text-xl mt-5 mb-2">
        <i class="fa-sharp fa-solid fa-circle-info"></i> Don't have an account?
        Sign up <a href="/signup" class="text-blue-200">here </a> or sign in
        with these providers. <br />
      </p>
      <button><div ref="googleLoginBtn"></div></button>
      <p class="text-white text-xl mt-2 mb-2">
        <i class="fa-sharp fa-solid fa-circle-info"></i> Forgot your password?
        Click <a class="text-blue-200" @click="sendPasswordEmail()">here</a> to
        send a password reset email.
      </p>
      <!--  <button class="open text-2xl mt-2 p-2 rounded mb-2 bg-gray-200">
        <img src="../../assets/google.png" class="w-10 h-10" />
      </button> -->
    </form>
  </div>
</template>

<script>
import decode from "jwt-decode";
export default {
  data() {
    return {
      user: {},
      err: "",
    };
  },
  async mounted() {
    document.title = "Sign In - Classrate.org";

    window.google.accounts.id.initialize({
      client_id:
        "199941469614-tcdpve2r36ljnm2o504ptn992udrj75e.apps.googleusercontent.com",
      callback: this.authenticateWithGoogle,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(this.$refs.googleLoginBtn, {
      text: "signin_with",
      size: "large",
      theme: "outline",
      logo_alignment: "left",
      auto_select: true,
    });
  },
  methods: {
    async login() {
      try {
        let { data } = await this.$http.post("/users/login", {
          username: this.user.username,
          password: this.user.password,
        });

        this.$store.commit("logIn");

        this.$store.commit("setUserData", data.user);

        localStorage.setItem("token", data.token);

        this.$http.defaults.headers.common["Authorization"] =
          localStorage.getItem("token");

        location.replace("/view/stream");
      } catch (e) {
        if (e.response.status == 400 || e.response.status == 404) {
          this.err =
            "Invalid Authentication. Your username or password may be incorrect!";
        }
      }
    },
    async sendPasswordEmail() {
      let email = prompt("Enter your email to reset your password.");

      await this.$http.post("/users/email_preset", {
        email: email,
      });
    },
    async authenticateWithGoogle(res) {
      try {
        let user = decode(res.credential);

        let { data } = await this.$http.post("/users/googleauth", user);

        this.$store.commit("logIn");
        this.$store.commit("setUserdata", data.user);

        localStorage.setItem("token", data.token);

        this.$http.defaults.headers.common["Authorization"] = data.token;

        location.replace("/view/stream");
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style>
body {
  background: rgb(90, 125, 201);
}
input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(251, 242, 242);
}
</style>

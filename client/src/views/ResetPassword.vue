<template>
  <div v-if="status">
    <div class="m-auto w-1/2 mt-16 bg-white">
      <h1 class="lexend font-bold text-5xl p-2">Reset Password</h1>
      <input
        type="password"
        class="p-2 mt-2 mb-2 w-11/12 text-xl bg-gray-200 text-black border-b-2 border-white focus:outline-none lexend font-semibold"
        v-model="pwd"
        placeholder="Enter your new password here."
      />
      <input
        type="password"
        class="p-2 mt-2 mb-2 w-11/12 text-xl bg-gray-200 text-black border-b-2 border-white focus:outline-none lexend font-semibold"
        placeholder="Confirm new password."
        v-model="cpwd"
      />
      <button
        type="button"
        @click="changePassword()"
        class="p-2 m-2 lexend font-semibold bg-blue-500 text-2xl text-white rounded"
      >
        Set New Password
      </button>
    </div>
  </div>
  <div v-else class="p-4 m-2 bg-white text-6xl text-black mt-32">
    There was a problem
    <i class="fa-sharp fa-solid fa-square-xmark text-red-500"></i>
    <br />
    <span class="text-xl"
      >You must be on this page by accident, click
      <a href="/" class="text-blue-500"> here </a> to be redirected.</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
      pwd: "",
      cpwd: "",
    };
  },
  async beforeCreate() {
    try {
      await this.$http.post("/users/verifyEmail", {
        _id: this.$route.params.id,
        token: this.$route.params.token,
      });

      this.status = true;
    } catch (e) {
      console.log(e.message);
      this.status = false;
    }
  },
  methods: {
    async changePassword() {
      try {
        if (!(this.pwd === this.cpwd))
          return alert("Both fields must be the same!");

        await this.$http.put(`/users/update_pwd`, {
          pwd: this.pwd,
          user_id: this.$route.params.id,
        });

        location.replace("/view/profile");
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style>
body {
  background: white;
}
</style>

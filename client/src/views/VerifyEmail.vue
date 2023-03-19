<template>
  <div v-if="status" class="p-4 m-2 bg-white text-6xl text-black mt-32">
    Email Successfully Verified
    <i class="fa-solid fa-square-check text-green-600"></i>
    <br />
    <span class="text-xl"
      >Now that you verified your email, you can now submit reviews!</span
    >
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
    };
  },
  async beforeCreate() {
    try {
      let user = await this.$http.post("/users/verifyEmail", {
        _id: this.$route.params.id,
        token: this.$route.params.token,
      });

      console.log(user.data.user);

      this.$store.commit("setUserData", user.data);

      console.log(this.$store.state.userData);

      this.status = true;
    } catch (e) {
      console.log(e.message);
      this.status = false;
    }
  },
};
</script>

<style>
body {
  background: white;
}
</style>

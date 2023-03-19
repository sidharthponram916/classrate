<template>
  <div>
    <form @submit.prevent="signUp" autocomplete="off">
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
        type="email"
        class="p-2 m-2 border-b-4 border-black text-white w-1/2 bg-transparent text-2xl focus:outline-none mb-10"
        placeholder="Email"
        autocomplete="off"
        v-model="user.email"
      />
      <input
        type="password"
        class="p-2 m-2 border-b-4 border-black text-white w-1/2 bg-transparent text-2xl focus:outline-none mb-10"
        placeholder="Password"
        autocomplete="off"
        v-model="user.password"
      />
      <br />
      <button
        @click="signUp()"
        class="p-2 m-2 bg-blue-800 rounded text-white text-2xl"
      >
        Sign Up
      </button>
      <p class="text-white text-xl mt-5">
        <i class="fa-sharp fa-solid fa-circle-info"></i> Sign up with a student
        email to get a verified check mark next to your review!
      </p>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async signUp() {
      try {
        let { data } = await this.$http.post("/users/create", {
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
        });

        this.$store.commit("logIn");
        this.$store.commit("setUserData", data.user);

        localStorage.setItem("token", data.token);

        this.$http.defaults.headers.common["Authorization"] = localStorage.getItem("token");

        location.replace("/view/profile");
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style>
input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
}
body {
  background: rgb(84, 122, 206);
}
</style>

<template>
  <ul
    class="flex relative items-center bg-blue-900 justify-between text-white p-3 w-full font-bold"
  >
    <li class="mr-6">
      <a href="/view/stream" class="block align-middle text-2xl p-2"
        ><span class="flex lexend">
          <span class="ml-2 font-bold"
            >Class<span class="text-yellow-200">Rate</span
            ><span class="text-sm">.org</span></span
          ></span
        ></a
      >
    </li>
    <li class="hidden md:block mr-6">
      <a href="/write" class="align-middle p-2 lexend font-bold"
        >Write a Review</a
      >
    </li> 
     <li class="hidden md:block mr-6">
      <a href="/tools/builder/connect" class="align-middle p-2 lexend font-bold"
        >Class Builder</a
      >
    </li>
    <li class="block md:hidden mr-6">
      <a href="/write" class="align-middle p-2 text-2xl">📋</a>
    </li>
    <!-- <li class = 'block md:hidden mr-6'> 
         <a href = '/tools/builder' class = 'align-middle p-2 text-2xl'>📈</a>  
     </li> -->
    <!-- <li class = 'hidden md:block mr-6'> 
         <a  href = '/tools/builder' class = 'block align-middle p-2'>Build Schedule</a>  
     </li> -->
    <li v-if="$store.state.loggedIn === true" class="hidden md:block ml-auto">
      <a
        href="/login"
        @click="logOut()"
        class="block align-middle text-white bg-blue-900 hover:bg-blue-800 p-2 rounded lexend font-bold"
        >Log Out</a
      >
    </li>
    <li v-if="$store.state.loggedIn === false" class="ml-auto">
      <button><div><a href = "/login">Sign In</a></div></button>
    </li>
    <li v-else class="ml-5">
      <a
        href="/view/profile"
        class="block align-middle bg-blue-900 hover:bg-blue-800 text-white p-2 rounded"
        ><i class="fa-solid fa-gear text-xl" style="color: #ffffff"></i
      ></a>
    </li>
  </ul>
</template>

<script>
import decode from "jwt-decode";
export default {
  data() {},
  async mounted() {
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
    async logOut() {
      localStorage.removeItem("token");
      delete this.$http.defaults.headers.common["Authorization"];
      this.$store.commit("logOut");
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
div img {
  width: 35px;
  height: 35px;
}
.lato {
  font-family: Lato, sans-serif;
}
</style>

<template>
  <ul
    class="flex relative items-center bg-blue-900 justify-between text-white p-3 w-full font-bold"
  >
    <li class="mr-6">
      <a href="/" class="block align-middle text-2xl p-2"
        ><span class="flex lexend">
          <span class="ml-2 font-bold"
            >Class<span class="text-yellow-200">Rate</span
            ><span class="text-sm">.org</span></span
          ></span
        ></a
      >
    </li>
    <li class="hidden md:block mr-6">
      <a href="/write" class="align-middle p-2">Write a Review</a>
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
        href="/view/profile"
        class="block align-middle bg-blue-900 hover:bg-blue-800 text-white p-2 rounded"
        >My Page</a
      >
    </li>
    <li v-if="$store.state.loggedIn === false" class="ml-auto">
      <a
        class="block align-middle bg-blue-600 hover:bg-blue-500 p-2 rounded cursor-pointer"
        href="/login"
        >Sign In</a
      >
    </li>
    <li v-else class="ml-5">
      <a
        href="/login"
        @click="logOut()"
        class="block align-middle text-white bg-blue-900 hover:bg-blue-800 p-2 rounded"
        >Log Out</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {},
  methods: {
    async logOut() {
      localStorage.removeItem("token");
      delete this.$http.defaults.headers.common["Authorization"];
      this.$store.commit("logOut");
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

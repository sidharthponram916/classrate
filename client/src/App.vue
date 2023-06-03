<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar />
    <router-view />
    <div class="flex mt-auto text-center lexend font-bold text-white mt-16">
      <div class="bg-blue-700 p-2 w-1/3  border-white">
        <i class="ml-2 fa-brands fa-instagram text-xl align-middle"></i>
        <a
          href="https://instagram.com/classrateofficial"
          target="_blank"
          class = 'align-middle'
        >
          @classrateofficial
        </a>
      </div>
      <div class="bg-blue-700 p-2 w-1/3 text-white lexend font-bold">
        Copyright &copy; Class<span class="text-yellow-200">Rate</span>
        2022-2023 All rights reserved.
      </div>
      <div class="bg-blue-700 p-2 w-1/3 border-white">
        Feedback?
        <a
          class="text-blue-100"
          href="https://bit.ly/crsuggestions"
          target="_blank"
        >
          https://bit.ly/crsuggestions
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar,
  },
  async mounted() {
    console.log(this.$store.state.loggedIn);
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Lexend:wght@500;600");
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@500&family=Open+Sans:wght@700&display=swap");
img {
  width: 30px;
  height: 30px;
}
::-webkit-scrollbar {
  width: 10px;
}

button:disabled {
  background: gray;
}

.lato {
  font-family: Lato, sans-serif;
}

.open {
  font-family: Open Sans, sans-serif;
}

.lexend {
  font-family: Lexend, sans-serif;
}

/* Track */
::-webkit-scrollbar-track {
  background: white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(216, 216, 210);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(132, 130, 130);
}

body {
  background: #cbd5e1;
}

#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
      <Navbar /> 
      <router-view /> 

  </div>
</template>
<script> 
import Navbar from './components/Navbar'; 

export default { 
     components: { 
         Navbar
     }, 
     async mounted() { 
        console.log(this.$store.state.loggedIn); 
     }
}

</script> 
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');


::-webkit-scrollbar {
  width: 10px;
}

button:disabled { 
    background: gray; 
}

/* Track */
::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

body { 
   background: rgb(211, 230, 249)
}

#app {
  font-family: Lato, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

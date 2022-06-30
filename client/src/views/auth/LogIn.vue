<template>
   <div class = 'flex my-48'>
         <div class = 'm-auto bg-white p-3 m-4 w-1/2 text-black rounded'> 
              <h1 class = 'mb-5 text-5xl'>Log In</h1>

              <input
              v-model = 'user.username'
              type = 'email'
              placeholder = "username"
              class = 'border border-black w-11/12 rounded p-3 m-4 shadow-lg mb-10'
              >
              <br>
               <input
              v-model = 'user.password'
              type = 'password'
              placeholder = "Password"
              class = 'border border-black w-11/12 rounded p-3 shadow-lg'
              >
              <br>
              <input @click = "login()" class = 'p-2 text-white rounded mt-2 bg-blue-500' type = 'button' value = 'Log In'>
         </div>
   </div>
</template>

<script>    
export default {
    data() { 
         return { 
            user: { 

            }
         }
    }, 
    methods: { 
      async login() {
   try { 
      let { data } = await this.$http.post('/users/login', { 
             username: this.user.username, 
             password: this.user.password 
         })

         this.$store.commit("logIn");

         this.$store.commit("setUserData", data.user);

         localStorage.setItem("token", data.token); 

         this.$http.defaults.headers.common["Authorization"] = localStorage.getItem('token');
         
         location.replace("/home"); 
   }
   catch (e) { 
       if (e.response.status == 404)  {
            alert("Invalid Authentication. Your username or password may be incorrect!")
       }
   }
}
    }
}
</script>

<style>

</style>
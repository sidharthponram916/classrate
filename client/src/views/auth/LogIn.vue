<template>
   <div class='lg:flex'>
    <form @submit.prevent="login" class='bg-blue-700 p-5 float-right w-full lg:w-1/2 text-white m-auto'>
      <h1 class='font-bold text-4xl m-2 text-center text-6xl text-white mt-20 mb-20'>Login to ClassRate</h1>
      <br>
      <h1 class = 'text-white text-3xl text-center'>Username</h1>
      <input
          type="text"
          v-model="user.username"
          placeholder = "Username"
          class='w-3/4 p-2 border-b-2 bg-transparent m-3 font-bold mb-5 focus:outline-none text-white text-xl'
      >
      <br>
      <h1 class = 'text-white text-3xl text-center'>Password</h1>
      <input
          type='password'
          v-model='user.password'
          placeholder = "Password"
          class='w-3/4 p-2 border-b-2 bg-transparent m-3 font-bold mb-5 focus:outline-none text-white text-xl'
      >
      <br>
      <button type="submit" class=' m-2 p-2 text-white rounded text-2xl bg-blue-600'> Log In</button>
      <br>
      <span class="text-lg text-red-500 font-bold">{{ err }}</span>
    </form>

  </div>
</template>

<script>    
export default {
    data() { 
         return { 
            user: { 

            }, 
            err: ""
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
            this.err = "Invalid Authentication. Your username or password may be incorrect!"
       }
   }
}
    }
}
</script>

<style>
  body { 
     background: rgb(13, 67, 183)
  }
</style>
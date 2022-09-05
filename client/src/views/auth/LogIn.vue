<template>
   <div class='lg:flex'>
    <form @submit.prevent="login" class='bg-blue-800 p-5 float-right w-full lg:w-1/2 text-white'>
      <h1 class='font-bold text-4xl mb-20 m-2 text-center text-6xl text-white '>Log into EduRate</h1>
      <br>
      <h1 class = 'text-white text-3xl text-center'>Username</h1>
      <input
          type="text"
          v-model="user.username"
          placeholder = "Username"
          class='w-3/4 p-2 border-2 bg-transparent m-3 rounded font-bold mb-5 focus:outline-none text-xl'
      >
      <br>
      <h1 class = 'text-white text-3xl text-center'>Password</h1>
      <input
          type='password'
          v-model='user.password'
          placeholder = "Password"
          class='w-3/4 p-2 border-2 bg-transparent m-3 rounded font-bold mb-5 focus:outline-none text-xl'
      >
      <br>
      <button type="submit" class=' m-2 p-2 bg-green-500 text-white rounded text-2xl bg-blue-800 border-2'> Log In</button>
      <br>
      <span class="text-lg text-red-500 font-bold">{{ err }}</span>
    </form>

    <div style = "background:url('https://www.iesabroad.org/files/styles/news__1170x600_/public/default_featured_image_121.jpg?itok=kKD_IRsf');background-size:cover" class='bg-green-200 float-left w-3/2 flex-1 h-screen hidden lg:block'>
   
    </div>
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
     background: rgb(7, 64, 186)
  }
</style>
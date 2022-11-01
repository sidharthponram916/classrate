<template>
   <div class='lg:flex'>
    <div style = "background:url('https://www.iesabroad.org/files/styles/news__1170x600_/public/default_featured_image_121.jpg?itok=kKD_IRsf');background-size:cover" class='relative bg-green-200 float-left w-3/2 flex-1 h-screen hidden lg:block text-white'>
          <!-- <h1 class = 'p-2 m-2 text-left text-7xl mb-5 mt-10'>Thanks for Signing Up!</h1>
           <h1 class = 'p-2 m-2 text-left text-4xl'>By becoming a member, you can unlock many benefits, including the following...</h1>
           <div>
              <h1 class = 'text-left p-2 m-2 text-3xl'>1) Writing reviews, and rating classes.</h1>
              <h1 class = 'text-left p-2 m-2 text-3xl'>2) Adding schools in your area.</h1>
              <h1 class = 'text-left p-2 m-2 text-3xl'>3) Access to exclusive tools such as the Class builder!</h1>
           </div>  -->
        </div>
    <form @submit.prevent="signUp" class='bg-blue-800 p-5 float-right w-full lg:w-1/2 text-white min-h-screen relative'>
      <h1 class='font-bold text-4xl mb-10 m-2 text-center text-6xl text-white mt-16'>Register</h1>
      <br>
      <h1 class = 'text-white text-3xl text-center'>Username</h1>
      <input
          type="text"
          v-model="user.username"
          placeholder = "Username"
          class='w-3/4 p-2 border-b-2 bg-transparent m-3 font-bold mb-5 focus:outline-none text-xl'
      >
      <br>
      <h1 class = 'text-white text-3xl text-center'>Email</h1>
      <input
          type="email"
          v-model="user.email"
          placeholder = "Email"
          class='w-3/4 p-2 border-b-2 bg-transparent m-3 font-bold mb-5 focus:outline-none text-xl'
      >
      <br>
      <h1 class = 'text-white text-3xl text-center'>Password</h1>
      <input
          type='password'
          v-model='user.password'
          placeholder = "Password"
          class='w-3/4 p-2 border-b-2 bg-transparent m-3 font-bold mb-5 focus:outline-none text-xl'
      >
      <br>
      <button type="submit" class=' m-2 p-2 bg-green-500 text-white rounded text-2xl bg-blue-900'>Sign Up</button>
    </form>
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
         async signUp() { 
          try { 
             let { data } = await this.$http.post('/users/create', { 
                  username: this.user.username, 
                  email: this.user.email, 
                  password: this.user.password,
                  school: this.user.school, 
                  graduatingClass: `${this.user.graduatingClass}`
              })

              this.$store.commit("logIn");
              this.$store.commit("setUserData", data.user);  

              localStorage.setItem("token", data.token);

              this.$http.defaults.headers.common["Authorization"] = localStorage.getItem('token');

              location.replace("/home"); 
          }
          catch (e) { 
               console.log(e.message); 
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
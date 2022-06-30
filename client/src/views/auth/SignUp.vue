<template>
   <div class = 'flex my-32'>
         <div class = 'm-auto bg-white p-3 m-4 w-1/2 text-black rounded'> 
              <h1 class = 'mb-5 text-5xl'>Register</h1>
              <input
              v-model = 'user.username'
              type = 'text'
              placeholder = "Enter a username"
              class = 'border border-black w-11/12 rounded p-3 m-4 shadow-lg'
              >
              <br>
              <input
              v-model = 'user.school'
              type = 'text'
              placeholder = "Enter your school exactly how it is stated on Google."
              class = 'border border-black w-11/12 rounded p-3 m-4 shadow-lg'
              >
              <br>
              <input
              v-model = 'user.email'
              type = 'email'
              placeholder = "Enter your E-Mail"
              class = 'border border-black w-11/12 rounded p-3 m-4 shadow-lg'
              >
              <br>
               <input
              v-model = 'user.password'
              type = 'password'
              placeholder = "Password"
              class = 'border border-black w-11/12 rounded p-3 shadow-lg'
              >
              <br>
              <input @click = 'signUp()' class = 'p-2 text-white rounded mt-2 bg-blue-500 cursor-pointer' type = 'button' value = 'Register'>
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
         async signUp() { 
          try { 
             let { data } = await this.$http.post('/users/create', { 
                  username: this.user.username, 
                  email: this.user.email, 
                  password: this.user.password,
                  school: this.user.school, 
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

</style>
<template>
<ul class="flex relative items-center justify-between bg-blue-900 text-white p-3 w-full">
     <li class = 'mr-6'> 
         <a href = '/home' class = 'block align-middle text-2xl p-2'>🎓 Classrate<span class = 'text-sm'>.org</span></a>  
     </li>
    <li class = 'mr-6'> 
         <a href = '/write' class = 'block align-middle p-2'>Write a Review</a>  
     </li>
    <li v-if = "$store.state.loggedIn === false" class = 'ml-auto'> 
         <a href = '/signup' class = 'block align-middle bg-blue-600 hover:bg-blue-500 p-2 rounded'>Sign Up</a>  
     </li>       
     <li v-else class = 'ml-auto'> 
         <a href = '/u/o/settings' class = 'block align-middle bg-blue-600 hover:bg-blue-500 text-white p-2 rounded'>My Page</a>  
      </li> 

       <li v-if = "$store.state.loggedIn === false" class = 'ml-5'> 
         <a href = '/login' class = 'block align-middle bg-blue-600 hover:bg-blue-500 text-white p-2 rounded'>Log In</a>  
      </li> 
      <li v-else class = 'ml-5'> 
         <a href = '/login' @click = "logOut()" class = 'block align-middle text-white bg-blue-600 hover:bg-blue-500 p-2 rounded'>Log Out</a>  
      </li> 

</ul>  
</template>      

<script>
export default {
   components: { 
       
   },
   methods: { 
       async logOut() { 
             localStorage.removeItem("token"); 
             delete this.$http.defaults.headers.common["Authorization"]; 
             this.$store.commit("logOut"); 
       }
   } 
}
</script>

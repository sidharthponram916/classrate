<template>
<ul class="flex relative items-center justify-between bg-gradient-to-r from-blue-900 to-blue-500 text-white p-3 w-full">
     <li class = 'mr-6'> 
         <a href = '/home' class = 'block align-middle text-2xl p-2'><span class = 'flex'>🎓 <span class = 'ml-2'>Class<span class = 'text-yellow-200'>Rate</span></span></span></a>  
     </li>
    <li class = 'mr-6'> 
         <a href = '/write' class = 'block align-middle p-2'>Write a Review</a>  
     </li>
     <li class = 'mr-6'> 
         <a target = "_blank" href = 'https://docs.google.com/forms/d/e/1FAIpQLSclD029c9Ntt7BNoQ4ZYTRRBj-q1YKvHZqub6kkAEOY_Vr6Zg/viewform?usp=sf_link' class = 'block align-middle p-2'>Send Feedback</a>  
     </li>
    <li v-if = "$store.state.loggedIn === false" class = 'ml-auto'> 
         <a href = '/signup' class = 'block align-middle bg-blue-600 hover:bg-blue-500 p-2 rounded'>Sign Up</a>  
     </li>       
     <li v-else class = 'ml-auto'> 
         <a href = '/view/profile' class = 'block align-middle bg-blue-900 hover:bg-blue-800 text-white p-2 rounded'>My Page</a>  
      </li> 

       <li v-if = "$store.state.loggedIn === false" class = 'ml-5'> 
         <a href = '/login' class = 'block align-middle bg-green-900 hover:bg-blue-800 text-white p-2 rounded'>Log In</a>  
      </li> 
      <li v-else class = 'ml-5'> 
         <a href = '/login' @click = "logOut()" class = 'block align-middle text-white bg-blue-900 hover:bg-blue-800 p-2 rounded'>Log Out</a>  
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

<style> 
div img { 
    width: 35px;
    height: 35px;  
}
</style> 
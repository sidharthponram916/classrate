<template>
    <div :class = 'styling'>  
         <button @click = "gauth()" class = 'flex m-auto rounded bg-blue-800 text-xl p-3'>
            <img src = '../assets/google.png'> 
            <span class = 'mt-1 ml-2'> Sign with Email</span>   
        </button>
    </div>
</template>

<script>
export default {
   props: { 
       styling: String
   }, 
   methods: { 
      async gauth() { 
        const g_user =  await this.$gAuth.signIn(); 
        console.log(g_user)
      }
   }
}
</script>

<style>

</style>
<template>
    <div> 
     <div class = 'flex bg-white m-4 rounded'>
          <input
           type = 'text'
           placeholder = "Search a school subject, college course or school   🔎"
           class = 'p-2 m-2 w-full focus:outline-none'
           > 
     </div>
     <div class = 'bg-blue-900 m-4'>
        <h1 class = 'text-left text-3xl p-4 text-white'>Recent Reviews from J. P. Stevens High School</h1>
        <div class = 'flex grid grid-cols-2 md:grid-cols-4 gap-10 bg-white p-4 m-4 h-64 overflow-y-scroll'> 
          <div class = 'flex' v-for = "review in reviews" :key = "review._id">
               <div class = 'text-left p-3 bg-gray-100 sm:w-72 mr-3'>
                    <h1 class = 'text-xl'>{{ review.course }} </h1>
                    <h1 class = 'text-sm'>Someone from {{ review.school }}</h1>
                   <h1 class = 'mb-1 py-1 mr-1 text-4xl text-yellow-500'>{{ rating(review.overall)}}</h1>
                   
                   <p class = 'static bottom-0'>{{ review.desc.slice(0,150) }}... <br><u>Read More</u></p>
               </div>
           </div>
        </div>
         <br>
    </div> 
</div>
</template>

<script>
export default {
    data() { 
        return { 
           reviews: []
        }
    }, 
    async mounted() { 
         let { data } = await this.$http.get('/reviews/all'); 
         this.reviews = data; 
    }, 
    methods: { 
         rating(num) { 
              let rating = "";
              
              for (let i = 0; i < num; i++) { 
                   rating += "★"
              }
              for (let i = 0; i < (5 - num); i++) { 
                   rating += "☆"
              }

              return rating; 
         }
    }
}
</script>

<style>

</style>
<template>
 <div :class = 'styling'>
     <div class = 'bg-white text-black w-11/12 m-5 rounded'> 
        <input 
        type = 'text'
        v-model = 'search'
        @keyup = "filterReviews()"
        class = 'mr-auto w-full p-3 text-xl focus:outline-none'
        placeholder = 'Enter a course, school, review, etc...'
        >
        <div v-if = "search.trim('') != ''" class = 'max-h-72 overflow-y-auto'> 
           <div v-for = "review in results" :key = "review._id" class = "w-full">
               <div class = 'flex bg-gray-100 p-3 cursor-pointer border'>
                    <img src = 'https://icon-library.com/images/subject-icon/subject-icon-5.jpg' class = 'w-12 rounded-full mr-3'>
                    <h1 class = 'text-left mr-2'>{{ review.course }} Rating <br> <h1 class = 'mr-2 text-gray-600'>{{ review.school }}</h1></h1>
               </div>
           </div>
           <div class = 'bg-gray-300 p-2 text-left'> 
                 Can't find what you're looking for? Add it <u class = 'text-blue-500'>here</u>!
           </div>
        </div>
  </div>  
        
        </div>
</template>

<script>
export default {
    props: {
         styling: String
    },
    data() { 
        return { 
           reviews: [],
           search: "", 
           results: []
        }
    }, 
    async mounted() { 
         let { data } = await this.$http.get('/reviews/all'); 
         this.reviews = data.reverse(); 
    },
    methods: { 
         filterReviews() { 
           let { reviews } = this; 
           let results = []; 
            for (let i = 0; i < reviews.length; i++) { 
                 let temp = reviews[i]; 

                 if (temp.course.toLowerCase().startsWith(`${this.search.toLowerCase().trim('')}`)) { 
                      results.push(temp); 
                 }
            }
            this.results = results; 
        }
    }
}
</script>

<style>

</style>
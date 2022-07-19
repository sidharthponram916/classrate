<template>
<div> 
     <div class = 'w-full p-2 m-auto rounded'>
         <div class = 'my-4 mx-20 text-left text-white bg-indigo-800 p-3'>
           <h1 class = 'text-4xl p-4'> Welcome, {{ this.$store.state.userData.username }} 👋</h1>
           <p class = 'mx-4 mb-2'>This is your Discover page. Here you can discover recent posts, categories, and much more!</p>
        <div id = "search" class = 'mx-4 mb-2 my-4 rounded bg-white'>
           <input
           type = "text"
           v-model = "search"
           @keyup = "filterReviews()"
           placeholder = "Search a School, Review, or Course 🔎"
           class = 'w-3/4 p-1 text-black m-2 focus:outline-none mb-2'
           >   
        <div v-if = "search !== '' " class = 'max-h-72 overflow-y-auto rounded'>
          <div v-for = "review in results" :key = "review._id" class = 'text-black bg-gray-100 p-1 rounded overflow-y-auto'>
              <div class = 'flex p-2 border-2 mt-1 bg-white'> 
                <img src = "https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/Stack-books-isolated-3d-rendering/960x0.jpg?format=jpg&width=960" class = 'w-20 rounded-full'>
                 <div class = 'ml-2 text-md'> {{ review.course }}<br> <span class = 'text-gray-600'>{{ review.school }}</span><br> <span class = 'text-yellow-600 text-xl'> {{ rating(review.overall) }}</span> </div>
              </div>
         </div>
        </div>
        </div>
         </div>
     </div>
     <div class = 'text-black m-auto p-2'>
        <div class ='text-3xl text-black text-center md:text-left my-4 mx-20 p-2'>Recent Reviews</div>
        <div v-if = "getReviews.length === 0">No Reviews... Write your first review today!</div>
        <div class = 'flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-black p-2 m-4 md:my-4 md:mx-20'> 
            <div class = 'flex' v-for = "review in getReviews" :key = "review._id">
               <div class = 'relative text-left p-3 bg-white w-96 mr-auto md:mr-3 rounded border-2'>
                    <h1 class = 'text-xl'>{{ review.course }}</h1>
                    <h1 class = 'text-sm mb-1'>Someone from {{ review.school }}</h1>
                    <h1 class = 'text-md text-gray-600'>{{ review.createdAt  }}</h1>
                   <h1 class = 'my-1 mr-1 text-5xl text-yellow-500'>{{ rating(review.overall)}}</h1>
                   <p class = 'bg-white text-black rounded p-1 mb-7'>{{ review.desc.slice(0,250)}} <br></p>
                     
                    <a :href = "'/reviews/' + review._id"><u class = 'absolute bottom-2 mx-1'>Learn More</u></a>
               </div>
           </div>   
        </div>
     </div>
     <div class = 'm-auto p-2'>
        <div class ='text-3xl text-black text-center md:text-left my-4 mx-20 p-2'>Categories</div>
        <div class = 'flex m-auto md:my-4 md:mx-20 text-black grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6'>
           <div class = 'p-4 m-2 bg-white text-center w-48 h-48 rounded border-2'>
               <div class = 'text-3xl mb-2'> Humanities </div>
               <span class = 'text-8xl'>🌎</span>
           </div>
           <div class = 'p-4 m-2 bg-white text-center w-48 h-48 rounded border-2'>
               <div class = 'text-3xl mb-2 text-center'> English </div>
               <span class = 'text-8xl'>📖</span>
           </div>
            <div class = 'p-4 m-2 bg-white text-center w-48 h-48 rounded border-2'>
               <div class = 'text-3xl mb-4 text-center'>Math</div>
               <span class = 'text-7xl'>📐</span>
           </div>
           <div class = 'p-4 m-2 bg-white text-center w-48 h-48 rounded border-2'>
               <div class = 'text-3xl mb-4 text-center'>Science</div>
               <span class = 'text-7xl'>🔬</span>
           </div>
           <div class = 'p-4 m-2 bg-white text-center w-48 h-48 rounded  border-2'>
               <div class = 'text-3xl mb-4 text-center'>Economics</div>
               <span class = 'text-7xl'>📉</span>
           </div>
            <div class = 'p-4 m-2 bg-white text-center w-48 h-48 rounded border-2'>
               <div class = 'text-3xl mb-4 text-center'>Tech/Eng.</div>
               <span class = 'text-7xl'>💻</span>
           </div>
         </div>
     </div>
</div>
</template>

<script>
export default {
    data() { 
        return { 
           reviews: [], 
           load: 8, 
           search: "", 
           results: []
        }
    }, 
    async mounted() { 
         let { data } = await this.$http.get('/reviews/all'); 
         this.reviews = data.reverse(); 
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
         }, 
         dateString(date) { 
              return `${new Date(date).toLocaleDateString()}  `
         }, 
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
    }, 
    computed: { 
        getReviews() { 
          return this.reviews.slice(0, this.load); 
        },
    }
}
</script>

<style>

</style>
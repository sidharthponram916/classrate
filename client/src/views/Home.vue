<template>
<div> 
    <div class = 'w-full p-2 m-auto rounded'>
         <div class = 'my-4 mx-20 text-left text-white bg-indigo-800 p-3'>
           <h1 class = 'text-4xl p-4'> Welcome, {{ this.$store.state.userData.username }} 👋</h1>
           <p class = 'mx-4 mb-2'>This is your Discover page. Here you can discover recent posts, categories, and much more!</p>
           <Searchbar styling = "rounded" />
    </div>

     <div class = 'text-black m-auto p-2'>  
        <div class ='text-3xl text-black text-center md:text-left my-4 mx-20 p-2'>Recent Activity from 🌎</div>
        <div v-if = "getReviews.length === 0">No Reviews... Write your first review today!</div>
        <div class = 'flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-black p-2 m-4 md:my-4 md:mx-20'> 
            <div class = 'flex' v-for = "review in getReviews" :key = "review._id">
             
               <div :style = "'background:' + school(review.school_id).color" class = 'relative text-left p-3 bg-blue-500 text-white w-96 shadow-lg mr-auto md:mr-3 rounded'>
                    <h1 class = 'text-2xl'>{{ review.course }}</h1>
                    <h1 class = 'text-sm mb-1'>Someone from <a :href = "'/schools/view/' + review.school_id">{{ review.school }}</a></h1>
                    <h1 class = 'text-md text-gray-200'>{{ review.createdAt  }}</h1>
                   <h1 class = 'my-1 mr-1 text-5xl text-yellow-500'>{{ rating(review.overall)}}</h1>
                   <p class = 'rounded p-1 mb-7'>{{ review.desc.slice(0,250)}} <br></p>
                     
                    <a :href = "'/reviews/' + review._id"><u class = 'absolute bottom-2 mx-1'>Learn More</u></a>
               </div>
           </div>   
        </div>
     </div>
   <div class = 'm-auto p-2'>
        <div class ='text-3xl text-black text-center md:text-left my-4 mx-20 p-2'>Our Features</div>
        <div class = 'flex m-auto md:my-4 md:mx-20 text-black grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6'>
           <div class = 'p-4 m-2 bg-blue-400 text-white text-center rounded border-6 border-black shadow-lg'>
               <div class = 'text-2xl mb-2'>Write a Class Review</div>
               <span class = 'text-8xl'>🎓</span>
           </div>
           <div class = 'p-4 m-2 bg-blue-500 text-white text-center  rounded border-6 border-black shadow-lg'>
               <div class = 'text-2xl mb-5 text-center'>Write a Teacher Review</div>
               <span class = 'text-7xl'>👩‍🏫</span>
           </div>
           <div class = 'p-4 m-2 bg-blue-600 text-white text-center  rounded border-6 border-black shadow-lg'>
               <div class = 'text-2xl mb-5 text-center'>View Class/Course Data</div>
               <span class = 'text-7xl'>📚</span>
           </div>
           <div class = 'p-4 m-2 bg-blue-700  text-white text-center  rounded border-6 border-black shadow-lg'>
               <div class = 'text-2xl mb-5 text-center'>View and Edit School Data</div>
               <span class = 'text-7xl'>🏫</span>
           </div>
           <div class = 'p-4 m-2 bg-blue-800 text-center text-white rounded border-6 border-black shadow-lg'>
               <div class = 'text-xl mb-5 text-center'>Exclusive Class Rankings for Your School</div>
               <span class = 'text-7xl'>🏫</span>
           </div>
           <div class = 'p-4 m-2 bg-blue-900 text-center text-white rounded border-6 border-black shadow-lg'>
               <div class = 'text-xl mb-5 text-center'>More Features Coming Soon</div>
               <span class = 'text-7xl'>!</span>
           </div>
         </div>
     </div> 
</div>
</div>
</template>

<script>
import Searchbar from "../components/Searchbar.vue"; 
export default {
    components:  {
       Searchbar
    },
    data() { 
        return { 
           reviews: [], 
           schools: "",
           load: 8, 
           search: "", 
           results: []
        }
    }, 
    async mounted() { 
         let { data } = await this.$http.get('/reviews/all'); 
         this.reviews = data.reverse(); 

         let schools = await this.$http.get('/schools/all'); 
         this.schools = schools.data; 
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
         school(id) { 
            let { schools } = this; 

             let school = schools.find(school => {
                 return id === school._id;
         })

             return school; 
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
    }, 
 
}
</script>

<style>

</style>
<template>
<div> 
    <div class = 'w-full p-2 m-auto rounded'>
    <div class = 'm-5 p-5 text-white text-left bg-sky-900 w-11/12'> 
         <h1 class = 'text-4xl'>Welcome, {{ this.$store.state.userData.username }}</h1>
         <p class = 'p-2 mt-5'>Your homepage usually contains recent updates from ClassInfo.org, and Recent Activity from around the world!</p>
             <Searchbar styling = "rounded" />
    </div>

     <div class = 'text-black p-2 w-11/12'>  
        <div class ='text-3xl text-black text-center md:text-left p-2 mx-2'>Recent Activity</div>
        <div v-if = "getReviews.length === 0">No Reviews... Write your first review today!</div>
        <div class = 'flex flex-wrap gap-4 text-black md:p-2 md:m-2'> 
            <div class = 'flex' v-for = "review in getReviews" :key = "review._id">
             
               <div style = "width:310px" :style = "'background:' + school(review.school_id).color" class = 'relative text-left p-3 bg-blue-500 text-white h-96 shadow-lg mr-auto md:mr-3'>
                    <h1 class = 'text-2xl'>{{ review.course }}</h1>
                    <h1 class = 'text-sm mb-1'>Someone from <a :href = "'/schools/view/' + review.school_id">{{ review.school }}</a></h1>
                    <h1 class = 'text-md text-gray-300'>{{ review.createdAt }}</h1>
                   <h1 class = 'my-1 mr-1 text-5xl text-yellow-500'>{{ rating(review.overall)}}</h1>
                   <p class = 'rounded p-1 mb-7'>{{ review.desc.slice(0,250)}} <br></p>
                     
                    <a :href = "'/reviews/' + review._id"><u class = 'absolute bottom-2 mx-1'>Learn More</u></a>
               </div>
           </div>   
        </div>
        <div class ='text-3xl text-black text-center md:text-left p-2 mx-2'>Site Updates</div>
    <div class = 'flex grid grid-cols-5 p-2'>
        <div class = 'p-5 m-2 border-2 bg-white rounded'>
           <h1 class = 'text-left text-3xl text-center'>A New Redesign</h1>
           <img src = "https://thumbs.dreamstime.com/b/redesign-word-concept-cubes-184070135.jpg" class  = 'm-auto w-32 h-32 my-5'>
           <p>Say hello to the new <u>https://classinfo.org</u>! With the release of the new CSS Update, a whole new redesign has been made to make it more visually appealing for you guys!</p>
        </div>
        <div class = 'p-5 m-2 border-2 bg-white rounded'>
           <h1 class = 'text-left text-3xl text-center'>New Rating System</h1>
           <img src = "https://plugins.doublesecretagency.com/upvote/images/like-dislike.png" class  = 'm-auto w-32 h-32 my-5'>
           <p>People can now trust reviews with the upvoting features. Users can upvote a post that they deem to be accurate/good!</p>
        </div>
    </div>
     </div>
   
</div>
</div>
</template>

<script>
import moment from "moment"; 
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
         
         for (let review of data) { 
             review.createdAt = moment(review.createdAt).fromNow()
         }
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
span.text-7xl img {
    width: 80px; 
    height:80px; 
    margin: auto; 
}

</style>
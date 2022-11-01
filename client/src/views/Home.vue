<template>
<div> 
    <div class = 'w-full p-2 m-auto rounded'>
    <div class = 'm-5 p-5 text-white text-left bg-sky-900 w-11/12'> 
         <h1 class = 'text-4xl'>Welcome, {{ this.$store.state.userData.username }}</h1>
         <p class = 'p-2 mt-5'>Your homepage usually contains recent updates from ClassRate, and Recent Activity from around the world!</p>
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
      
       </div>
    <div class = 'text-black p-2 w-11/12'>  
       <div class ='text-3xl text-black text-center md:text-left p-2 mx-2'>Schools</div>
    <div class = 'flex flex-wrap p-2'>
       <div class = 'flex p-2' v-for = "school in schools" :key = "school._id">
            <a :href = "'/schools/view/' + school._id">
              <div class = 'p-2' :style = "'background:' + school.color"> 
                 <div class = 'text-white text-2xl text-left'>{{ school.name }}</div>
                 <div class = 'text-white text-sm text-left'>{{ school.count }} Reviews</div>
              </div>
            </a>
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
           topSchools: "",
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

         for (let school of schools.data) { 
              school.count = (this.reviews.filter(review => { 
                  return review.school_id === school._id; 
              })).length; 
         }

        schools.data.sort((a, b) => { 
            return b.count - a.count; 
        })

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
        }, 
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
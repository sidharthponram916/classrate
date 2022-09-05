<template>
 <div :class = 'styling'>
     <div class = 'bg-white text-black w-11/12 m-5 rounded'> 
        <input 
        type = 'text'
        v-model = 'search'
        @keyup = "filterData()"
        class = 'mr-auto w-full p-3 text-xl focus:outline-none'
        placeholder = 'Enter a course, school, review, etc...'
        >
        <div v-if = "search.trim('') != ''" class = 'max-h-72 overflow-y-auto'> 

           <div v-for = "course in courseResults" :key = "course._id" class = "w-full">
               <a :href = "'/courses/view/' + course._id">
                  <div class = 'flex bg-gray-100 p-3 cursor-pointer border'>
                    <img :src = "schoolData(course.school_id).url" class = 'w-12 rounded-full mr-3'>
                    <h1 class = 'text-left mr-2'>{{ course.name }} <br> <h1 class = 'mr-2 text-gray-600'>{{ schoolData(course.school_id).name }}</h1></h1>
                  </div>
               </a>
           </div>


           <div v-for = "school in schoolResults" :key = "school._id" class = "w-full">
               <a :href = "'/schools/view/' + school._id">
                  <div class = 'flex bg-gray-100 p-3 cursor-pointer border'>
                    <img :src = 'school.url' class = 'w-12 rounded-full mr-3'>
                    <h1 class = 'text-left mr-2'>{{ school.name }} <br> <h1 class = 'mr-2 text-gray-600'>{{ school.city }}, {{ school.state }}</h1></h1>
                  </div>
               </a>
           </div>

       <!--    <div v-for = "review in results" :key = "review._id" class = "w-full">
               <a :href = "'/reviews/' + review._id">
                  <div class = 'flex bg-gray-100 p-3 cursor-pointer border'>
                    <img src = 'https://icon-library.com/images/subject-icon/subject-icon-5.jpg' class = 'w-12 rounded-full mr-3'>
                    <h1 class = 'text-left mr-2'>{{ review.course }} <br> <h1 class = 'mr-2 text-gray-600'>Rating at {{ review.school }}</h1></h1>
                  </div>
               </a>
           </div>
-->
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
           schools: [],
           courses: [],
           search: "", 
           results: [], 
           schoolResults: [], 
           courseResults: []
        }
    }, 
    async mounted() { 
         let { data } = await this.$http.get('/reviews/all'); 
         this.reviews = data.reverse(); 

         let schools = await this.$http.get('/schools/all'); 
         this.schools = schools.data; 

         let courses = await this.$http.get('/courses/all'); 
         this.courses = courses.data; 
    },
    methods: { 
         filterData() { 
           let { reviews } = this; 
           let { schools } = this; 
           let { courses } = this; 

           let results = []; 
           let schoolResults = []; 
           let courseResults = []; 

            for (let i = 0; i < reviews.length; i++) { 
                 let temp = reviews[i]; 

                 if (temp.course.toLowerCase().startsWith(`${this.search.toLowerCase().trim('')}`)) { 
                      results.push(temp); 
                 }
            }
            this.results = results; 

            for (let i = 0; i < schools.length; i++) { 
                 let temp = schools[i]; 
              if (temp.name.toLowerCase().startsWith(`${this.search.toLowerCase().trim('')}`)) { 
                      schoolResults.push(temp); 
                 }

            }
            this.schoolResults = schoolResults; 


            for (let i = 0; i < courses.length; i++) { 
                 let temp = courses[i]; 

                 if (temp.name.toLowerCase().startsWith(`${this.search.toLowerCase().trim('')}`)) { 
                      courseResults.push(temp); 
                 }
            }
            this.courseResults = courseResults; 
        }, 
        schoolData(id) { 
            let school = this.schools.find(school => { 
                 return school._id === id; 
            })

            return school; 
        }
    }
}
</script>

<style>

</style>
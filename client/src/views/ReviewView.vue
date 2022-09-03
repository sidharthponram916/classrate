<template>
<div> 
  <!-- This code could be converted into a component....  --> 
  <SearchBar />
  <div class = 'bg-white text-black w-11/12 text-left m-5 border-2'>
       <h1 class = 'p-2 mx-2 text-4xl my-1 text-left'>Review of {{ review.course }} at {{ review.school }} </h1>
       <p class = 'px-2 mx-2'>Student at <span class = 'text-blue-700'><a :href = "'/schools/view/' + review.school_id">{{ review.school }}</a></span> on <span class = 'text-gray-600'>{{ review.createdAt }}</span></p>
       <p class = 'px-2 mx-2'>Class finished on <span class = 'text-blue-700'>{{ formatDate(review.year) }}</span> through {{ review.type.toLowerCase() }} instruction.</p>
       <h1 class = 'text-yellow-500 p-2 text-6xl'>{{ rating(review.overall)}}</h1>
        <span class = 'text-3xl p-2 m-2'>Instructor: <span class = 'text-gray-700 text-3xl'>{{ review.instructor }} </span></span>
        <div class = 'flex m-2 p-2 grid grid-cols-2 md:grid-cols-4'>
                 <span class = 'text-3xl mt-2 mr-32'>Difficulty<br><span :class = 'color.difficulty' class = 'text-8xl'>{{ review.difficulty }}</span>/10</span>
                 <span class = 'text-3xl mt-2 mr-32'>Curriculum<br><span :class = 'color.curriculum' class = 'text-8xl'> {{ review.curriculum }}</span>/10</span>
                 <span class = 'text-3xl mt-2 mr-32 '>Workload <br><span :class = 'color.workload' class = 'text-8xl'>{{ review.workload }}</span>/10</span>
                 <span class = 'text-3xl mt-2 mr-32'>Instructor<br><span :class = 'color.instructorRating' class = 'text-8xl'> {{ review.instructorRating }}</span>/10</span>
        </div>
         <span class = 'text-3xl p-2 m-2'>Grade Recieved<br><span :class = 'color.grade' class = 'text-8xl p-2 m-2'> {{ review.grade }}</span></span>
         <div class = 'p-2 m-2 w-full md:w-3/4'>
          <h1 class = 'text-3xl mb-2'> Review </h1>
          <p class = 'text-xl text-gray-600'> {{ review.desc }} </p>
        </div>

        <button @click = "clicked()" v-clipboard:copy = "message" class = 'p-3 m-4 bg-green-500 mr-auto rounded text-white shadow-lg text-2xl'>Share 👥</button>
        <button class = 'p-3 m-4 bg-yellow-600 mr-auto rounded text-white shadow-lg text-2xl'>Upvote 👍</button>

  </div>

<div class = 'w-11/12 text-left m-5 p-2 bg-white'>
<h1 class = 'text-left text-4xl text-black m-2 p-2'>Other Reviews</h1>
  <div class = 'flex grid grid-cols-1 gap-2 md:grid-cols-5 text-black pb-4'>
   <div v-for = "review in randomSet" :key = "review._id">
    <a :href = "'/reviews/' + review._id">
         <div class = 'p-4 m-2 border-2 rounded bg-white h-full'>  
             <h1 class = 'text-xl'>{{ review.course }} </h1>
             <h1 class = 'text-sm text-gray-600 mb-2'>{{ review.school }} </h1>
             <h1 class = 'text-2xl text-yellow-500 mb-2'>{{ rating(review.overall) }} </h1>
             <p> {{review.desc.slice(0, 100)}}...</p>
         </div>
    </a>
   </div>
</div>
</div>
</div>

</template>

<script>

import SearchBar from '../components/Searchbar.vue';
export default {
     components: { 
          SearchBar
     },
     data() { 
         return { 
             review: { 

             }, 
             schoolName: "",
            color: { 
                workload: "text-black", 
                instructorRating: "text-black", 
                difficulty: "text-black", 
                grade: "text-black"
            }, 
            data: "", 
            all: "", 
            search: "", 
            message: "heloo"
         }
     }, 
     computed: { 
         randomSet() {  
              let data = this.all; 
          // Fisher-Yates Shuffle
              function shuffle(array) {
                  for (let i = (data.length - 1); i > 0; i--) {
                  let j = Math.floor(Math.random() * (i + 1));
                         [array[i], array[j]] = [array[j], array[i]];
                  }
              }

              shuffle(data);
              return data.slice(1,6); 
          }, 
     },
     async mounted() { 
          console.log(this.$route)
         let { data } = await this.$http.get(`/reviews/get/${this.$route.params.id}`);
         let all = await this.$http.get(`/reviews/all`);

         this.review = data ; 
         this.all = all.data; 

          const school = await this.$http.get(`/schools/get/${data.school_id}`); 

             this.schoolName = school.data.name; 

         this.message = `Check out this review of ${this.review.course} at ${school.data.name}. \n
${localStorage.getItem('baseUrl')}${this.$route.fullPath} `

            this.data = data; 

           if (this.data.difficulty == 10) { 
                 this.color.difficulty = "text-red-500"; 
            }
            else if (this.data.difficulty == 9) { 
                 this.color.difficulty = "text-red-400"; 
            }
            else if (this.data.difficulty == 8) { 
                 this.color.difficulty = "text-yellow-700"; 
            }
            else if (this.data.difficulty == 7) { 
                 this.color.difficulty = "text-yellow-600"; 
            }
            else if (this.data.difficulty == 6) { 
                 this.color.difficulty = "text-yellow-500";
            }
            else if (this.data.difficulty == 5) { 
                 this.color.difficulty = "text-green-400";
            }
            else if (this.data.difficulty == 4) { 
                 this.color.difficulty = "text-green-500"; 
            }
            else if (this.data.difficulty == 3) { 
                 this.color.difficulty = "text-green-600"; 
            }
            else if (this.data.difficulty == 2) { 
                 this.color.difficulty = "text-green-700";
            }
            else { 
                 this.color.difficulty = "text-green-800"; 
            }

               if (this.data.curriculum == 1) { 
                 this.color.curriculum = "text-red-500"; 
            }
            else if (this.data.curriculum == 2) { 
                 this.color.curriculum = "text-red-400"; 
            }
            else if (this.data.curriculum == 3) { 
                 this.color.curriculum = "text-yellow-700"; 
            }
            else if (this.data.curriculum == 4) { 
                 this.color.curriculum = "text-yellow-600"; 
            }
            else if (this.data.curriculum == 5) { 
                 this.color.curriculum = "text-yellow-500";
            }
            else if (this.data.curriculum == 6) { 
                 this.color.curriculum = "text-yellow-400";
            }
            else if (this.data.curriculum == 7) { 
                 this.color.curriculum = "text-green-500"; 
            }
            else if (this.data.curriculum == 8) { 
                 this.color.curriculum = "text-green-600"; 
            }
            else if (this.data.curriculum == 9) { 
                 this.color.curriculum = "text-green-600";
            }
            else { 
                 this.color.curriculum = "text-green-600"; 
            }

             if (this.data.instructorRating == 1) { 
                 this.color.instructorRating = "text-red-500"; 
            }
            else if (this.data.instructorRating == 2) { 
                 this.color.instructorRating = "text-red-400"; 
            }
            else if (this.data.instructorRating == 3) { 
                 this.color.instructorRating = "text-yellow-600"; 
            }
            else if (this.data.instructorRating == 4) { 
                 this.color.instructorRating = "text-yellow-600"; 
            }
            else if (this.data.instructorRating == 5) { 
                 this.color.instructorRating = "text-yellow-500";
            }
            else if (this.data.instructorRating == 6) { 
                 this.color.instructorRating = "text-yellow-400";
            }
            else if (this.data.instructorRating == 7) { 
                 this.color.instructorRating = "text-green-500"; 
            }
            else if (this.data.instructorRating == 8) { 
                 this.color.instructorRating = "text-green-600"; 
            }
            else if (this.data.instructorRating == 9) { 
                 this.color.instructorRating = "text-green-600";
            }
            else { 
                 this.color.instructorRating = "text-green-600"; 
            }

            if (this.data.grade == "F") { 
                 this.color.grade = "text-red-500"; 
            }
            else if (this.data.grade == "D") { 
                 this.color.grade = "text-red-400"; 
            }
            else if (this.data.grade == "C-") { 
                 this.color.grade = "text-yellow-700"; 
            }
            else if (this.data.grade == "C") { 
                 this.color.grade = "text-yellow-600"; 
            }
            else if (this.data.grade == "C+") { 
                 this.color.grade = "text-yellow-500";
            }
            else if (this.data.grade == "B-") { 
                 this.color.instructorRating = "text-green-300";
            }
            else if (this.data.grade == "B") { 
                 this.color.grade = "text-green-500"; 
            }
            else if (this.data.grade == "B+") { 
                 this.color.grade = "text-green-600"; 
            }
            else if (this.data.grade == "A-") { 
                 this.color.grade = "text-green-600";
            }
            else if (this.data.grade == "N/A") {
                 this.color.grade = "text-black";
            }
            else { 
                 this.color.grade = "text-green-700"; 
            }

             if (this.data.workload == 10) { 
                 this.color.workload = "text-red-500"; 
            }
            else if (this.data.workload == 9) { 
                 this.color.workload = "text-red-400"; 
            }
            else if (this.data.workload == 8) { 
                 this.color.workload = "text-yellow-700"; 
            }
            else if (this.data.workload == 7) { 
                 this.color.workload = "text-yellow-600"; 
            }
            else if (this.data.workload == 6) { 
                 this.color.workload = "text-yellow-500";
            }
            else if (this.data.workload == 5) { 
                 this.color.workload = "text-yellow-400";
            }
            else if (this.data.workload == 4) { 
                 this.color.workload = "text-green-500"; 
            }
            else if (this.data.workload == 3) { 
                 this.color.workload = "text-green-600"; 
            }
            else if (this.data.workload == 2) { 
                 this.color.workload = "text-green-700";
            }
            else { 
                 this.color.workload = "text-green-800"; 
            }

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
         formatDate(dte) { 
          // Courtesy of StackOverflow for this solution (With Personal Edits for my prj): https://stackoverflow.com/questions/39195470/converting-yyyy-mm-in-string-format-to-a-month-name-var-javascript#:~:text=Use%20the%20split()%20function,by%20typing%20res%5B1%5D%20.
                         var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                         var another = months[+dte.split('-')[1] - 1]

                         return `${another} ${dte.split('-')[0]}`; 
         }, 
         clicked() { 
           alert("Information copied to clipboard!")
         }
     }
}
</script>

<style>

</style>
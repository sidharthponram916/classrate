<template>
  <div>
       <Searchbar /> 
       <div :style = "'background:' + school.color" class = 'w-11/12 mx-5 p-2 text-white'>
            <div class = 'flex p-2 m-2 text-white'>
                 <img :src = "school.url" class = 'w-16 h-16 rounded-full mr-3'>
                  <h1 class = 'text-left text-4xl mr-4'>{{ course.name }} <span class = 'text-xl'>at {{ school.name }}</span><br> 
                     <h1 class = 'text-xl'><span class = 'text-yellow-400 text-3xl'> {{ formatRating(averages.rating)}}</span></h1> 
                  </h1>
                <h1 class = 'text-left ml-auto'><a :href = "'/schools/edit/' + school._id"> Edit Information ✏️</a></h1>
               </div>
            <div class = 'flex'> 
              <h1 class = 'text-left text-gray-200 mx-4 text-xl mb-4 '><span class = 'text-4xl text-white'>{{ course.ratings.length }}</span> Ratings</h1>
            </div>
       </div>
       <div class = 'w-11/12 bg-white mx-5 p-2 text-black'>
              <div class = 'flex p-2 m-2 text-left'>
                 <span class = 'text-3xl mt-2 mr-32' >Difficulty<br><span  class = 'text-8xl' :class = "color.difficulty">{{ averages.difficulty.toFixed(1) }}</span>/10</span>
                 <span class = 'text-3xl mt-2 mr-32' >Curriculum<br><span  class = 'text-8xl' :class = "color.curriculum">{{ averages.curriculum.toFixed(1) }}</span>/10</span>
                 <span class = 'text-3xl mt-2 mr-32 '>Workload <br><span class = 'text-8xl' :class = "color.workload">{{ averages.workload.toFixed(1) }}</span>/10</span>
                 <span class = 'text-3xl mt-2 mr-32 '>Average GPA <br><span class = 'text-8xl'>{{ averages.grade.toFixed(2) }}</span>/4.00</span>
             </div> 
              <h1 class = 'text-left p-2 m-2 text-3xl'>Teachers</h1>
                     <div class = 'flex mx-2 overflow-y-auto'>
                        <div class = 'flex-none' v-for = "teacher in teachers" :key = "teacher">
                            <div class = 'p-2 rounded border-2 m-2 text-left inline-block w-auto bg-gray-100'>
                                <a :href = "'/courses/view/' + course._id">
                                  <h1 class = 'text-2xl mb-2'> {{ teacher}} <span class = 'text-sm p-2 m-2 text-2xl text-yellow-700 rounded'> ★★★☆☆ </span></h1>                              
                                  <h1 class = 'text-sm'>N/A Ratings</h1>  
                                </a>
                            </div> 
                        </div>
                      </div> 

             <div class = 'p-2 m-2 text-3xl text-left'>Ratings </div>
            <div class = 'flex mx-2 overflow-y-auto'>
                        <div class = 'flex-none' v-for = "rating in course.ratings" :key = "rating.data._id">
                            <div class = 'rounded border-2 m-2 text-left inline-block w-auto'>
                                <a :href = "'/reviews/' + rating.data._id">
                                    <h1 class = 'text-2xl px-2 mx-2 my-2'>Student who had {{ rating.data.instructor }}</h1>
                                    <h1 class = 'text-5xl p-2 text-yellow-600'>{{ formatRating(rating.data.overall) }}</h1>
                                    <h1 class = 'text-md px-2 mx-2 my-2'>{{ rating.data.desc.slice(0, 99)}}...</h1>
                                </a>
                            </div> 
                        </div>
                      </div> 
       </div>
  </div> 
</template>

<script>
import Searchbar from '../../components/Searchbar.vue'
export default {
    components: { 
        Searchbar
    }, 
    data() { 
        return { 
             school: { 

             },
             course: { 

             }, 
             rating: { 

             }, 
             averages: { 

             }, 
             color: { 

             }
        }
    },
     async mounted() { 
         let course = await this.$http.get('/courses/getbyid/' + this.$route.params.id); 
         this.course = course.data; 

         let school = await this.$http.get('/schools/get/' + this.course.school_id); 
         this.school = school.data; 

         let ratings = course.data.ratings; 

         let difficulties = ratings.map(a => a.data.difficulty); 
         let findif = 0; 
         console.log(difficulties)
        
         for (let i = 0; i < difficulties.length; i++) { 
              findif += difficulties[i]; 

              if (i === (difficulties.length - 1)) { 
                  findif = findif / difficulties.length; 
              }
         }

         this.averages.difficulty = findif; 

         let workloads = ratings.map(a => a.data.workload); 
         let findwo = 0; 
        
         for (let i = 0; i < workloads.length; i++) { 
              findwo += workloads[i]; 

              if (i === (workloads.length - 1)) { 
                  findwo = findwo / workloads.length; 
              }
         }

         this.averages.workload = findwo

         let curriculums = ratings.map(a => a.data.curriculum); 
         let findcu = 0; 
        
         for (let i = 0; i < curriculums.length; i++) { 
              findcu += curriculums[i]; 

              if (i === (curriculums.length - 1)) { 
                  findcu = findcu / curriculums.length; 
              }
         }

         this.averages.curriculum = findcu

         let stars = ratings.map(a => a.data.overall); 
         let findra = 0; 
        
         for (let i = 0; i < stars.length; i++) { 
              findra += stars[i]; 

              if (i === (stars.length - 1)) { 
                  findra = findra / stars.length; 
              }
         }

         this.averages.rating = findra

         let grades = ratings.map(a => a.data.grade); 
         let fingrades = 0; 
         fingrades; 
         for (let i = 0; i < grades.length; i++) { 
             let grade = grades[i]; 

             switch (grade) { 
                 case "A+": 
                    fingrades += 4.00;
                    break; 
                 case "A": 
                    fingrades += 4.00;
                    break; 
                 case "A-": 
                    fingrades += 3.67; 
                    break; 
                 case "B+":
                    fingrades += 3.33;
                    break;
                 case "B":
                    fingrades += 3.00; 
                     break;
                 case "B-": 
                    fingrades += 2.67; 
                     break;
                 case "C+": 
                    fingrades += 2.33; 
                    break; 
                 case "C": 
                    fingrades += 2.00; 
                    break;
                 case "C-": 
                    fingrades += 1.67; 
                    break; 
                 case "D": 
                    fingrades += 1.33; 
                    break; 
                 case "F": 
                    fingrades += 1.00; 
                    break; 
                 case "N/A": 
                    grades.length = grades.length - 1; 
                    break;
             }

             if (i === (grades.length - 1)) { 
                 fingrades = fingrades / grades.length; 
             }
         }

         this.averages.grade = fingrades; 

          if (this.averages.difficulty == 10) { 
                 this.color.difficulty = "text-red-500"; 
            }
            else if (this.averages.difficulty == 9) { 
                 this.color.difficulty = "text-red-400"; 
            }
            else if (this.averages.difficulty == 8) { 
                 this.color.difficulty = "text-yellow-700"; 
            }
            else if (this.averages.difficulty == 7) { 
                 this.color.difficulty = "text-yellow-600"; 
            }
            else if (this.averages.difficulty == 6) { 
                 this.color.difficulty = "text-yellow-500";
            }
            else if (this.averages.difficulty == 5) { 
                 this.color.difficulty = "text-green-400";
            }
            else if (this.averages.difficulty == 4) { 
                 this.color.difficulty = "text-green-500"; 
            }
            else if (this.averages.difficulty == 3) { 
                 this.color.difficulty = "text-green-600"; 
            }
            else if (this.averages.difficulty == 2) { 
                 this.color.difficulty = "text-green-700";
            }
            else { 
                 this.color.difficulty = "text-green-800"; 
            }

               if (this.averages.curriculum == 1) { 
                 this.color.curriculum = "text-red-500"; 
            }
            else if (this.averages.curriculum == 2) { 
                 this.color.curriculum = "text-red-400"; 
            }
            else if (this.averages.curriculum == 3) { 
                 this.color.curriculum = "text-yellow-700"; 
            }
            else if (this.averages.curriculum == 4) { 
                 this.color.curriculum = "text-yellow-600"; 
            }
            else if (this.averages.curriculum == 5) { 
                 this.color.curriculum = "text-yellow-500";
            }
            else if (this.averages.curriculum == 6) { 
                 this.color.curriculum = "text-yellow-400";
            }
            else if (this.averages.curriculum == 7) { 
                 this.color.curriculum = "text-green-500"; 
            }
            else if (this.averages.curriculum == 8) { 
                 this.color.curriculum = "text-green-600"; 
            }
            else if (this.averages.curriculum == 9) { 
                 this.color.curriculum = "text-green-600";
            }
            else { 
                 this.color.curriculum = "text-green-600"; 
            }
          
            if (this.averages.workload == 10) { 
                 this.color.workload = "text-red-500"; 
            }
            else if (this.averages.workload == 9) { 
                 this.color.workload = "text-red-400"; 
            }
            else if (this.averages.workload == 8) { 
                 this.color.workload = "text-yellow-700"; 
            }
            else if (this.averages.workload == 7) { 
                 this.color.workload = "text-yellow-600"; 
            }
            else if (this.averages.workload == 6) { 
                 this.color.workload = "text-yellow-500";
            }
            else if (this.averages.workload == 5) { 
                 this.color.workload = "text-yellow-400";
            }
            else if (this.averages.workload == 4) { 
                 this.color.workload = "text-green-500"; 
            }
            else if (this.averages.workload == 3) { 
                 this.color.workload = "text-green-600"; 
            }
            else if (this.averages.workload == 2) { 
                 this.color.workload = "text-green-700";
            }
            else { 
                 this.color.workload = "text-green-800"; 
            }
     }, 
     computed: { 
        teachers() { 
             let { course } = this; 

             let ratings = course.ratings; 

             let teachers = ratings.map(a => a.data.instructor); 

             return teachers; 
         }
     }, 
     methods: { 
         formatRating(num) { 
              let rating = "";
              
              for (let i = 0; i < num; i++) { 
                   rating += "★"
              }
              for (let i = 0; i < (5 - num); i++) { 
                   rating += "☆"
              }

              return rating; 
         },
     }

}
</script>

<style>
div::-webkit-scrollbar-thumb {
  background: none
}

/* Handle on hover */
div::-webkit-scrollbar-thumb:hover {
  background: gray
}

</style>
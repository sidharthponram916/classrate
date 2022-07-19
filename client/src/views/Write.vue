<template>
   <div class = 'p-2'>
          <div class = 'text-left m-auto bg-blue-800 text-white w-5/6'> 
               <h1 class = 'text-left m-2 p-2 text-4xl'>Write a Review 📋</h1>
               <p class = 'text-md m-2 p-2'> 
                  Please fill out the information below respectfully in order to make a review. Please don't troll in these questions, as we have moderators that will regulate the stream. Reviews are 100% anonymous, so you do not have to risk identity leaks. With that, thank you for contributing to Edurate. 
               </p>
          </div>
          <div class = 'text-left m-auto bg-white w-5/6'> 
               <form class = 'm-2 p-2 text-xl'>
                <div class = 'p-2' v-if = 'page1'> 
                    <label class = 'text-left'>What is the name of the class? (Exactly how it says in your schedule)</label>
                    <br>
                    <input
                      type = 'text'
                      v-model = "data.course"
                      placeholder = 'Course Name'
                      :class = "style.input"
                    >
                    <br>
                    <label class = 'text-left'>At what school did you take this class? (Type exactly how it says on Google). </label>
                    <br>
                    <input
                      type = 'text'
                      v-model = "data.school"
                      placeholder = 'School Name'
                      :class = "style.input"
                    >
                    <br>
                    <label class = 'text-left'>At what date did you finish/will you finish the class? </label>
                    <br>
                    <input
                      type = 'month'
                      v-model = "data.year"
                      placeholder = 'Enter the year you finish the class...'
                      :class = "style.input"
                    >
                    <br>
                    <div class = 'text-left'>What subject category is this class associated with?</div>
                     <select :class = 'style.input' v-model = "data.category"> 
                        <option value = "Humanities">Humanities</option>
                        <option value = "Mathematics">Mathematics</option>
                        <option value = "English">English</option>
                        <option value = "Sciences">Sciences</option>
                        <option value = "Economics">Economics</option>
                        <option value = "STEM">Technology/Engineering</option>
                    </select>
                    <br>
                     <label class = 'text-left'>If possible, could you write the name of your instructor? (Optional)</label>
                    <br>
                    <input
                      type = 'text'
                      v-model = "data.instructor"
                      placeholder = 'Enter subjects, separated by a comma and a space.'
                      :class = "style.input"
                    >
                    <br> 
                    <div class = 'text-left'>What is the type of instruction?</div>
                     <select :class = 'style.input' v-model = "data.type"> 
                        <option value = "In-Person">In Person</option>
                        <option value = "Remote">Remote</option>
                        <option value = "Hybrid">Hybrid</option>
                    </select>
                    <br>
                       <label class = 'text-left'>What grade did you recieve in this class? (Optional) </label>
                    <br>
                    <select :class = 'style.input' v-model = "data.grade"> 
                        <option value = "A+">A+</option>
                        <option value = "A">A</option>
                        <option value = "A-">A- </option>
                        <option value = "B+">B+ </option>
                        <option value = "B">B </option>
                        <option value = "B-">B-</option>
                        <option value = "C+">C+</option>
                        <option value = "C">C</option>
                        <option value = "C-">C-</option>
                        <option value = "D">D</option>
                        <option value = "F">F</option>
                    </select>
                    <br>                 
                    <label class = 'text-left'>Could you write a review about this class? (At least 175 Characters)</label>
                    <br>
                  <div class = 'bg-gray-200 text-black' :class = 'style.input'>
                    <textarea
                      type = 'text'
                      @keyup="changeColor()"
                      v-model = "data.desc"
                      placeholder = 'Long Description'
                      class = 'h-32 w-full bg-gray-200 m-1 focus:outline-none'
                    ></textarea>
                    <br>
                   <div class = 'text-right p-2'> <span :class = 'color.count'>{{ data.desc.trim('').length }}</span>/175</div>
                  </div>
                    <br>
                    <span class = 'text-xl'> Page 1 / 3 </span>
                   <button type = 'button' class = 'text-xl p-2 bg-blue-500 rounded text-white ml-2' :disabled = "disablePage1" @click = 'turnPage2()'>Next Page</button> 
                </div>
                <div class = 'p-2' v-if = "page2">
                     <div>On a scale of 1 (Really Easy) to 10 (Really Difficult), can you rate the difficulty of the course?</div>
                     <input
                     type = "range"
                     v-model = "data.difficulty"
                     min = "1"
                     max = "10"
                     class = 'p-2 w-11/12'
                     >
                     <div class = 'text-5xl mb-5'> {{ data.difficulty }} / 10 </div>
                     <div>On a scale of 1 (Extremely Bad) to 10 (Extremely Good), can you rate your engagement of the curriculum?</div>
                     <input
                     type = "range"
                     v-model = "data.curriculum"
                     min = "1"
                     max = "10"
                     class = 'p-2 w-11/12'
                     >
                     <div class = 'text-5xl mb-5'> {{ data.curriculum }} / 10 </div>
                     <div>On a scale of 1 (Little Work) to 10 (Excessive Work), can you rate the workload of the course?</div>
                     <input
                     type = "range"
                     v-model = "data.workload"
                     min = "1"
                     max = "10"
                     class = 'p-2 w-11/12'
                     >
                     <div class = 'text-5xl mb-5'> {{ data.workload }} / 10 </div>
                      <div>On a scale of 1 (Worst) to 10 (Best), can you rate your instructor for the course?</div>
                     <input
                     type = "range"
                     v-model = "data.instructorRating"
                     min = "1"
                     max = "10"
                     class = 'p-2 w-11/12'
                     >
                     <div class = 'text-5xl mb-5'> {{ data.instructorRating }} / 10 </div>
                     <div>On a scale of 1 to 5, can you rate the course experience overall?</div>
                     <input
                     type = "range"
                     v-model = "data.overall"
                     min = "1"
                     max = "5"
                     class = 'p-2 w-11/12'
                     >
                     <div class = 'text-5xl mb-5'> {{ data.overall }} / 5 </div>
                   
                 
                    <span class = 'text-xl'> Page 2 / 3 </span>
                    <button type = 'button' class = 'text-xl p-2 bg-gray-400 rounded text-white mr-3 ml-2' @click = 'turnPage1()'>Back</button>
                    <button type = 'button' class = 'text-xl p-2 bg-blue-500 rounded text-white' @click = 'turnPage3()'>Next Page</button>

                </div>
                <div v-if = "page3"> 
                 <div class = 'w-full mt-2 bg-indigo-900 p-2'>
                    <h1 class = 'text-4xl text-center text-white mb-4'>Confirm Your Rating 📝</h1>
                    <div class = 'w-auto p-5 bg-blue-100 text-black md:w-1/3 m-auto '> 
                        <h1 class = "text-3xl"> {{ data.course }} </h1>
                        <p class = 'text-sm'>Someone from {{ data.school }}</p>
                        <p class = 'text-3xl mt-2'>Overall Rating<br><span class = 'text-4xl text-yellow-500'>{{ rating }}</span></p>
                      <div class = 'flex grid grid-cols-2'>
                        <span class = 'text-md mt-2 mr-5'>Difficulty<br><span :class = 'color.difficulty' class = 'text-5xl'>{{ data.difficulty }}</span>/10</span>
                        <span class = 'text-md mt-2 mr-5'>Engagement<br><span :class = 'color.curriculum' class = 'text-5xl'>{{ data.curriculum }}</span>/10</span>
                        <span class = 'text-md mt-2 mr-5 '>Workload <br><span :class = 'color.workload' class = 'text-5xl'>{{ data.workload }}</span>/10</span>
                        <span class = 'text-md mt-2'>Instructor<br><span :class = 'color.instructorRating' class = 'text-5xl'> {{ data.instructorRating}}</span>/10</span>
                      </div>

                    <div class = 'mt-2'>Comments <br> <div class = 'p-2 mt-2 w-full rounded bg-white'> {{ data.desc }} </div></div>


                  </div>

                  <h1 class = 'text-center mt-4' ><button type = 'button' class = 'text-xl p-2 bg-green-500 m-auto rounded text-white' @click = 'submit()'>Submit for Review</button></h1>
                </div>
                  

                    <br>
                    <span class = 'text-xl'> Page 3 / 3 </span>
                    <button type = 'button' class = 'text-xl p-2 m-1 bg-gray-400 rounded text-white mr-3 ml-2' @click = 'turnPage2()'>Back</button>
                </div>
               </form>
          </div>
   </div>
</template>

<script>
export default { 
     data() { 
        return { 
            style: { 
                input: "p-2 mt-2 mb-2 w-11/12 text-xl bg-gray-200 rounded focus:outline-none"
            }, 
            data: { 
                 overall: 3, 
                 workload: 5, 
                 curriculum: 5,
                 difficulty: 5, 
                 instructorRating: 5, 
                 desc: "", 
                 type: "Choose A Type",
                 instructor: "", 
                 category: "Choose a Category",
                 course: "",
                 school: ""
            }, 
            page1: true,
            page2: false,
            page3: false, 
            color: { 
                workload: "text-black", 
                curriculum: "text-black", 
                difficulty: "text-black", 
                instructorRating: "text-black",
                count: "text-black"
            }, 
            rating: "★★★☆☆"
        }
     }, 
     computed: { 
         difficulty() { 
             return this.data.difficulty
         },
         workload() { 
            return this.data.workload
         }, 
         disablePage1() { 
            let { data } = this; 

            if (data.category.trim("") == "" || data.school.trim("") == "" || data.course.trim("") == "" || data.desc.trim("") == "" || (data.desc.length < 175)) { 
                 return true; 
            }
            else { 
                 return false; 
            }
         }
     }, 
     methods: { 
         changeColor() { 
         if (this.data.desc.length < 175) { 
               this.color.count = "text-red-500"
         }
         else { 
               this.color.count = "text-green-500"
         }
         },
         turnPage2() { 
              this.page2 = true; 
              this.page1 = false; 
              this.page3 = false; 
              window.scrollTo({top: 0, behavior: 'smooth'});
         },
         turnPage1() { 
             this.page1 = true; 
             this.page2 = false; 
             this.page3 = false;

            window.scrollTo({top: 0, behavior: 'smooth'});
         }, 
         turnPage3() { 
            this.page1 = false; 
            this.page2 = false;
            this.page3 = true; 
            
            window.scrollTo({top: 0, behavior: 'smooth'}); 

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

             if (this.data.instructorRating == 1) { 
                 this.color.instructorRating = "text-red-500"; 
            }
            else if (this.data.instructorRating == 2) { 
                 this.color.instructorRating = "text-red-400"; 
            }
            else if (this.data.instructorRating == 3) { 
                 this.color.instructorRating = "text-yellow-700"; 
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

            this.rating = ""; 

            for (let i = 0; i < this.data.overall; i++) { 
                  this.rating = this.rating + "★"
            }

            for (let i = 0; i < (5 - this.data.overall);i++) { 
                 this.rating = this.rating + "☆"
            }

         }, 
         async submit() { 
          try { 
              let review = await this.$http.post(`/reviews/create`, { 
                  username: this.$store.state.userData.username, 
                  user_id: this.$store.state.userData._id, 
                  course: this.data.course, 
                  grade: this.data.grade,
                  school: this.data.school, 
                  category: this.data.category,
                  instructor: this.data.instructor, 
                  desc: this.data.desc, 
                  difficulty: this.data.difficulty, 
                  type: this.data.type,
                  instructorRating: this.data.instructorRating,
                  workload: this.data.workload, 
                  year: this.data.year, 
                  curriculum: this.data.curriculum,
                  overall: this.data.overall
              })

             location.replace('/home'); 
              
             alert("Your review has been submitted.", review); 
              
         }     
          catch (e) { 
              console.log(e); 
          }
         },
     }
}
</script>

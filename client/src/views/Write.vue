<template>
   <div class = 'p-2'>
          <div class = 'text-left m-auto bg-blue-800 text-white w-5/6'> 
               <h1 class = 'flex text-left m-2 p-2 text-4xl'><span class = 'mr-2'>Write a Review</span> 📋</h1>
               <p class = 'text-md m-2 p-2'> 
                  Please fill out the information below respectfully in order to make a review. Reviews are 100% anonymous, so you do not have to risk identity leaks. With that, thank you for contributing to ClassInfo. 
               </p>
          </div>
          <div class = 'text-left m-auto bg-white w-5/6'> 
               <form class = 'm-2 p-2 text-xl'>
                <div class = 'p-2' v-if = 'page1'> 
                    <label class = 'text-left'>Is the class an AP class?</label>
                    <br>
                     <select :class = 'style.input' v-model = "ap"> 
                         <option value = 'Yes'>Yes</option>
                         <option value = 'No'>No</option>
                     </select>
                     <br>
                    <label  v-if = "ap == 'No'" class = 'text-left'>What is the name of the class? <br><span class = 'text-sm'> (Before making a name for the class, please check your school page on the the site, and check if a name already exists. ) </span> </label>
                    <label  v-if = "ap == 'Yes'" class = 'text-left'>Choose the AP that you are enrolled in.</label>
                    <br>
                    <input
                      type = 'text'
                      v-if = "ap === 'No'"
                      v-model = "data.course"
                      placeholder = 'Course Name'
                      :class = "style.input"
                    >
                    <select v-else :class = 'style.input' v-model = "data.course"> 
                         <option value = "AP Art History"> AP Art History </option>
                         <option value = "AP Biology"> AP Biology </option>
                         <option value = "AP Calculus AB"> AP Calculus AB </option>
                         <option value = "AP Calculus BC"> AP Calculus BC </option>
                         <option value = 'AP Chemistry'>AP Chemistry</option> 
                         <option value = 'AP Chinese Language & Culture'>AP Chinese Language & Culture</option>
                         <option value = 'AP Comparative Government & Politics'>AP Comparative Government & Politics</option>
                         <option value = 'AP Computer Science A'>AP Computer Science A</option>
                         <option value = 'AP Computer Science Principles'>AP Computer Science Principles</option>
                         <option value = 'AP Language and Composition'>AP Language and Composition</option>
                         <option value = 'AP Literature and Composition'>AP Literature and Composition</option>
                         <option value = 'AP Environmental Science'>AP Environmental Science</option>
                         <option value = 'AP European History'>AP European History</option>
                         <option value = 'AP French'>AP French</option>
                         <option value = 'AP German'>AP German</option>
                         <option value = 'AP Human Geography'>AP Human Geography</option>
                         <option value = 'AP Italian'>AP Italian</option>
                         <option value = 'AP Latin'>AP Latin</option>
                         <option value = 'AP Macroeconomics'>AP Macroeconomics</option>
                         <option value = 'AP Microeconomics'>AP Microeconomics</option>
                         <option value = 'AP Music Theory'>AP Music Theory</option>
                         <option value = 'AP Physics 1'>AP Physics 1</option>
                         <option value = 'AP Physics 2'>AP Physics 2</option>
                         <option value = 'AP Physics C: E&T'>AP Physics C: E&T</option>
                         <option value = 'AP Physics C: M'>AP Physics C: Mechanics</option>
                         <option value = 'AP Research'>AP Research</option>
                         <option value = 'AP Seminar'>AP Seminar</option>
                         <option value = 'AP Spanish Language'>AP Spanish Language</option>
                         <option value = 'AP Spanish Literature'>AP Spanish Literature</option>
                         <option value = 'AP Statistics'>AP Statistics</option>
                         <option value = 'AP Studio Art 2D'>AP Studio Art 2D</option>
                         <option value = 'AP Studio Art 3D'>AP Studio Art 3D</option>
                         <option value = 'AP Studio Art Drawing'>AP Studio Art Drawing</option>
                         <option value = 'AP US History'>AP US History</option>
                         <option value = 'AP US Government and Politics'>AP US Government and Politics</option>
                         <option value = 'AP World History'>AP World History</option>
                     </select>
                    <br>
                    <label class = 'text-left'>At what school did you take this class? <br> <span class = 'text-sm'> (Can't find your school? Click <a href = "/schools/add" class = 'underline text-blue-500' target = "_blank"> here </a> to add your school.) </span> </label>
                    <br>
                    <select :class = "style.input" v-model = "data.school"> 
                    
                         <option  :style = "'color:' + school.color" class = 'bg-white' v-for = "school in schools" :key = "school._id" :value = "school">
                              <div class = 'flex p-3 cursor-pointer border'>
                                    <h1 class = 'text-left mr-2'><span> {{ school.name }} </span> - <br> <h1 class = 'mr-2 text-gray-400'>{{ school.city }}, {{ school.state }}</h1></h1>
                              </div>
                         </option>
                    </select> 
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
                     <label class = 'text-left'>Could you write the first and last name of your instructor?</label>
                    <br>
                    <input
                      type = 'text'
                      v-model = "data.instructor"
                      placeholder = 'Enter your Instructor..'
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
                        <p class = 'text-sm'>Someone from {{ data.school.name }}</p>
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
          <FlashMessage> </FlashMessage>
   </div>
</template>

<script>
export default { 
     async mounted()  { 
         let { data } = await this.$http.get('/schools/all'); 

         data.sort((a, b) => a.name.localeCompare(b.name)); 

         this.schools = data; 
     },
     data() { 
        return { 
            schools: [], 
            style: { 
                input: "p-2 mt-2 mb-2 w-11/12 text-xl bg-gray-200 rounded focus:outline-none"
            }, 
            ap: "No",
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
            school_results: [],
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

            if (data.category.trim("") == "" || data.course.trim("") == ""  || data.desc.trim("") == "" || data.instructor.trim("") == "" || (data.desc.length < 175)) { 
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
           
              let rating = await this.$http.post(`/reviews/create`, { 
                  username: this.$store.state.userData.username, 
                  user_id: this.$store.state.userData._id, 
                  course: this.data.course, 
                  grade: this.data.grade,
                  school: this.data.school.name,
                  school_id: this.data.school._id,
                  category: this.data.category,
                  instructor: this.data.instructor, 
                  desc: this.data.desc, 
                  difficulty: this.data.difficulty, 
                  type: this.data.type,
                  instructorRating: this.data.instructorRating,
                  workload: this.data.workload, 
                  year: this.data.year, 
                  curriculum: this.data.curriculum,
                  overall: this.data.overall, 
                  createdAt: Date.now()
              })

          let { data } = await this.$http.get(`/courses/get/${this.data.school._id}/${this.data.course}`);
           let course = data;

           if (!course) { 
              let newData = await this.$http.post('/courses/create', { 
                    school_id: this.data.school._id, 
                    name: this.data.course, 
                    level: this.data.level,
                    category: this.data.category, 
                })
                course = newData.data; 
           }

          course.ratings.push(rating); 

          await this.$http.put(`/courses/update/${course._id}`, course); 

          let teacher = await this.$http.get(`/teachers/getbysan/${this.data.instructor}/${this.data.school._id}`)

     
          if (!teacher.data) {              
               await this.$http.post('/teachers/create', { 
                    name: this.data.instructor, 
                    school: this.data.school.name, 
                    school_id: this.data.school._id, 
                    courses: [course._id], 
                    ratings: [rating.data]
               })
          }
          else { 
               teacher.data.ratings.push(rating.data); 
               
               let isCourse = teacher.data.courses.find(course => { 
                      return this.data.course === course; 
               })

               if (!isCourse) { 
                    teacher.data.courses.push(course._id); 
               }

          }

         if (teacher.data) { 
              await this.$http.put(`/teachers/update/${teacher.data._id}`, teacher.data); 
         }

                           
             this.flashMessage.success({title: 'Review Submitted Successfully!', message: 'Thank you for contributing to ClassInfo.org!'});

             location.replace('/home')              
         }     
          catch (e) { 
              console.log(e); 
          }
         },
     }
}
</script>

<style> 
h1 img { 
     width: 40px; 
     height: 40px; 
}
</style>
<template>
   <div>
        <div  class = 'p-2 m-2 bg-blue-600 w-11/12 mt-8 mx-auto h-11/12 relative text-white'> 

          <div v-if = "page1">
                        <p class = 'p-2 text-2xl mb-5'><span class = 'text-6xl mb-2'>Class<span class = 'text-yellow-300'>Builder</span></span><br> Trying to pick your classes for next semester? We got you.</p> 
            <h1 class = 'text-3xl mb-5 mt-20'>Select your School</h1>

            <select
               type = "text"
               v-model = "data.school"
               class = "p-4 m-2 text-2xl rounded w-5/6 text-black mb-20"
               placeholder = "Select your school.."
             >
               <option>Select an Option</option>
               <option  :style = "'color:' + school.color" class = 'text-white' v-for = "school in data.schools" :key = "school._id" :value = "school">
                              <div class = 'flex p-3 cursor-pointer border'>
                                    <h1 class = 'text-left mr-2 p-3'><span> {{ school.name }} </span> - <br> <h1 class = 'mr-2 text-gray-400'>{{ school.city }}, {{ school.state }}</h1></h1>
                              </div>
               </option>

            </select>
            
            <br>

            <button class = 'p-2 m-2 bg-blue-500 text-white rounded text-2xl mb-2' @click = "goPage2()" :disabled = "disable1">Continue</button>

         </div>
        
        <div v-if = "page2 && data.courses.length >= 5" class = 'flex'> 
              
               <div class = 'bg-blue-800 text-white w-1/2 p-5 mb-2'> 
                   <h1 class = 'text-3xl mb-2'>Schedule <br> <span class = 'text-sm'>Click on the boxes below to add a class. </span></h1>
                
                   <select v-for = "index in this.repeat" :key = "index"  class = 'p-5 w-11/12 text-white border-4 m-2 bg-blue-600 border-white text-2xl focus:outline-none' v-model = "selected[index - 1]" @change="generateInfo"> 
                        <option class = 'text-white' v-for = "course in data.courses" :key = "course._id" :value = "course._id">{{ course.name }}</option> 
                   </select>


                   <input class = 'p-5 w-11/12 text-white border-4 border-dashed m-2 border-white text-2xl focus:outline-none cursor-pointer' @click = 'addClass' value = "Add a class" type = "button"> 
                   <input class = 'p-5 w-11/12 text-white border-4 border-dashed m-2 border-white text-2xl focus:outline-none cursor-pointer' @click = 'removeClass' value = "Remove a class" type = "button"> 

               </div>
               <div class = 'w-1/2 bg-blue-600 p-5'> 
                    
                   <div class = 'bg-white text-black flex flex-wrap'>
                      <div class = 'p-2 m-2 w-auto'> 
                          <h1 class = 'text-3xl text-left p-2'>4.0 GPA</h1>
                          <h1 :class = 'color.gpa' class = 'text-xl'><span class = 'text-8xl'>{{ this.stats.gpa.toFixed(2) }}</span></h1>
                      </div> 
                      <div class = 'p-2 m-2 w-auto'> 
                          <h1 class = 'text-3xl text-left p-2'>Difficulty</h1>
                          <h1 :class = 'color.difficulty' class = 'text-xl'><span class = 'text-8xl'>{{ this.stats.difficulty.toFixed(1) }}</span>/10</h1>
                      </div> 
                      <div class = 'p-2 m-2 w-auto'> 
                          <h1 class = 'text-3xl text-left p-2'>Engagement</h1>
                          <h1 :class = 'color.engagement' class = 'text-xl'>
                        <span class = 'text-8xl'>
                            {{ this.stats.engagement.toFixed(1) }}
                        </span>/10</h1>
                      </div> 
                      <div class = 'p-2 m-2 w-auto'> 
                          <h1 class = 'text-3xl text-left p-2'>Workload</h1>
                          <h1 :class = 'color.workload' class = 'text-xl'><span class = 'text-8xl'>{{ this.stats.workload.toFixed(1) }}</span>/10</h1>
                      </div> 

                   </div>
                   <br>
                   <div class = 'bg-white text-black text-left p-4'>
                         <h1 class = 'p-2 mx-2 text-3xl'>General Comments</h1>
                         <p class = 'p-2 mx-2 text-blue-600 text-2xl'>{{ comments.difficulty }} {{ comments.engagement }} {{ comments.workload }}</p>
                          <h1 class = 'p-2 mx-2 text-3xl'>Overall Recommendation</h1>
                         <p class = 'p-2 mx-2  text-2xl text-green-600'>{{ comments.overall }}</p>
                   </div>
               
               </div>
        </div>
        <div v-else> 
             This feature is only available for schools with over 5 classes registered onto the site. Promote this website today so you can access this feature!
        </div>
        

        </div>
   </div>
</template>

<script>

export default {
   data() { 
       return { 
           course: { 

           }, 
           school: { 

           },
           data: { 
               schools: [], 
               courses: [], 
               school: ""
           }, 
           stats: { 
                 difficulty: 0,
                 workload: 0, 
                 gpa: 0.00, 
                 engagement: 0
           },
           comments: { 
                 difficulty: "See your comments here.", 
                 workload: "", 
                 engagement: "", 
                 overall: "Overall summary here."
           },
           zero: 0,
           duration: 3000,
           page1: true, 
           page2: false,
           selected: [], 
           repeat: 5, 
           color: { 
               engagement: "text-gray-700",
               difficulty: "text-gray-700",
               workload: "text-gray-700",
               gpa: "text-gray-700",
           }
       }
   }, 
   async mounted()  { 
        let schools = await this.$http.get('/schools/all'); 

         schools.data.sort((a, b) => a.name.localeCompare(b.name))


        this.data.schools = schools.data; 

        let courses = await this.$http.get('/courses/all'); 

        courses.data.sort((a, b) => a.name.localeCompare(b.name))

        this.data.courses = courses.data; 
               
       
        
   }, 
   methods: { 
        goPage2() { 
             this.page1 = false; 
             this.page2 = true; 

             let courses = this.data.courses; 

             courses = courses.filter(course => { 
                   return this.data.school._id === course.school_id
             })

             this.data.courses = courses; 

        }, 
        addClass() { 
            this.repeat++; 

            this.generateInfo()
        },
        removeClass() { 
          if (this.repeat != 0) 
          {
            this.selected.pop();
            this.repeat--;
            this.generateInfo()
          }
        }, 
        // Where the information generates. Using NML. 
        generateInfo() { 

            let classes = this.selected;
            let results = new Array();  
            
            for (let i = 0; i < classes.length; i++) { 
                 let item = classes[i]; 

                 let course = this.data.courses.find(course => { 
                     return course._id === item; 
                 })

                 results.push(course); 
            }

            classes = results; 

            console.log(classes)

            //Difficulty Prediction 
            let totalDiff = 0;
            this.stats.difficulty = 0; 

              // Grab all the ratings in each class and then average it out. Nested for loop strategy. 
              for (let i = 0; i < classes.length; i++) { 
                    let course = classes[i]; 
                    let difficulty = 0; 
                     
                    for (let j = 0; j < course.ratings.length; j++) { 
                           let { data } = course.ratings[j]; 
                           difficulty += data.difficulty; 

                           if (j === (course.ratings.length - 1)) { 
                               difficulty = difficulty / course.ratings.length; 
                           }
                    }                  

                    totalDiff = totalDiff + difficulty; 
                    
                    if (i === (classes.length - 1)) {
                        totalDiff = totalDiff / classes.length; 
                    }
              }
              this.stats.difficulty = totalDiff; 

               //Workload Prediction 
            let totalWork = 0;
            this.stats.workload = 0; 

              // Grab all the ratings in each class and then average it out. Nested for loop strategy. 
              for (let i = 0; i < classes.length; i++) { 
                    let course = classes[i]; 
                    let workload = 0; 
                     
                    for (let j = 0; j < course.ratings.length; j++) { 
                           let { data } = course.ratings[j]; 
                           workload += data.workload; 

                           if (j === (course.ratings.length - 1)) { 
                               workload = workload / course.ratings.length; 
                           }
                    }                  

                    totalWork = totalWork + workload; 
                    
                    if (i === (classes.length - 1)) {
                        totalWork = totalWork / classes.length; 
                    }
              }

              this.stats.workload = totalWork; 
              
              
                //Engagement Prediction 
            let totalEng = 0;
            this.stats.engagement = 0; 

              // Grab all the ratings in each class and then average it out. Nested for loop strategy. 
              for (let i = 0; i < classes.length; i++) { 
                    let course = classes[i]; 
                    let engagement = 0; 
                     
                    for (let j = 0; j < course.ratings.length; j++) { 
                           let { data } = course.ratings[j]; 
                           engagement += data.curriculum; 

                           if (j === (course.ratings.length - 1)) { 
                               engagement = engagement / course.ratings.length; 
                           }
                    }                  

                    totalEng = totalEng + engagement; 
                    
                    if (i === (classes.length - 1)) {
                        totalEng = totalEng / classes.length; 
                    }
              }
             
             this.stats.engagement = totalEng; 
             

            // 4.0 GPA 
            let totalGPA = 0; 
            this.stats.gpa = 0; 
            
            for (let i = 0; i < classes.length; i++) { 
                let course = classes[i]; 
                let gpa = 0; 

                for (let i = 0; i < course.ratings.length; i++) { 
                  let { data } = course.ratings[i]

             switch (data.grade) { 
                 case "A+": 
                    gpa += 4.00;
                    break; 
                 case "A": 
                    gpa += 4.00;
                    break; 
                 case "A-": 
                    gpa += 3.67; 
                    break; 
                 case "B+":
                    gpa += 3.33;
                    break;
                 case "B":
                    gpa += 3.00; 
                     break;
                 case "B-": 
                    gpa += 2.67; 
                     break;
                 case "C+": 
                    gpa += 2.33; 
                    break; 
                 case "C": 
                    gpa += 2.00; 
                    break;
                 case "C-": 
                    gpa += 1.67; 
                    break; 
                 case "D": 
                    gpa += 1.33; 
                    break; 
                 case "F": 
                    gpa += 1.00; 
                    break; 
                 case "N/A": 
                    course.ratings--; 
                    break;
             }

             if (i === (course.ratings.length - 1)) { 
                 gpa = gpa / course.ratings.length; 
             }
                 }

                 totalGPA = totalGPA + gpa; 
                    
                    if (i === (classes.length - 1)) {
                        totalGPA = totalGPA / classes.length; 
                    }
            }

            this.stats.gpa = totalGPA; 


              // Comments Automation
            
            if (this.stats.engagement <= 5) { 
                this.comments.engagement = "You will likely be bored with this courseload, so try not to fall asleep. We believe in you!"
            }
            else if (this.stats.engagement >= 7) { 
                this.comments.engagement = "You will definitely be engaged with this courseload, so don't worry about falling asleep in class! "
            }
            else if (this.stats.engagement > 5) { 
                this.comments.engagement = "You will be fairly engaged with this courseload, with some interesting topics in store for you."
            }

            if (this.stats.workload <= 5) { 
                this.comments.workload = "The work in these classes are extremely light, so you will likely not be busy all year."
            }
            else if (this.stats.workload >= 7) { 
                this.comments.workload = "There is an extreme amount of work with this courseload, so try to balance your other activities with work, because you might have a lot more schoolwork than other people."
            }
            else if (this.stats.workload > 5) { 
                this.comments.workload = "There is a decent amount of work in this courseload, so this is a perfect medium of work so you have room for other activities."
            }

            if (this.stats.difficulty <= 5) { 
                this.comments.difficulty = "These classes are likely really easy, so you will have an good time understanding concepts and topics!"
            }
            else if (this.stats.difficulty >= 7) { 
                this.comments.difficulty = "This courseload seems to be extremely difficult. You will likely spend more time trying to understand subjects, as the course content in this class seems to be challenging."
            }
            else if (this.stats.difficulty > 5) { 
                this.comments.difficulty = "This courseload has moderate difficulty, so you might have some difficulty understanding concepts in some classes, but not all."
            }

            let total = this.stats.difficulty + this.stats.engagement + this.stats.workload; 


            if (total <= 15) { 
                this.comments.overall = "Light"
            }
            else if (total > 24) { 
                this.comments.overall = "Extremely Challenging"
            }
            else if (total > 15) { 
                this.comments.overall = "Moderately Challenging"
            }

            // Colors Highlightings

        if (this.stats.engagement <= 2) { 
            this.color.engagement = "text-red-600"
        }
        else if (this.stats.engagement <= 4) { 
            this.color.engagement = "text-red-400"
        }
        else if (this.stats.engagement <= 6) { 
            this.color.engagement = "text-yellow-500"
        }
        else if (this.stats.engagement <= 8) {
             this.color.engagement = "text-green-700"
        }
        else { 
             this.color.engagement = "text-green-800"
        }

        if (this.stats.workload >= 9) { 
            this.color.workload = "text-red-600"
        }
        else if (this.stats.workload >= 7) { 
            this.color.workload = "text-red-600"
        }
        else if (this.stats.workload >= 5) { 
            this.color.workload = "text-yellow-500"
        }
        else if (this.stats.workload >= 3) {
             this.color.workload = "text-green-500"
        }
        else { 
             this.color.workload = "text-green-700"
        }

        if (this.stats.difficulty >= 9) { 
            this.color.difficulty = "text-red-600"
        }
        else if (this.stats.difficulty >= 7) { 
            this.color.difficulty = "text-red-600"
        }
        else if (this.stats.workload >= 5) { 
            this.color.workload = "text-yellow-500"
        }
        else if (this.stats.workload >= 3) {
             this.color.workload = "text-green-500"
        }
        else { 
             this.color.workload = "text-green-700"
        }

        }
   }, 
   computed: { 
       disable1() { 
            if (this.data.school) { 
               return false; 
            }
            else { 
               return true; 
            }
       }
   }, 
}
</script>

<style>
select {
    padding: 2px 10px;
    border: 1px solid #979997;

    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
}
</style>
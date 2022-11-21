<template>
   <div class = 'p-2 m-2 bg-white text-left w-11/12'>
       <h1 class = 'text-left p-2 text-black text-4xl'>My Profile</h1>


       <h1 class = 'text-left p-2 text-black text-2xl'>Username <br><span class = 'text-sm'>Unfortunately, we cannot change your username at the moment. Please look back for future updates.</span></h1>
       <input
        type = 'text'
        v-model = "user.username"
        class = 'p-2 m-2 text-black border-2 w-3/4 text-2xl'

        disabled
       >
       <h1 class = 'text-left p-2 text-black text-2xl'>Email</h1>
       <input
        type = 'text'
        v-model = "user.email"
        class = 'p-2 m-2 text-black border-2 w-3/4 text-2xl'
       >
       <h1 class = 'text-left p-2 text-black text-2xl'>School</h1>
       <input
        type = 'text'
        v-model = "user.school"
        class = 'p-2 m-2 text-black border-2 w-3/4 text-2xl'
       >
       <h1 class = 'text-left p-2 text-black text-2xl'>Password <br> <span class = 'text-sm'>Unfortunately, we cannot change your password at the moment. Please look back for future updates.</span></h1>
       <input
        type = 'password'
        v-model = "user.password"
        class = 'p-2 m-2 text-black border-2 w-3/4 text-2xl'
        placeholder = "Enter a school"

        disabled
       >
       <br>
       <button @click = "update()" type = 'button' class = 'p-2 m-2 bg-green-500 text-white text-2xl rounded'>Update</button>

       <h1 class = 'text-left p-2 text-black text-3xl'>Manage Reviews</h1>

       <div class = 'flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 overflow-x-auto text-black'>
         <div class = 'p-2 m-2 border-2 rounded' v-for = "review in reviews" :key = "review._id"> 
           <h1 class = 'text-xl'>{{ review.course }}</h1>
           <h1 class = 'text-sm'>{{ review.school }}</h1>
           <button class = 'my-2 bg-blue-600 p-2 rounded text-white mr-2'><a :href = "'/reviews/' + review._id"> View </a></button>
           <button @click = "deleteReview(review._id)" class = 'my-2 bg-red-600 p-2 rounded text-white'>Delete</button>
         </div>
       </div>

      <h1 class = 'text-left p-2 text-black text-3xl'>Connect with Home Access Center</h1>
        <div>
          <button class = 'p-2 m-2 flex bg-sky-800 text-white text-2xl rounded hover:bg-sky-900'>
              <img class = 'w-10 h-10 m-auto mb-2 mr-2 mt-1 ' src = "https://resources.finalsite.net/images/f_auto,q_auto/v1626100427/k12albemarleorg/uj41eppe27bunrvhwnep/PowerSchoolLogos_Vertical-01.png">
              <span class = 'align-middle mt-2 mr-2'>Home Access Center</span>
          </button>
          </div> 

   </div>
</template>

<script>
export default {
     data() { 
          return { 
               user: { 

               }, 
               reviews: {

               }
          }
     }, 
     async mounted() { 
         let { data } = await this.$http.get('/users/current')
         this.user = data; 
    
         let reviews = await this.$http.get('/reviews/all'); 

         reviews = reviews.data.filter(review => { 
              return review.username === data.username
         })  


         this.reviews = reviews; 
     }, 
     methods: { 
        async update() { 
         try {   
             await this.$http.put(`/users/update`, this.user);
             location.reload()
         }
         catch (e) { 
             alert("An error has occured when updating!")
             console.log(e.message)
         }
        }, 
        async deleteReview(id) { 
             try { 
                 let { data } = await this.$http.delete(`/reviews/delete/${id}`); 
                 let review = data; 

                 let courses = await this.$http.get(`/courses/all`); 

                 let course = courses.data.find(course => { 
                       return course.name === review.course && course.school_id === review.school_id;
                 })



                 let rating = course.ratings.find(rating => { 
                     return rating.data._id === review._id; 
                 })


                 course.ratings.splice(course.ratings.indexOf(rating), 1)
                 

                 await this.$http.put(`/courses/update/${course._id}`, course); 
    
               let teachers = await this.$http.get('/teachers/all'); 

               let teacher = teachers.data.find(teacher => { 
                    return teacher.name === review.instructor; 
               })

               let teacherRating = teacher.ratings.find(r => { 
                     return r._id === review._id
               })

               teacher.ratings.splice(teacher.ratings.indexOf(teacherRating), 1); 

               await this.$http.put(`/teachers/update/${teacher._id}`, teacher); 


              location.reload()
             }
             catch (e) { 
                alert("An error has occured when deleting!")
                console.log(e.message)
             }
        }
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
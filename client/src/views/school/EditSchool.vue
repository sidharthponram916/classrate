<template>
   <div class = 'p-2'>
        <FlashMessage></FlashMessage>
       <div :style = "'background:' + data.color" class = 'text-left m-auto text-white w-5/6'> 
               <h1 class = 'text-left m-2 p-2 text-4xl'>Edit {{ data.name }} Info</h1>
               <p class = 'text-md m-2 p-2'> 
                  Fill out the form below so that you can successfully add a school! Make sure to answer the questions correctly. 
               </p>
        </div>
       <div class = 'text-left m-auto bg-white w-5/6 py-2'> 
           <form class = 'm-2 p-2 text-xl'> 
               <label class = 'text-left text-2xl'>Official Name <span class = 'text-sm'>(Cannot be Changed) </span></label>
                <input 
                 type = "text"
                 :class = "style.input"
                 v-model = 'data.name'
                 disabled
                 >
                 <br>
                <label class = 'text-left text-2xl'>State <span class = 'text-sm'>(Cannot be Changed) </span></label>
                <select :class = 'style.input' v-model = "data.state" disabled>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                <br> 
                <label class = 'text-left text-2xl'>City <span class = 'text-sm'>(Cannot be Changed) </span></label>
                <input 
                 type = "text"
                 placeholder = "School Name"
                 :class = "style.input"
                 v-model = 'data.city'

                 disabled
                 >
                 <br> 
                 <label class = 'text-left text-2xl'>Address</label>
                 <br>
                 <input
                 type = "text"
                 placeholder = "Current Address"
                 v-model = "data.address"
                 :class = 'style.input'
                 >
                 <br> 
                 <label class = 'text-left text-2xl'>Logo URL<span class = 'text-sm'> (Add an image url) </span></label>
                 <input
                 type = "url"
                 placeholder = "School Logo URL"
                 v-model = "data.url"
                 :class = 'style.input'
                 >
                 <br> 
                 <label class = 'text-left text-2xl'>Website URL</label>
                 <input
                 type = "url"
                 placeholder = "Current Website URL"
                 v-model = "data.website"
                 :class = 'style.input'
                 >
                 <br> 
                 <label class = 'text-left text-2xl'>What is the school's primary school color?</label>
                 <input 
                  type = "color"
                  placeholder = "School Color"
                  v-model = "data.color"
                  class = " mt-2 mb-2 w-11/12 text-xl bg-gray-200 rounded focus:outline-none"
                  >
                 <br> 
                 <label class = "text-left text-2xl">List some common aliases for this school. <span class = 'text-sm'>(Example: Roach High School => RHS or Roachers)</span></label>
                 <div v-if = "data.search_terms" class = "my-2"> 
                     <span class = "" v-for = "term in data.search_terms.split(', ')" :key = 'term'>
                          <span class = 'bg-gray-300 text-sm mr-2 p-1 rounded'> {{ term }} </span>
                     </span>
                 </div> 
                 <input 
                  type = "text"
                  placeholder = "Search Terms.."
                  v-model = "data.search_terms"
                  :class = "style.input"
                  >
                  <br>
                 <button @click = "editInfo()" type = "button" class = 'mt-3 text-white rounded p-2 bg-blue-500 mr-4' :disabled = "disableInput">Edit</button>
                 <button @click = "revert()" type = "button" class = 'mt-3 text-white rounded p-2 bg-red-500'>Revert</button>
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
            }
        }
     }, 
     async mounted() { 
         let { data } = await this.$http.get('/schools/get/' + this.$route.params.id);

         this.data = data; 
     },
   methods: { 
       async editInfo() { 
           await this.$http.put(`/schools/update/${this.$route.params.id}`, { 
                name: this.data.name, 
                state: this.data.state, 
                city: this.data.city, 
                address: this.data.address, 
                district: this.data.district, 
                search_terms: this.data.search_terms, 
                url: this.data.url, 
                website: this.data.website, 
                color: this.data.color
           })


           location.replace("/schools/view/" + this.$route.params.id);
           
           this.flashMessage.success({title: 'School Edited Successfully!', message: 'Thank you for contributing to Classrate!'});
       }, 
       async revert() { 
        let { data } = await this.$http.get('/schools/get/' + this.$route.params.id);

         this.data = data; 
       }
   }
}
</script>

<style>

</style>
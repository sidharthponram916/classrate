<template>
<div>
  <div style = "background:url('https://frsinc.co/wp-content/uploads/students-background.jpg');background-size:cover" class = 'p-16 text-white bg-blue-600'>
     <img class = 'm-auto w-72 h-56' src = '../assets/logo.png'>
     <h1 class = 'text-7xl text-center text-white'>Your Base for Student Insight</h1>
     <h1 class = ' text-xl mb-16 text-center text-white'>Write or learn more about your classes. </h1>
     <SearchBar styling = "mx-auto flex grid grid-cols-1 w-full mb-10 pl-10" />
  </div>
  <div class = 'flex grid md:grid-cols-2'>
  <div class = 'bg-indigo-900 text-white p-20'>
     <h1 class = 'text-6xl m-2 p-2'>What is <span class = 'ml-2'>Class<span class = 'text-yellow-200'>Rate</span></span>?</h1>
     <p class = 'text-2xl m-2 p-2'>ClassRate.org is a platform that use student reviews in order to gather and quantify useful information, such as course and teacher data, and school leaderboards.</p>
     <h1 class = ' text-9xl m-2 p-2'>🤝</h1>
  </div>
  <div class = 'bg-blue-900 text-white p-20'>
     <h1 class = 'text-6xl m-2 p-2'>Our Mission Statement</h1>
     <p class = ' text-2xl m-2 p-2'>We want to make sure that ClassRate helps people make their decisions when choosing school classes, and creating a tightly-knit community. </p>
          <h1 class = 'text-9xl m-2 p-2'>🗣️</h1>
  </div>
  </div>
  <div class = 'bg-blue-300 text-black p-2'>
     <h1 class = 'text-3xl pt-5 pb-10'>Trending Schools</h1>
     <div class = 'flex grid md:grid-cols-4 '>
       <div class = 'bg-white text-black rounded p-2 m-2' v-for = "school in schools" :key = "school._id">
          <h1 class = 'text-2xl'> {{ school.name }} </h1>
          <img :src = "school.url" class = 'm-auto w-20 h-20 mb-2 mt-2'>
          <h1 class = 'text-xl relative'>{{ school.city }} {{ school.state }}</h1>
       </div>
     </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '../components/Searchbar.vue'

export default {
  name: 'Home',
  components: {
      SearchBar, 
  }, 
  data() { 
    return { 
        schools: []
    }
  }, 
  async mounted() { 
     let { data } = await this.$http.get('/schools/all'); 
     this.schools = data.slice(0, 8);
  }
}
</script>


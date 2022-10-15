<template>
<div>
  <div style = "background:url('https://frsinc.co/wp-content/uploads/students-background.jpg');background-size:cover" class = 'p-56 text-white bg-blue-600'>
     <h1 class = ' text-7xl text-center text-white'>Your Base for Student Insight</h1>
     <h1 class = ' text-xl mb-16 text-center text-white'>Write or learn more about your classes. </h1>
     <SearchBar styling = "mx-auto flex grid grid-cols-1 w-full mb-10 pl-10" />
  </div>
  <div class = 'bg-blue-800 text-white p-20 text-left'>
     <h1 class = 'text-6xl m-2 p-2'>What is ClassInfo.org?</h1>
     <p class = 'text-2xl m-2 p-2'>ClassInfo.org is a platform that use student reviews in order to gather and quantify useful information, such as course and teacher data, and school leaderboards.</p>
     <h1 class = ' text-9xl m-2 p-2'>🤝</h1>
  </div>
  <div class = 'bg-blue-800 text-white p-20'>
     <h1 class = 'text-6xl text-right m-2 p-2'>Our Mission Statement</h1>
     <p class = 'text-left text-2xl m-2 p-2'>We want to make sure that ClassInfo.org helps people make their decisions when choosing school classes, and creating a tightly-knit community. </p>
          <h1 class = 'text-9xl text-right m-2 p-2'>🗣️</h1>

  </div>
  <div class = 'bg-blue-900 text-white text-left p-20'>
     <h1 class = ' text-6xl m-2 p-2'>Any Questions?</h1>
     <p class = ' text-2xl m-2 p-2'>If you have any questions or concerns, contact VaderAI#3292 on Discord, or email at sidponram@gmail.com</p>
     <h1 class = 'text-9xl m-2 p-2 text-white'>✉</h1>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '../components/Searchbar.vue'

export default {
  name: 'Home',
  components: {
      SearchBar
  }
}
</script>


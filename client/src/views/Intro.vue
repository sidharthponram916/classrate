<template>
<div>
  <div class = 'p-2 text-white bg-blue-600'>
     <h1 class = ' text-7xl mb-10 mt-20'>📋</h1>
     <h1 class = ' text-7xl mb-10 mt-20'>The #1 Review Site for Education</h1>
     <SearchBar styling = "mb-32 flex grid grid-cols-1 w-3/4 m-auto rounded bg-white" />
  </div>
  <div class = 'bg-blue-200 text-black p-10 text-left'>
     <h1 class = 'text-6xl m-2 p-2'>What is EduRate?</h1>
     <p class = 'text-2xl m-2 p-2'>Edurate is a platform that allows people to write and read reviews on college classes, student subjects, schools, teachers and more!</p>
     <h1 class = ' text-9xl m-2 p-2'>🤝</h1>
  </div>
  <div class = 'bg-indigo-900 text-white p-10'>
     <h1 class = 'text-6xl text-right m-2 p-2'>Our Mission Statement</h1>
     <p class = 'text-left text-2xl m-2 p-2'>We want to make sure that EduRate helps people make their decisions when choosing college/high school courses, and providing them a space to voice their opinions on such. </p>
          <h1 class = 'text-9xl text-right m-2 p-2'>🗣️</h1>

  </div>
  <div class = 'bg-blue-800 text-white text-left p-10'>
     <h1 class = ' text-6xl m-2 p-2'>Any Questions?</h1>
     <p class = ' text-2xl m-2 p-2'>If you have any questions or concerns, contact EduRate.com at edurate@gmail.com!</p>
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


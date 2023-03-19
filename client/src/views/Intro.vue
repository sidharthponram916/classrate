<template>
  <div>
    <div
      style="
        background: url('https://frsinc.co/wp-content/uploads/students-background.jpg');
        background-size: cover;
      "
      class="p-16 text-white bg-blue-600"
    >
      <img class="m-auto w-72 h-56" src="../assets/logo.png" />
      <h1 class="text-7xl text-center text-white font-bold">
        Your Base for Student Insight
      </h1>
      <h1 class="text-xl mb-16 text-center text-white font-bold">
        Write or learn more about your classes.
      </h1>
      <SearchBar
        styling="mx-auto flex grid grid-cols-1 w-full mb-10 pl-10 font-bold"
      />
    </div>
    <div class="flex grid grid-cols-1">
      <div class="bg-indigo-900 text-white p-32">
        <h1 class="text-6xl m-2 p-2">
          What is
          <span class="ml-2"
            >Class<span class="text-yellow-200">Rate</span></span
          >?
        </h1>
        <p class="text-2xl m-2 p-2">
          ClassRate.org is a platform that use student reviews in order to
          gather and quantify useful information, such as course and teacher
          data, and school leaderboards.
        </p>
      </div>
    </div>
    <div class="flex grid md:grid-cols-2">
      <div class="bg-blue-900 text-white p-20 text-left">
        <h1 class="text-6xl m-2 p-2">Post Reviews</h1>
        <p class="text-2xl m-2 p-2">
          ClassRate is powered by student reviews, so write a review about your
          classes to help the website grow and help your peers.
        </p>
      </div>
      <div class="bg-blue-900 text-white p-20">
        <img
          src="../assets/demosit2.jpeg"
          style="width: 800px; height: 350px"
          class="border-4 border-white rounded"
        />
      </div>
    </div>
    <div class="flex grid md:grid-cols-2">
      <div class="bg-indigo-600 text-white p-20">
        <img
          src="../assets/demosite.jpeg"
          style="width: 800px; height: 350px"
          class="border-4 border-white rounded"
        />
      </div>
      <div class="bg-indigo-600 text-white p-20 text-left">
        <h1 class="text-6xl m-2 p-2">View and Interact with Data</h1>
        <p class="text-2xl m-2 p-2">
          From student reviews, ClassRate generates data and compiles them by
          school, course, and individual reviews and puts them on thier
          respective pages. The reviews also power the course builder, helping
          students choose their classes with live data.
        </p>
      </div>
    </div>
    <div class="bg-blue-600 text-white p-20 text-center">
      <h1 class="text-6xl m-2 p-2">Questions?</h1>
      <p class="text-2xl m-2 p-2">
        Contact us at
        <a class="text-blue-100" href="mailto:info.classrate@gmail.com"
          >info.classrate@gmail.com</a
        >
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "../components/Searchbar.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
  },
  data() {
    return {
      schools: [],
    };
  },
  async mounted() {
    let { data } = await this.$http.get("/schools/all");
    this.schools = data.slice(0, 8);
  },
};
</script>

<template>
  <div class="lexend">
    <div
      style="
        background: url('https://frsinc.co/wp-content/uploads/students-background.jpg');
        background-size: cover;
      "
      class="p-20 text-white bg-blue-600 lexend"
    >
      <img class="m-auto w-72 h-56" src="../assets/logo.png" />
      <h1 class="text-7xl text-center text-white font-bold">
        Your Base for Student Insight
      </h1>
      <h1 class="text-xl mb-16 text-center text-white font-bold">
        Write course reviews. Learn about your classes.
      </h1>
      <SearchBar
        styling="mx-auto flex grid grid-cols-1 w-full mb-10 pl-10 font-bold"
      />
    </div>
    <div class="flex grid md:grid-cols-2">
      <div class="bg-indigo-900 text-white p-20 text-left">
        <h1 class="text-6xl m-2 p-2 font-bold">Post Class Reviews</h1>
        <p class="text-2xl m-2 p-2">
          ClassRate is powered by student reviews, so write a review about your
          classes to help the website grow and help your peers.
        </p>
      </div>
      <div class="bg-indigo-900 text-white p-20">
        <img
          src="../assets/demosit2.jpeg"
          style="width: 1100px; height: 350px"
          class="border-4 border-white rounded"
        />
      </div>
    </div>
    <div class="flex grid md:grid-cols-2">
      <div class="bg-blue-900 text-white p-20">
        <img
          src="../assets/demosite.jpeg"
          style="width: 1000px; height: 400px"
          class="m-2 border-4 border-white rounded"
        />
      </div>
      <div class="bg-blue-900 text-white p-20 text-left">
        <h1 class="text-6xl m-2 p-2 font-bold">View and Interact with Data</h1>
        <p class="text-2xl m-2 p-2">
          View course statistics from each school and specific information such
          as difficulty, workload, and engagement.
        </p>
      </div>
    </div>
    <div class="bg-gray-100 text-black p-4">
        <h1 class="text-6xl m-2 p-2 font-bold text-left">Trending Schools</h1>
      <div class = 'p-2'>
        <div class="flex flex-wrap w-auto">
          <div v-for="school in schools" :key="school.id">
            <a :href="'/schools/view/' + school._id">
              <div
                class="p-2 flex flex-col m-2 rounded-lg"
                :style="'background:' + school.color"
              >
              <div class = 'flex m-2'>
                <img
                  :src="school.url"
                  class="rounded-full w-11 h-11 m-auto mb-2 mr-2"
                />
                <div class="mt-auto">
                  <div
                    class="text-white text-sm md:text-lg text-left font-bold"
                  >
                    {{ school.name }}
                  </div>
                  <div class="text-white text-md text-left">
                    <span v-if = "getReviewCount(school._id) > 0">{{ getReviewCount(school._id) }} Reviews |</span> {{ school.city }}
                    {{ school.state }}
                  </div>
                </div>
              </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-blue-600 text-white p-20 text-center">
      <h1 class="text-6xl m-2 p-2 font-bold">Questions?</h1>
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
      review: [],
    };
  },
  async mounted() {
    let reviews = await this.$http.get("/reviews/all");
    this.reviews = reviews.data;

    let { data } = await this.$http.get("/schools/all");
    this.schools = data
      .sort((a, b) => {
        return this.getReviewCount(b._id) - this.getReviewCount(a._id);
      })
      .slice(0, 21);

  },
  methods: {
    getReviewCount(school_id) {
      let count = 0;
      for (let i = 0; i < this.reviews.length; i++) {
        if (this.reviews[i].school_id === school_id) {
          count++;
        }
      }

      return count;
    },
  },
};
</script>

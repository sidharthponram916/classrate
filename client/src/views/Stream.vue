<template>
  <div>
    <div class="p-4 m-2 bg-blue-400 text-white text-center md:text-left m-auto">
      <span class="sm:flex lexend text-5xl px-2">
        <span class="sm:ml-2 font-bold"
          >View or <span class="text-yellow-200">Review</span></span
        >.</span
      >
      <span class="px-6 text-xl lexend"
        ><b class="text-yellow-200">{{ reviews.length }}</b> Reviews
        Worldwide.</span
      >
      <SearchBar />
    </div>
    <div>
      <h1 class="mt-4 ml-4 text-left lexend font-bold text-2xl">
        <span
          :style="'background:' + school.color"
          class="bg-blue-400 p-1 rounded text-white mr-2"
        >
          {{
            school.name
              ? school.name
              : "Set your school in your settings for a personalized stream!"
          }}
        </span>
      </h1>
      <div class="flex flex-wrap p-2">
        <div v-for="review in schoolReviews.slice(0, 8)" :key="review._id">
          <div
            class="p-4 m-2 rounded text-left text-black bg-gray-100 border-2"
          >
            <h1
              class="text-xl lexend font-bold"
              :style="'color:' + school.color"
            >
              {{ review.course }}
            </h1>
            <p class="text-sm lexend font-light">
              Published on {{ formatDate(review.createdAt) }}
            </p>
            <div class="lexend mt-2 text-sm">
              {{ review.desc.slice(0, 50) }}...
            </div>
            <button class="lexend mt-3 p-2 border-2 rounded hover:bg-gray-200">
              <a :href="'/reviews/' + review._id"> View More </a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1 class="mt-4 ml-4 text-left lexend font-bold text-2xl">
        <span class="bg-blue-400 p-1 rounded text-white"
          >Class<span class="text-yellow-200">Rate</span
          ><span class="text-sm">.org</span>
        </span>
      </h1>
      <div class="flex flex-wrap p-2">
        <div v-for="review in reviews.slice(0, 7)" :key="review._id">
          <div class="p-4 bg-gray-100 m-2 border-2 text-left">
            <h1 class="text-xl lexend font-bold">{{ review.course }}</h1>
            <p class="text-sm lexend">{{ review.school }}</p>
            <div class="lexend mt-2 text-sm">
              {{ review.desc.slice(0, 50) }}...
            </div>
            <button
              class="lexend mt-2 bg-gray-100 p-2 border-2 rounded hover:bg-gray-200"
            >
              <a :href="'/reviews/' + review._id"> View More </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/Searchbar.vue";
import moment from "moment";

export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      reviews: [],
      schoolReviews: [],
      school: {},
    };
  },
  async beforeMount() {
    if (!this.$store.state.loggedIn) return location.replace("/");
  },
  async created() {
    this.reviews = (await this.$http.get("/reviews/all")).data.reverse();
    this.school = (
      await this.$http.get(`/schools/get/${this.$store.state.userData.school}`)
    ).data;

    this.schoolReviews = this.reviews.filter((review) => {
      return review.school_id === this.$store.state.userData.school;
    });
  },
  methods: {
    formatDate(str) {
      return moment(str).fromNow();
    },
  },
};
</script>

<style>
body {
  background: rgb(224, 226, 227);
}
</style>

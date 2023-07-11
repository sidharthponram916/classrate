<template>
  <div>
    <div class="p-4 bg-blue-400 text-white text-center md:text-left m-auto">
      <span class="sm:flex lexend text-5xl px-2">
        <span class="sm:ml-2 font-bold"
          >View or <span class="text-yellow-200">Review</span></span
        >.</span
      >
      <span class="px-6 text-xl lexend"
        ><b class="text-yellow-200">{{ reviews.length }}</b> Reviews
        Sitewide.</span
      >
      <SearchBar />
    </div>
    <div class="p-2 bg-slate-100">
      <h1
        v-if="!school.name"
        class="text-left p-2 m-2 lexend text-2xl font-bold"
      >
        Set your school in
        <a href="/view/profile" class="text-blue-800">User Settings</a>!
      </h1>
      <h1
        v-if="school.name"
        class="text-black py-2 px-4 text-left text-4xl lexend font-semibold"
      >
        Featured on
        <span :style="'color:' + school.color"> {{ school.name }} </span>
      </h1>
      <div
        v-if="schoolReviews.length < 1 && school.name"
        class="text-black text-left lexend p-2 m-2 text-xl"
      >
        Looks like your school doesn't have any reviews! Get started by writing
        a review.
      </div>
      <div v-if="schoolReviews.length > 0" class="flex">
        <div
          class="hidden md:block w-1/4 bg-white rounded border-2 text-left p-3 my-4 mx-2 lexend"
        >
          <h1 class="text-3xl font-bold" :style="'color:' + school.color">
            {{ schoolReviews[0].course.slice(0, 20) }}
          </h1>
          <p class="text-lg lexend font-light">
            Published {{ formatDate(schoolReviews[0].createdAt) }}
          </p>
          <h1 v-html="stars" class="text-4xl text-yellow-500 my-2 mb-4"></h1>
          <div class="lexend mt-2 text-xl font-light">
            {{ schoolReviews[0].desc.slice(0, 120).trim() }}...
          </div>
          <button
            class="mt-16 p-2 text-xl text-white font-semibold rounded"
            :style="'background:' + school.color"
          >
            <a :href="'/reviews/view/' + schoolReviews[0]._id"> View More </a>
          </button>
        </div>
        <div
          class="w-3/4 flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2"
        >
          <div v-for="review in schoolReviews.slice(1, 7)" :key="review._id">
            <div class="p-4 m-2 rounded text-left text-black bg-white border-2">
              <h1
                class="text-xl lexend font-bold"
                :style="'color:' + school.color"
              >
                {{ review.course.slice(0, 21) }}
              </h1>
              <p class="text-sm lexend font-light">
                Published on {{ formatDate(review.createdAt) }}
              </p>
              <div class="lexend mt-2 text-sm">
                {{ review.desc.slice(0, 50).trim() }}...
              </div>
              <button
                class="lexend mt-3 p-2 text-white font-semibold rounded hover:bg-gray-200"
                :style="'background:' + school.color"
              >
                <a :href="'/reviews/view/' + review._id"> View More </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-2 bg-slate-100">
      <h1 class="text-black py-2 px-4 text-left text-4xl lexend font-semibold">
        Other Reviews on Class<span class="text-yellow-600">Rate</span
        ><span class="text-sm">.org</span>
      </h1>
      <div class="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2">
        <div
          v-for="review in filterOutUserSchool(reviews).slice(0, 8)"
          :key="review._id"
        >
          <div class="p-4 bg-white m-2 text-left rounded border-2">
            <h1 class="text-xl lexend font-bold">{{ review.course }}</h1>
            <p class="text-sm lexend">{{ review.school }}</p>
            <div class="lexend mt-2 text-sm">
              {{ review.desc.slice(0, 50) }}...
            </div>
            <button
              class="lexend mt-2 bg-white p-2 border-2 rounded hover:bg-gray-200"
            >
              <a :href="'/reviews/view/' + review._id"> View More </a>
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
      stars: "",
    };
  },
  async beforeMount() {
    document.title = "Stream - ClassRate.org";

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

    for (let i = 0; i < this.schoolReviews[0].overall; i++) {
      this.stars += "<i class='fa-solid fa-star'></i>";
    }
    for (let i = 0; i < 5 - this.schoolReviews[0].overall; i++) {
      this.stars += "<i class='fa-regular fa-star'></i>";
    }
  },
  methods: {
    formatDate(str) {
      return moment(str).fromNow();
    },
    filterOutUserSchool(array) {
      let result = new Array();
      if (this.$store.state.userData.school.trim("") != "") {
        for (let i = 0; i < array.length; i++) {
          if (array[i].school_id !== this.$store.state.userData.school) {
            result.push(array[i]);
          }
        }
      } else {
        result = array;
      }
      return result;
    },
  },
};
</script>

<style>
body {
  background: rgb(224, 226, 227);
}
</style>

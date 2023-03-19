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
        Recent Activity
      </h1>
      <div class="flex flex-wrap p-2">
        <div v-for="review in reviews.slice(0, 8)" :key="review._id">
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
export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      reviews: [],
      schoolReviews: []
    };
  },
  async created() {
    this.reviews = (await this.$http.get("/reviews/all")).data.reverse();

    this.schoolReviews = this.reviews.filter(review => { 
         review.school 
    })
  },
};
</script>

<style>
body {
  background: rgb(242, 241, 241);
}
</style>

<template>
  <div class="text-white font-bold">
    <Searchbar />
    <div
      :style="'background:' + school.color"
      class="w-11/12 mx-5 p-2 font-bold lexend"
    >
      <div class="flex p-2 m-2 text-white">
        <img :src="school.url" class="w-16 h-16 rounded-full mr-3" />
        <h1 class="text-left text-4xl mr-4 font-bold">
          {{ school.name }} <br />
          <h1 class="text-xl font-bold">
            {{ school.address }} - {{ school.city }}, {{ school.state }}
          </h1>
        </h1>
        <!-- <h1 class="text-left ml-auto">
          <a :href="'/schools/edit/' + school._id"> Edit Information </a>
        </h1> -->
      </div>
      <div v-if="school.website != ''">
        <h1 class="text-left mx-4 text-xl mb-4">
          <a
            class="underline text-blue-300"
            target="_blank"
            :href="school.website"
          >
            {{ school.website }}
          </a>
        </h1>
      </div>
      <div class="flex">
        <span class="text-left text-gray-200 mx-4 text-xl mb-4 lexend"
          ><span class="text-4xl text-white lato">{{ reviewCount }}</span> Class
          Reviews</span
        >
        <span class="text-left text-gray-200 mx-4 text-xl mb-4 lexend"
          ><span class="text-4xl text-white lato">{{ courseCount }}</span>
          Registered Classes</span
        >
      </div>
    </div>
    <div class="w-11/12 mx-5 p-2 bg-gray-100 border text-black lexend">
      <h1 class="text-4xl text-left p-2 m-2">Statistics</h1>
      <h1 class="text-2xl text-left p-2 m-2">Explore Classes</h1>
      <h1 v-if="courses.length == 0" class="text-gray-500 text-left p-2 m-2">
        No Classes added...
      </h1>
      <div class="flex flex-wrap mx-2 lexend">
        <div class="flex-none" v-for="course in courses" :key="course._id">
          <div
            class="p-3 rounded m-2 text-left inline-block w-auto bg-blue-400 text-white"
            :style="'background:' + school.color"
          >
            <a :href="'/courses/view/' + course._id">
              <h1 class="text-2xl">{{ course.name }}</h1>
              <h1 class="text-sm">
                <span class="lato">{{ course.ratings.length }}</span> Ratings
              </h1>
            </a>
          </div>
        </div>
      </div>
      <!-- Hardest Classes -->
      <h1 class="text-2xl text-left p-2 m-2 lexend font-bold">Rankings</h1>
      <div v-if="courses.length >= 5">
        <div class="p-4 flex grid grid-cols-1 lexend md:grid-cols-2 gap-4">
          <div class="w-full bg-white border-2 p-2 mb-2 h-full">
            <h1 class="text-3xl text-left m-2">Top Rated Classes</h1>
            <p class="text-sm text-left m-2">
              Ratings are calculated out of 5 out of all classes at the school.
            </p>
            <div
              class="flex p-2"
              v-for="(course, index) in showtopRatedClasses"
              :key="course._id"
            >
              <div
                class="text-left bg-blue-500 h-7 text-xl w-7 text-center text-white mr-2"
              >
                {{ index + 1 }}
              </div>
              <div class="text-left text-xl">{{ course.class }}</div>
              <div class="ml-auto text-2xl">
                {{ course.factor
                }}<span class="text-sm text-gray-500"> /5 </span>
              </div>
            </div>
            <p
              v-if="
                showtopRatedClasses.length == 5 &&
                showtopRatedClasses.length !== topRatedClasses.length
              "
              class="text-blue-900 text-left underline m-2 cursor-pointer"
              @click="showMore('topRatedClasses')"
            >
              See More
            </p>
            <p
              v-if="showtopRatedClasses.length !== 5"
              class="text-blue-900 text-left underline m-2 cursor-pointer"
              @click="showLess('topRatedClasses')"
            >
              See Less
            </p>
          </div>
          <div class="w-full bg-white lexend border-2 p-2 h-full">
            <h1 class="text-3xl text-left m-2">Hardest Classes</h1>
            <p class="text-sm text-left m-2">
              Scores are calculated out of 10 out of all classes at the school.
            </p>
            <div
              class="flex p-2"
              v-for="(course, index) in showhardestClasses"
              :key="course._id"
            >
              <div
                class="text-left bg-green-500 h-7 text-xl w-7 text-center text-white mr-2"
              >
                {{ index + 1 }}
              </div>
              <div class="text-left text-xl">{{ course.class }}</div>
              <div class="ml-auto text-2xl">
                {{ course.factor
                }}<span class="text-sm text-gray-500"> /10 </span>
              </div>
            </div>
            <p
              v-if="
                showhardestClasses.length == 5 &&
                showhardestClasses.length !== hardestClasses.length
              "
              class="text-blue-900 text-left underline m-2 cursor-pointer"
              @click="showMore('hardestClasses')"
            >
              See More
            </p>
            <p
              v-if="showhardestClasses.length !== 5"
              class="text-blue-900 text-left underline m-2 cursor-pointer"
              @click="showLess('hardestClasses')"
            >
              See Less
            </p>
          </div>
        </div>
      </div>
      <div v-else class="p-2 m-2 text-left text-gray-500">
        Wait until more courses are reviewed!
      </div>
    </div>

    <div class="p-2"></div>
  </div>
</template>

<script>
import Searchbar from "../../components/Searchbar.vue";
export default {
  components: {
    Searchbar,
  },
  data() {
    return {
      school: {},
      courses: [],
      hardestClasses: [],
      topRatedClasses: [],
      showtopRatedClasses: [],
      showhardestClasses: [],
      reviewCount: 0,
      courseCount: 0,
    };
  },
  async mounted() {
    let { data } = await this.$http.get(
      `/schools/get/${this.$route.params.id}`
    );
    this.school = data;

    document.title = `${this.school.name} on ClassRate.org`;

    let all = await this.$http.get(`/courses/all`);

    let courses = all.data.filter((course) => {
      return course.school_id === `${this.$route.params.id}`;
    });

    // Sort the classes alphabetically
    courses.sort((a, b) => a.name.localeCompare(b.name));

    this.courses = courses;

    this.courseCount = courses.length;
    // Most Enjoyable Classes
    let topRatedClasses = [];

    for (let i = 0; i < courses.length; i++) {
      let ratings = courses[i].ratings;

      let overall = 0;

      for (let j = 0; j < ratings.length; j++) {
        let rating = ratings[j].data;

        overall = overall + rating.overall;
      }

      reviews = reviews + ratings.length;

      overall = overall / ratings.length;

      topRatedClasses.push({
        class: `${courses[i].name}`,
        factor: `${overall.toFixed(1)}`,
        _id: `${courses[i]._id}`,
      });
    }
    console.log(hardestClasses);

    topRatedClasses.sort((a, b) => {
      return b.factor - a.factor;
    });

    this.topRatedClasses = topRatedClasses;
    this.showtopRatedClasses = topRatedClasses.slice(0, 5);
    // Hardest Classes

    let hardestClasses = [];
    let reviews = 0;

    for (let i = 0; i < courses.length; i++) {
      let ratings = courses[i].ratings;

      let avgDifficulty = 0;
      let avgWorkload = 0;

      for (let j = 0; j < ratings.length; j++) {
        let rating = ratings[j].data;

        avgDifficulty = avgDifficulty + rating.difficulty;
        avgWorkload = avgWorkload + rating.workload;
      }

      reviews = reviews + ratings.length;

      avgDifficulty = avgDifficulty / ratings.length;
      avgWorkload = avgWorkload / ratings.length;

      hardestClasses.push({
        class: `${courses[i].name}`,
        factor: `${((avgDifficulty + avgWorkload) / 2).toFixed(2)}`,
        _id: `${courses[i]._id}`,
      });
    }
    console.log(hardestClasses);

    hardestClasses.sort((a, b) => {
      return b.factor - a.factor;
    });

    this.hardestClasses = hardestClasses;
    this.showhardestClasses = hardestClasses.slice(0, 5);
    this.reviewCount = reviews;
    // Other leaderboards are here.e.
  },
  methods: {
    showMore(feature) {
      this[`show${feature}`] = this[`${feature}`];
    },
    showLess(feature) {
      this[`show${feature}`] = this[`${feature}`].slice(0, 5);
    },
  },
};
</script>

<style>
.lato {
  font-family: Lato, sans-serif;
}
div::-webkit-scrollbar-thumb {
  background: none;
}

/* Handle on hover */
div::-webkit-scrollbar-thumb:hover {
  background: gray;
}
</style>

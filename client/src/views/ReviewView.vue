<template>
  <div v-if="review.course">
    <!-- This code could be converted into a component....  -->
    <SearchBar />
    <div class="bg-white text-black w-11/12 text-left mx-5 lexend">
      <h1 class="p-2 mx-2 text-4xl my-1 text-left font-bold">
        Review of {{ review.course }} at
        <a
          :style="'color:' + color.school"
          :href="'/schools/view/' + review.school_id"
          >{{ review.school }}
        </a>
      </h1>
      <p class="px-2 mx-2">
        Written by a student
        <span class="text-blue-600 font-bold">{{ review.createdAt }}</span
        >.
      </p>
      <p class="px-2 mx-2">
        Class finished on
        <span class="text-blue-700 font-bold">{{
          formatDate(review.year)
        }}</span>
        through {{ review.type.toLowerCase() }} instruction.
      </p>
      <h1
        v-html="rating(review.overall)"
        class="text-5xl text-yellow-500 m-3 py-2"
      ></h1>
      <span class="text-3xl p-2 m-2 font-bold lexend"
        >Instructor -
        <span class="text-gray-700 text-3xl font-light lexend"
          >{{ review.instructor }}
        </span></span
      >
      <div class="flex m-2 p-2 grid grid-cols-2 md:grid-cols-4 font-bold">
        <span class="text-3xl mt-2 mr-32"
          >Difficulty<br /><span
            :class="color.difficulty"
            class="text-8xl lexend"
            >{{ review.difficulty }}</span
          >/10</span
        >
        <span class="text-3xl mt-2 mr-32"
          >Engagement<br /><span
            :class="color.curriculum"
            class="text-8xl lexend"
          >
            {{ review.curriculum }}</span
          >/10</span
        >
        <span class="text-3xl mt-2 mr-32"
          >Workload <br /><span :class="color.workload" class="text-8xl lexend">{{
            review.workload
          }}</span
          >/10</span
        >
        <span class="text-3xl mt-2 mr-32"
          >Instructor<br /><span
            :class="color.instructorRating"
            class="text-8xl lexend"
          >
            {{ review.instructorRating }}</span
          >/10</span
        >
      </div>
      <span class="text-3xl p-2 m-2 font-bold"
        >Grade Student Recieved<br /><span
          :class="color.grade"
          class="text-8xl p-2 m-2"
        >
          {{ review.grade }}</span
        ></span
      >
      <div class="p-2 m-2 w-1/2 md:w-3/4">
        <h1 class="text-3xl mb-2 font-bold">Review</h1>
        <p class="text-xl text-gray-600 font-bold">{{ review.desc }}</p>
      </div>
      <button
        @click="upvote()"
        :class="color.upvote"
        class="p-3 m-4 bg-sky-700 mr-auto rounded text-white shadow-lg text-2xl lexend font-bold"
      >
        {{ this.upvotes.length }}
        <i class="fa-sharp fa-solid fa-thumbs-up ml-2"></i>
      </button>
      <button
        @click="clicked()"
        v-clipboard:copy="message"
        class="p-3 m-4 bg-green-500 mr-auto rounded text-white shadow-lg text-2xl font-bold"
      >
        Share <i class="fa-solid fa-share ml-2"></i>
      </button>
    </div>
    <!-- <div class="w-11/12 text-left mx-5 p-2 bg-white">
      <div class="p-2 m-2 border-2 bg-white w-3/4 rounded">
        <div class="text-xl mx-2 lexend font-bold">
          DogeMusic<span class="lexend text-sm font-light py-1 px-2"
            >2 hours ago</span
          >
        </div>
        <div class="m-2 text-gray-600 lexend font-semibold text-xl">
          I honestly agree a lot! This AP class was way too easy. Wish it could
          have been more challenging. LOL!
        </div>
      </div>
      <div class="p-2 m-2 border-2 bg-white w-3/4 rounded">
        <div class="text-xl mx-2 lexend font-bold">
          Commando02<span class="lexend text-sm font-light py-1 px-2"
            >2 hours ago</span
          >
        </div>
        <div class="m-2 text-gray-600 lexend font-semibold text-xl">
          Yea word.
        </div>
      </div>
    </div> -->
    <div class="w-11/12 text-left m-5 p-2 bg-white lexend">
      <h1 class="text-left text-4xl text-black m-2 p-2 font-bold">
        Other Reviews
      </h1>
      <div class="flex grid grid-cols-1 gap-2 md:grid-cols-5 text-black pb-4">
        <div v-for="review in randomSet" :key="review._id">
          <a :href="'/reviews/' + review._id">
            <div class="p-4 m-2 border-2 rounded bg-white h-full">
              <h1 class="text-xl font-semibold">
                {{ review.course.slice(0, 18) }}
              </h1>
              <h1
                class="text-yellow-500 text-2xl"
                v-html="rating(review.overall)"
              ></h1>
              <h1 class="text-sm text-gray-600 mb-2">{{ review.school }}</h1>
              <p style="font-family: ">{{ review.desc.slice(0, 100) }}...</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="mx-auto my-56">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="00 0 50 50"
    >
      <!-- path code credited by https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d -->
      <path
        fill="#2d40cf"
        d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
</template>

<script>
import moment from "moment";
import SearchBar from "../components/Searchbar.vue";

export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      review: {},
      schoolName: "",
      color: {
        workload: "text-black",
        instructorRating: "text-black",
        difficulty: "text-black",
        grade: "text-black",
        school: "",
      },
      data: "",
      stars: "",
      all: "",
      search: "",
      message: "heloo",
      upvotes: 0,
    };
  },
  computed: {
    randomSet() {
      let data = this.all;
      // Fisher-Yates Shuffle
      function shuffle(array) {
        for (let i = data.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

      shuffle(data);
      return data.slice(1, 6);
    },
  },
  async beforeCreate() {
    let { data } = await this.$http.get(
      `/reviews/get/${this.$route.params.id}`
    );
    let all = await this.$http.get(`/reviews/all`);

    data.createdAt = moment(data.createdAt).fromNow();

    this.upvotes = data.upvotes;
    this.review = data;

    this.all = all.data;

    document.title = `Review of ${data.course} at ${data.school}`;

    const school = await this.$http.get(`/schools/get/${data.school_id}`);

    this.schoolName = school.data.name;
    this.color.school = school.data.color;

    this.message = `Check out this review of ${this.review.course} at ${
      school.data.name
    }. \n
${localStorage.getItem("baseUrl")}${this.$route.fullPath} `;

    this.data = data;

    if (this.data.difficulty == 10) {
      this.color.difficulty = "text-red-500";
    } else if (this.data.difficulty == 9) {
      this.color.difficulty = "text-red-400";
    } else if (this.data.difficulty == 8) {
      this.color.difficulty = "text-yellow-700";
    } else if (this.data.difficulty == 7) {
      this.color.difficulty = "text-yellow-600";
    } else if (this.data.difficulty == 6) {
      this.color.difficulty = "text-yellow-500";
    } else if (this.data.difficulty == 5) {
      this.color.difficulty = "text-green-400";
    } else if (this.data.difficulty == 4) {
      this.color.difficulty = "text-green-500";
    } else if (this.data.difficulty == 3) {
      this.color.difficulty = "text-green-600";
    } else if (this.data.difficulty == 2) {
      this.color.difficulty = "text-green-700";
    } else {
      this.color.difficulty = "text-green-800";
    }

    if (this.data.curriculum == 1) {
      this.color.curriculum = "text-red-500";
    } else if (this.data.curriculum == 2) {
      this.color.curriculum = "text-red-400";
    } else if (this.data.curriculum == 3) {
      this.color.curriculum = "text-yellow-700";
    } else if (this.data.curriculum == 4) {
      this.color.curriculum = "text-yellow-600";
    } else if (this.data.curriculum == 5) {
      this.color.curriculum = "text-yellow-500";
    } else if (this.data.curriculum == 6) {
      this.color.curriculum = "text-yellow-400";
    } else if (this.data.curriculum == 7) {
      this.color.curriculum = "text-green-500";
    } else if (this.data.curriculum == 8) {
      this.color.curriculum = "text-green-600";
    } else if (this.data.curriculum == 9) {
      this.color.curriculum = "text-green-600";
    } else {
      this.color.curriculum = "text-green-600";
    }

    if (this.data.instructorRating == 1) {
      this.color.instructorRating = "text-red-500";
    } else if (this.data.instructorRating == 2) {
      this.color.instructorRating = "text-red-400";
    } else if (this.data.instructorRating == 3) {
      this.color.instructorRating = "text-yellow-600";
    } else if (this.data.instructorRating == 4) {
      this.color.instructorRating = "text-yellow-600";
    } else if (this.data.instructorRating == 5) {
      this.color.instructorRating = "text-yellow-500";
    } else if (this.data.instructorRating == 6) {
      this.color.instructorRating = "text-yellow-400";
    } else if (this.data.instructorRating == 7) {
      this.color.instructorRating = "text-green-500";
    } else if (this.data.instructorRating == 8) {
      this.color.instructorRating = "text-green-600";
    } else if (this.data.instructorRating == 9) {
      this.color.instructorRating = "text-green-600";
    } else {
      this.color.instructorRating = "text-green-600";
    }

    if (this.data.grade == "F") {
      this.color.grade = "text-red-500";
    } else if (this.data.grade == "D") {
      this.color.grade = "text-red-400";
    } else if (this.data.grade == "C-") {
      this.color.grade = "text-yellow-700";
    } else if (this.data.grade == "C") {
      this.color.grade = "text-yellow-600";
    } else if (this.data.grade == "C+") {
      this.color.grade = "text-yellow-500";
    } else if (this.data.grade == "B-") {
      this.color.instructorRating = "text-green-300";
    } else if (this.data.grade == "B") {
      this.color.grade = "text-green-500";
    } else if (this.data.grade == "B+") {
      this.color.grade = "text-green-600";
    } else if (this.data.grade == "A-") {
      this.color.grade = "text-green-600";
    } else if (this.data.grade == "N/A") {
      this.color.grade = "text-black";
    } else {
      this.color.grade = "text-green-700";
    }

    if (this.data.workload == 10) {
      this.color.workload = "text-red-500";
    } else if (this.data.workload == 9) {
      this.color.workload = "text-red-400";
    } else if (this.data.workload == 8) {
      this.color.workload = "text-yellow-700";
    } else if (this.data.workload == 7) {
      this.color.workload = "text-yellow-600";
    } else if (this.data.workload == 6) {
      this.color.workload = "text-yellow-500";
    } else if (this.data.workload == 5) {
      this.color.workload = "text-yellow-400";
    } else if (this.data.workload == 4) {
      this.color.workload = "text-green-500";
    } else if (this.data.workload == 3) {
      this.color.workload = "text-green-600";
    } else if (this.data.workload == 2) {
      this.color.workload = "text-green-700";
    } else {
      this.color.workload = "text-green-800";
    }

    if (this.data.upvotes.includes(this.$store.state.userData.username)) {
      this.color.upvote = "bg-sky-700";
    } else {
      this.color.upvote = "bg-sky-600";
    }

    for (let i = 0; i < this.data.overall; i++) {
      this.stars += "<i class='fa-solid fa-star'></i>";
    }
    for (let i = 0; i < 5 - this.data.overall; i++) {
      this.stars += "<i class='fa-regular fa-star'></i>";
    }
  },
  methods: {
    rating(num) {
      let html = "";
      for (let i = 0; i < num; i++) {
        html += "<i class='fa-solid fa-star'></i>";
      }
      for (let i = 0; i < 5 - num; i++) {
        html += "<i class='fa-regular fa-star'></i>";
      }

      return html;
    },
    formatDate(dte) {
      // Courtesy of StackOverflow for this solution (With Personal Edits for my prj): https://stackoverflow.com/questions/39195470/converting-yyyy-mm-in-string-format-to-a-month-name-var-javascript#:~:text=Use%20the%20split()%20function,by%20typing%20res%5B1%5D%20.
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var another = months[+dte.split("-")[1] - 1];

      return `${another} ${dte.split("-")[0]}`;
    },
    clicked() {
      alert("Information copied to clipboard!");
    },
    async upvote() {
      if (!localStorage.getItem("token")) return location.replace("/login");

      let upvoted = this.upvotes.find((user) => {
        return user === this.$store.state.userData.username;
      });

      if (!upvoted) {
        this.upvotes.push(`${this.$store.state.userData.username}`);
        this.color.upvote = "bg-sky-700";
      } else {
        this.upvotes.splice(
          this.upvotes.indexOf(this.$store.state.userData.username),
          1
        );
        this.color.upvote = "bg-sky-600";
      }

      await this.$http.put(`/reviews/update/${this.$route.params.id}`, {
        upvotes: Array.from(this.upvotes),
      });
    },
  },
};
</script>

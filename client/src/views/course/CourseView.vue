<template>
  <div v-if="course.name">
    <Searchbar />
    <div
      :style="'background:' + school.color"
      class="w-11/12 mx-5 p-2 text-white lexend"
    >
      <div class="flex p-2 m-2 text-white">
        <img :src="school.url" class="w-16 h-16 rounded-full mr-3" />
        <h1 class="text-left text-4xl mr-4 font-bold">
          {{ course.name }}
          <span class="text-xl"
            >at
            <a :href="'/schools/view/' + school._id"
              >{{ school.name }}
            </a></span
          ><br />
          <h1 class="text-sm mt-2">
            <span
              class="text-yellow-400 text-2xl"
              v-html="formatRating(Math.round(averages.rating))"
            >
            </span>
          </h1>
        </h1>
      </div>
      <div class="flex">
        <h1 class="text-left text-gray-200 mx-4 text-xl mb-4">
          <span class="text-4xl text-white font-bold">{{
            averages.rating.toFixed(1)
          }}</span>
          out of 5
        </h1>
        <h1 class="text-left text-gray-200 mx-4 text-xl mb-4">
          <span class="text-4xl text-white font-bold">{{
            course.ratings.length
          }}</span>
          Ratings
        </h1>
      </div>
    </div>
    <div class="w-11/12 bg-white mx-5 p-2 text-black mb-2 lexend">
      <div
        class="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-2 m-2 text-left"
      >
        <span class="text-3xl mt-2 mr-32 font-bold"
          >Difficulty<br /><span
            class="text-8xl lexend font-bold"
            :class="color.difficulty"
            >{{ averages.difficulty.toFixed(1) }}</span
          >/10</span
        >
        <span class="text-3xl mt-2 mr-32 font-bold"
          >Curriculum<br /><span
            class="text-8xl lexend"
            :class="color.curriculum"
            >{{ averages.curriculum.toFixed(1) }}</span
          >/10</span
        >
        <span class="text-3xl mt-2 mr-32 font-bold"
          >Workload <br /><span
            class="text-8xl lexend"
            :class="color.workload"
            >{{ averages.workload.toFixed(1) }}</span
          >/10</span
        >
        <span class="text-3xl mt-2 mr-32 font-bold"
          >Average GPA <br /><span
            class="text-8xl lexend"
            :class="color.grade"
            >{{ averages.grade.toFixed(2) }}</span
          >/4.00</span
        >
      </div>
      <h1 class="text-left p-2 m-2 text-3xl font-bold">Teachers</h1>
      <div class="flex mx-2 overflow-y-auto">
        <div class="flex-none" v-for="teacher in teachers" :key="teacher">
          <div
            class="p-2 rounded border-2 m-2 text-left inline-block w-auto bg-white"
          >
            <a :href="'/courses/view/' + course._id">
              <h1 class="text-2xl mb-2 font-bold">
                {{ teacher.name }}
                <span
                  :class="teacher.color"
                  class="p-2 m-2 text-3xl rounded lato"
                  >{{ teacher.average.toFixed(0)
                  }}<span class="text-black text-xl">/10</span></span
                >
              </h1>
              <h1 class="text-sm font-bold lato">
                {{ teacher.ratings.length }} Ratings
              </h1>
            </a>
          </div>
        </div>
      </div>

      <div class="p-2 m-2 text-3xl font-bold text-left">Ratings</div>
      <div class="flex mx-2 overflow-y-auto">
        <div
          class="flex-none"
          v-for="rating in course.ratings"
          :key="rating.data._id"
        >
          <div class="rounded border-2 m-2 text-left inline-block w-auto">
            <a :href="'/reviews/' + rating.data._id">
              <h1 class="text-2xl px-2 mx-2 my-2 font-bold">
                Student who finished this class in
                {{ formatDate(rating.data.year) }}
              </h1>
              <h1
                class="text-3xl px-4 text-yellow-600"
                v-html="formatRating(rating.data.overall)"
              ></h1>
              <h1 class="text-md px-2 mx-2 my-2">
                {{ rating.data.desc.trim("").slice(0, 99) }}...
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="mx-auto my-56">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 50 50"
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
import Searchbar from "../../components/Searchbar.vue";
export default {
  components: {
    Searchbar,
  },
  data() {
    return {
      school: {},
      course: {},
      rating: {},
      averages: {},
      color: {},
      teachers: [1, 2],
    };
  },
  async mounted() {
    let course = await this.$http.get(
      "/courses/getbyid/" + this.$route.params.id
    );
    this.course = course.data;

    let school = await this.$http.get("/schools/get/" + this.course.school_id);
    this.school = school.data;

    document.title = `${this.course.name} at ${this.school.name} | Classrate.org`;

    let ratings = course.data.ratings;

    let difficulties = ratings.map((a) => a.data.difficulty);
    let findif = 0;

    for (let i = 0; i < difficulties.length; i++) {
      findif += difficulties[i];

      if (i === difficulties.length - 1) {
        findif = findif / difficulties.length;
      }
    }

    this.averages.difficulty = findif;

    let workloads = ratings.map((a) => a.data.workload);
    let findwo = 0;

    for (let i = 0; i < workloads.length; i++) {
      findwo += workloads[i];

      if (i === workloads.length - 1) {
        findwo = findwo / workloads.length;
      }
    }

    this.averages.workload = findwo;

    let curriculums = ratings.map((a) => a.data.curriculum);
    let findcu = 0;

    for (let i = 0; i < curriculums.length; i++) {
      findcu += curriculums[i];

      if (i === curriculums.length - 1) {
        findcu = findcu / curriculums.length;
      }
    }

    this.averages.curriculum = findcu;

    let stars = ratings.map((a) => a.data.overall);
    let findra = 0;

    for (let i = 0; i < stars.length; i++) {
      findra += stars[i];

      if (i === stars.length - 1) {
        findra = findra / stars.length;
      }
    }
    this.averages.rating = findra;

    let grades = ratings.map((a) => a.data.grade);
    let fingrades = 0;
    fingrades;
    for (let i = 0; i < grades.length; i++) {
      let grade = grades[i];

      switch (grade) {
        case "A+":
          fingrades += 4.0;
          break;
        case "A":
          fingrades += 4.0;
          break;
        case "A-":
          fingrades += 4.0;
          break;
        case "B+":
          fingrades += 3.0;
          break;
        case "B":
          fingrades += 3.0;
          break;
        case "B-":
          fingrades += 3.0;
          break;
        case "C+":
          fingrades += 2.0;
          break;
        case "C":
          fingrades += 2.0;
          break;
        case "C-":
          fingrades += 2.0;
          break;
        case "D":
          fingrades += 1.0;
          break;
        case "F":
          fingrades += 0.0;
          break;
        case "N/A":
          grades.length = grades.length - 1;
          break;
      }

      if (i === grades.length - 1) {
        fingrades = fingrades / grades.length;
      }
    }

    this.averages.grade = fingrades;

    if (this.averages.difficulty >= 10) {
      this.color.difficulty = "text-red-500";
    } else if (this.averages.difficulty >= 9) {
      this.color.difficulty = "text-red-400";
    } else if (this.averages.difficulty >= 8) {
      this.color.difficulty = "text-yellow-700";
    } else if (this.averages.difficulty >= 7) {
      this.color.difficulty = "text-yellow-600";
    } else if (this.averages.difficulty >= 6) {
      this.color.difficulty = "text-yellow-500";
    } else if (this.averages.difficulty >= 5) {
      this.color.difficulty = "text-green-400";
    } else if (this.averages.difficulty >= 4) {
      this.color.difficulty = "text-green-500";
    } else if (this.averages.difficulty >= 3) {
      this.color.difficulty = "text-green-600";
    } else if (this.averages.difficulty >= 2) {
      this.color.difficulty = "text-green-700";
    } else {
      this.color.difficulty = "text-green-800";
    }

    if (this.averages.curriculum <= 1) {
      this.color.curriculum = "text-red-500";
    } else if (this.averages.curriculum <= 2) {
      this.color.curriculum = "text-red-400";
    } else if (this.averages.curriculum <= 3) {
      this.color.curriculum = "text-yellow-700";
    } else if (this.averages.curriculum <= 4) {
      this.color.curriculum = "text-yellow-600";
    } else if (this.averages.curriculum <= 5) {
      this.color.curriculum = "text-yellow-500";
    } else if (this.averages.curriculum <= 6) {
      this.color.curriculum = "text-yellow-400";
    } else if (this.averages.curriculum <= 7) {
      this.color.curriculum = "text-green-500";
    } else if (this.averages.curriculum <= 8) {
      this.color.curriculum = "text-green-600";
    } else if (this.averages.curriculum <= 9) {
      this.color.curriculum = "text-green-600";
    } else {
      this.color.curriculum = "text-green-600";
    }

    if (this.averages.workload >= 10) {
      this.color.workload = "text-red-500";
    } else if (this.averages.workload >= 9) {
      this.color.workload = "text-red-400";
    } else if (this.averages.workload >= 8) {
      this.color.workload = "text-yellow-700";
    } else if (this.averages.workload >= 7) {
      this.color.workload = "text-yellow-600";
    } else if (this.averages.workload >= 6) {
      this.color.workload = "text-yellow-500";
    } else if (this.averages.workload >= 5) {
      this.color.workload = "text-yellow-400";
    } else if (this.averages.workload >= 4) {
      this.color.workload = "text-green-500";
    } else if (this.averages.workload >= 3) {
      this.color.workload = "text-green-600";
    } else if (this.averages.workload >= 2) {
      this.color.workload = "text-green-700";
    } else {
      this.color.workload = "text-green-800";
    }

    if (this.averages.grade >= 3.8) {
      this.color.grade = "text-green-800";
    } else if (this.averages.grade >= 3.0) {
      this.color.grade = "text-green-600";
    } else if (this.averages.grade >= 2.6) {
      this.color.grade = "text-yellow-500";
    } else if (this.averages.grade >= 2.2) {
      this.color.grade = "text-yellow-700";
    } else if (this.averages.grade >= 2.0) {
      this.color.grade = "text-red-500";
    } else {
      this.color.grade = "text-red-600";
    }

    let teachers = await this.$http.get("/teachers/all");
    teachers = teachers.data;

    teachers = teachers.filter((teacher) => {
      return teacher.courses.includes(this.course._id);
    });

    for (let i = 0; i < teachers.length; i++) {
      let teacher = teachers[i];
      let average = 0;

      for (let j = 0; j < teacher.ratings.length; j++) {
        let rating = teacher.ratings[j];

        average += rating.instructorRating;

        if (j === teacher.ratings.length - 1) {
          average = average / teacher.ratings.length;
        }
      }

      teachers[i].average = average;

      if (average == 1) {
        teachers[i].color = "text-red-500";
      } else if (average <= 2) {
        teachers[i].color = "text-red-400";
      } else if (average <= 3) {
        teachers[i].color = "text-yellow-700";
      } else if (average <= 4) {
        teachers[i].color = "text-yellow-600";
      } else if (average <= 5) {
        teachers[i].color = "text-yellow-500";
      } else if (average <= 6) {
        teachers[i].color = "text-yellow-400";
      } else if (average <= 7) {
        teachers[i].color = "text-green-500";
      } else if (average <= 8) {
        teachers[i].color = "text-green-600";
      } else if (average <= 9) {
        teachers[i].color = "text-green-600";
      } else {
        teachers[i].color = "text-green-600";
      }
    }

    this.teachers = teachers;
  },
  methods: {
    formatRating(num) {
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
  },
};
</script>

<style>
div::-webkit-scrollbar-thumb {
  background: none;
}

/* Handle on hover */
div::-webkit-scrollbar-thumb:hover {
  background: gray;
}
</style>

<template>
  <div class="lexend text-white bg-slate-900">
    <div class="flex p-4 rounded text-white w-auto mb-2">
      <img :src="school.url" class="w-16 h-16 rounded-full mr-3" />
      <h1 class="text-left text-4xl mr-4 font-bold">
        {{ school.name }} <br />
        <p class="text-sm ml-1 mt-1">
          Get started by clicking on one of the boxes below and selecting
          classes. Experiment with the numbers to the side, and get a feel of
          the courseload with all the courses combined. Share your courseloads
          with other people.
        </p>
      </h1>
    </div>
    <h1 class="text-center text-sm">
      <i class="fa-sharp fa-solid fa-circle-info"></i> Not enough courses in
      ClassBuilder? That's because there isn't enough reviews at your school!
      Review your classes today or refer the site link to a friend!
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 m-2">
      <div
        class="overflow-y-auto mt-6 overflow-x-auto h-[450px] bg-slate-800 p-2"
      >
        <div v-for="(item, index) in selectedCourses" :key="index">
          <span class="ml-2"> {{ index + 1 }} </span>
          <select
            class="p-2 m-2 border-2 bg-slate-900 border-transparent w-11/12 text-xl focus:outline-none"
            v-model="item.name"
            @change="calculate()"
          >
            <option
              class="text-black text-xl bg-white p-2 m-2"
              v-for="course in courses"
              :key="course._id"
            >
              {{ course.name }}
            </option>
          </select>
        </div>
        <button
          class="p-2 border-2 ml-6 bg-slate-700 border-transparent w-11/12 text-xl focus:outline-none"
        >
          <button @click="addOption()" class="w-1/3 bg-slate-900 p-2">+</button>

          <button @click="removeOption()" class="w-1/3 p-2 bg-slate-600">
            -
          </button>
          <button
            v-clipboard:copy="
              'https://www.classrate.org/schools/builder/' +
              school._id +
              this.loadURL
            "
            @click="notifyUser()"
            class="w-1/3 bg-gray-900 text-center p-2"
          >
            <i class="fa-solid fa-share"></i>
          </button>
        </button>
      </div>
      <div class="h-[500px] p-2 m-2 rounded opacity-95">
        <h1 class="text-4xl font-bold bg-slate-800 p-4 mx-4 rounded text-white">
          Courseload Statistics
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 p-2 font-semibold">
          <div class="p-2 m-2 rounded text-white bg-slate-800">
            <div :class="colorCode(3, gpa.toFixed(2))" class="rounded m-2 p-2">
              <h1 class="p-2 m-2 text-2xl text-center">Average 4.0 GPA</h1>
              <span class="font-semibold text-xl"
                ><span class="text-7xl font-semibold text-white">{{
                  gpa.toFixed(3)
                }}</span>
              </span>
            </div>
          </div>
          <div class="p-2 m-2 rounded bg-slate-800">
            <div
              :class="colorCode(2, difficulty.toFixed(1))"
              class="rounded m-2 p-2"
            >
              <h1 class="p-2 m-2 text-2xl text-center text-white">
                Difficulty <span class="font-light"></span>
              </h1>
              <span class="font-medium"
                ><span class="text-7xl font-semibold text-white"
                  >{{ this.difficulty.toFixed(1)
                  }}<span class="text-sm text-white"></span
                ></span>
              </span>
            </div>
          </div>
          <div class="p-2 m-2 rounded text-white bg-slate-800">
            <div
              :class="colorCode(1, engagement.toFixed(2))"
              class="rounded m-2 p-2"
            >
              <h1 class="p-2 m-2 text-2xl text-center">Engagement</h1>
              <span class="font-semibold text-xl"
                ><span class="text-7xl font-semibold text-white"
                  >{{ this.engagement.toFixed(1)
                  }}<span class="text-sm text-white"></span
                ></span>
              </span>
            </div>
          </div>
          <div class="p-2 m-2 rounded text-white bg-slate-800">
            <div
              :class="colorCode(2, workload.toFixed(2))"
              class="rounded m-2 p-2"
            >
              <h1 class="p-2 m-2 text-2xl text-center">Workload</h1>
              <span class="font-semibold text-xl"
                ><span class="text-7xl font-semibold text-white"
                  >{{ this.workload.toFixed(1)
                  }}<span class="text-sm text-white"></span
                ></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      school: "",
      courses: [],
      difficulty: 0,
      workload: 0,
      gpa: 0,
      loadURL: "?courses=",
      engagement: 0,
      selectedCourses: [
        {
          name: "",
        },
        {
          name: "",
        },
        {
          name: "",
        },
        {
          name: "",
        },
        {
          name: "",
        },
        {
          name: "",
        },
      ],
    };
  },
  async mounted() {
    document.title = "ClassBuilder - ClassRate.org";
    this.school = (
      await this.$http.get(`/schools/get/${this.$route.params.id}`)
    ).data;

    this.courses = (await this.$http.get("/courses/all")).data.filter(
      (course) => {
        return course.school_id === this.school._id;
      }
    );

    this.courses.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    if (this.$route.query) {
      let courses = this.$route.query.courses;
      courses = courses.split(",@");
      console.log(courses);
      for (let i = 0; i < courses.length; i++) {
        if (courses.length > this.selectedCourses.length) {
          this.selectedCourses.push({
            name: "",
          });
        }

        this.selectedCourses[i].name = courses[i];
      }

      this.calculate();
    }
  },
  methods: {
    calculate() {
      let length = 0;
      let gpalen = 0;

      let difficultyPoints = 0;
      let engagementPoints = 0;
      let workloadPoints = 0;
      let GPAPoints = 0;
      // let gpaPoints = 0;

      let getCourse = (course) => {
        return this.courses.find((c) => {
          return c.name === course && c.school_id === this.$route.params.id;
        });
      };

      for (let course of this.selectedCourses) {
        if (course.name.trim("") == "") continue;

        let data = getCourse(course.name);

        for (let review of data.ratings) {
          let r = review.data;
          difficultyPoints += r.difficulty;
          engagementPoints += r.curriculum;
          workloadPoints += r.workload;

          // Calculating Cumulative GPA

          length++;
        }

        this.difficulty = difficultyPoints / length;
        this.engagement = engagementPoints / length;
        this.workload = workloadPoints / length;

        for (let review of data.ratings) {
          let r = review.data;

          if (r.grade == "N/A") continue;

          switch (r.grade) {
            case "A+":
            case "A":
            case "A-":
              GPAPoints += 4;
              break;
            case "B+":
            case "B":
            case "B-":
              GPAPoints += 3;
              break;
            case "C+":
            case "C":
            case "C-":
              GPAPoints = 2;
              break;
            case "D":
              GPAPoints = 1;
              break;
            case "F":
              GPAPoints = 0;
              break;
          }

          gpalen++;
        }

        this.gpa = GPAPoints / gpalen;
        console.log(GPAPoints);
        console.log(gpalen);
      }

      let courses = this.selectedCourses
        .filter((course) => course.name != "")
        .map((course) => course.name.split(" ").join("+"));

      this.loadURL = "?courses=" + courses.join(",@");
    },
    addOption() {
      this.selectedCourses.push({
        name: "",
      });
    },
    removeOption() {
      this.selectedCourses.pop();
    },
    notifyUser() {
      window.alert(
        "Courseload link copied to clipboard! Share with your friends!"
      );
    },
    colorCode(inst, num) {
      if (inst === 1) {
        if (num >= 10) {
          return "bg-green-600";
        } else if (num >= 9) {
          return "bg-green-600";
        } else if (num >= 8) {
          return "bg-green-500";
        } else if (num >= 7) {
          return "bg-green-500";
        } else if (num >= 6) {
          return "bg-yellow-500";
        } else if (num >= 5) {
          return "bg-yellow-500";
        } else if (num >= 4) {
          return "bg-yellow-600";
        } else if (num >= 3) {
          return "bg-orange-500";
        } else if (num >= 2) {
          return "bg-red-500";
        } else {
          return "bg-red-500";
        }
      }

      if (inst == 2) {
        if (num <= 1) {
          return "bg-green-600";
        } else if (num <= 2) {
          return "bg-green-600";
        } else if (num <= 3) {
          return "bg-green-500";
        } else if (num <= 4) {
          return "bg-green-500";
        } else if (num <= 5) {
          return "bg-yellow-500";
        } else if (num <= 6) {
          return "bg-yellow-500";
        } else if (num <= 7) {
          return "bg-yellow-600";
        } else if (num <= 8) {
          return "bg-orange-500";
        } else if (num <= 9) {
          return "bg-red-500";
        } else {
          return "bg-red-500";
        }
      }

      if (inst == 3) {
        if (num >= 3.8) {
          return "bg-green-600";
        } else if (num >= 3.5) {
          return "bg-green-500";
        } else if (num >= 3.0) {
          return "bg-green-400";
        } else if (num >= 2.5) {
          return "bg-yellow-200";
        } else if (num >= 2.0) {
          return "bg-orange-400";
        } else if (num >= 1.5) {
          return "bg-red-600";
        } else {
          return "bg-red-800";
        }
      }
    },
  },
};
</script>

<style>
body {
  background: rgb(208, 216, 212);
}
select {
  appearance: none;
}
::-webkit-scrollbar-track {
  background: transparent;
}

div::-webkit-scrollbar-thumb {
  background: rgb(122, 121, 121);
}
</style>

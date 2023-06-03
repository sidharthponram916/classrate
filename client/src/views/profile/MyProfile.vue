<template>
  <div class="p-2 m-auto mt-2 mb-2 md:m-2 bg-white text-left w-11/12 lexend">
    <h1 class="text-left p-2 text-black text-4xl font-bold">User Settings</h1>

    <h1 class="text-left p-2 text-black text-2xl font-semibold">
      Username <br /><span class="text-sm"
        >Unfortunately, we cannot change your username at the moment. Please
        look back for future updates.</span
      >
    </h1>
    <input
      type="text"
      v-model="user.username"
      class="p-2 m-2 text-black border-2 w-3/4 text-2xl"
      disabled
    />
    <h1 class="text-left p-2 text-black text-2xl font-semibold">
      Email
      <span v-if="user.verified" class="text-green-500 text-sm"
        >Verified <i class="fa-solid fa-square-check"></i
      ></span>
      <span v-else class="text-red-500 text-sm"
        >Unverified <i class="fa-sharp fa-solid fa-square-xmark"></i
      ></span>
    </h1>
    <input
      type="text"
      v-model="user.email"
      class="p-2 m-2 text-black border-2 w-3/4 text-2xl"
      disabled
    />
    <br />
    <button
      type="button"
      class="p-2 m-2 text-white bg-green-500 text-xl rounded"
      v-if="!user.verified"
      @click="sendVerificationEmail"
    >
      Verify Email
    </button>
    <h1 class="text-left p-2 text-black text-2xl font-semibold">School</h1>
    <div v-if="user.school != ''">
      <a :href="'/schools/view/' + school._id">
        <div
          class="p-4 w-72 h-72 flex flex-col m-2"
          :style="'background:' + school.color"
        >
          <img :src="school.url" class="rounded-full w-32 h-32 m-auto mb-2" />
          <div class="mt-auto">
            <div class="text-white text-sm md:text-2xl text-left">
              {{ school.name }}
            </div>
            <div class="text-white text-sm text-left">
              {{ school.address }} | {{ school.city }} {{ school.state }}
            </div>
          </div>
        </div>
      </a>
    </div>
    <span class="p-2" v-if="user.school != ''"
      >Not your school? Click the dropdown below and type your school.</span
    >
    <!-- <select
      class="p-2 m-2 text-black border-2 w-3/4 text-2xl"
      v-model="user.school"
    >
      <option
        :style="'color:' + school.color"
        class="bg-white"
        v-for="school in schools"
        :key="school._id"
        :value="school"
      >
        <div class="flex p-3 cursor-pointer border">
          <h1 class="text-left mr-2">
            <span> {{ school.name }} </span> - <br />
            <h1 class="mr-2 text-gray-400">
              {{ school.city }}, {{ school.state }}
            </h1>
          </h1>
        </div>
      </option>
    </select> -->
    <SchoolSelect @onSchoolSelect="selectSchool" />
    <h1 class="text-left p-2 text-black text-2xl font-semibold">
      Password <br />
      <span class="text-sm"
        >Click on Change Password to recieve a email with a link to change your
        password.</span
      >
    </h1>
    <input
      type="password"
      v-model="user.password"
      class="p-2 m-2 text-black border-2 w-3/4 text-2xl"
      placeholder="Enter a school"
      disabled
    />
    <button
      class="p-2 m-2 bg-green-500 text-white text-2xl"
      @click="sendPasswordResetEmail()"
    >
      Change Password
    </button>
    <br />
    <button
      @click="update()"
      type="button"
      class="p-2 m-2 bg-green-500 text-white text-2xl rounded"
    >
      Update
    </button>

    <h1 class="text-left p-2 text-black text-3xl font-semibold">
      Manage Reviews
    </h1>

    <div
      class="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 overflow-x-auto text-black"
    >
      <div
        class="p-2 m-2 border-2 rounded"
        v-for="review in reviews"
        :key="review._id"
      >
        <h1 class="text-xl font-semibold">{{ review.course }}</h1>
        <h1 class="text-sm">{{ review.school }}</h1>
        <button class="my-2 bg-blue-600 p-2 rounded text-white mr-2">
          <a :href="'/reviews/' + review._id"> View </a>
        </button>
        <button
          @click="deleteReview(review._id)"
          class="my-2 bg-red-600 p-2 rounded text-white"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SchoolSelect from "../../components/SchoolSelect.vue";
export default {
  components: {
    SchoolSelect,
  },
  data() {
    return {
      user: {},
      reviews: {},
      schools: {},
      school: {},
    };
  },
  async beforeCreate() {
    let { data } = await this.$http.get("/users/current");
    this.user = data;

    let reviews = await this.$http.get("/reviews/all");

    reviews = reviews.data.filter((review) => {
      return review.username === data.username;
    });

    let schools = await this.$http.get("/schools/all");
    this.schools = schools.data;

    if (this.user.school != "") {
      this.school = this.schools.find((school) => {
        return school._id === this.user.school;
      });
    }

    this.reviews = reviews;
  },
  methods: {
    async update() {
      try {
        await this.$http.put(`/users/update`, this.user);
        this.$store.commit("userData", this.user);
        location.reload();
      } catch (e) {
        alert("An error has occured when updating!");
        console.log(e.message);
      }
    },
    async selectSchool(school) {
      this.user.school = school._id;
    },
    async deleteReview(id) {
      try {
        let { data } = await this.$http.delete(`/reviews/delete/${id}`);
        let review = data;

        let courses = await this.$http.get(`/courses/all`);

        let course = courses.data.find((course) => {
          return (
            course.name === review.course &&
            course.school_id === review.school_id
          );
        });

        let rating = course.ratings.find((rating) => {
          return rating.data._id === review._id;
        });

        course.ratings.splice(course.ratings.indexOf(rating), 1);

        await this.$http.put(`/courses/update/${course._id}`, course);

        let teachers = await this.$http.get("/teachers/all");

        let teacher = teachers.data.find((teacher) => {
          return teacher.name === review.instructor;
        });

        let teacherRating = teacher.ratings.find((r) => {
          return r._id === review._id;
        });

        teacher.ratings.splice(teacher.ratings.indexOf(teacherRating), 1);

        await this.$http.put(`/teachers/update/${teacher._id}`, teacher);

        location.reload();
      } catch (e) {
        alert("An error has occured when deleting!");
        console.log(e.message);
      }
    },
    async sendVerificationEmail() {
      alert("Verification email sent. Please check your inbox.");

      await this.$http.post("/users/email", {
        email: this.user.email,
        username: this.user.username,
      });
    },

    async sendPasswordResetEmail() {
      alert("Password reset email has been sent to your inbox.");

      await this.$http.post("/users/email_preset", {
        email: this.user.email,
        username: this.user.username,
      });
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

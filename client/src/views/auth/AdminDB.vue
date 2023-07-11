<template>
  <div class="p-2 m-2 text-4xl lexend font-bold text-left">
    <h1 class="px-2">Admin Dashboard</h1>
    <div class="p-2 m-2 bg-white text-2xl w-1/4">
      <p class="underline">Directory</p>
      <p class="text-xl mt-2 text-blue-900">Review Management</p>
      <a href="#course" class="text-xl mt-2 text-blue-900">Course Management</a>
      <br />
      <a href="#school" class="text-xl mt-2 text-blue-900"
        >Schools Management</a
      >
    </div>
    <h1 class="text-2xl p-2">Review Management</h1>
    <div class="flex flex-wrap">
      <div v-for="review in reviews" :key="review._id">
        <div class="p-2 m-2 bg-gray-100 border-2 rounded">
          <h1 class="text-xl">{{ review.course }}</h1>
          <h1 class="text-sm font-light">{{ review.school }}</h1>
          <h1 class="text-sm">
            RID: <span class="font-light">{{ review._id }}</span>
          </h1>
          <button class="p-2 text-sm bg-gray-200 text-black rounded mr-2">
            <a :href="'/reviews/view/' + review._id"> View </a>
          </button>
          <button
            @click="remove('review', review._id)"
            class="p-2 text-sm bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
    <h1 id="course" class="text-2xl p-2">Course Management</h1>
    <div class="flex flex-wrap">
      <div v-for="course in courses" :key="course._id">
        <div class="p-2 m-2 bg-gray-100 border-2 rounded">
          <h1 class="text-xl">{{ course.name }}</h1>
          <h1 class="text-sm font-light">SID: {{ course.school_id }}</h1>
          <h1 class="text-sm">
            CID: <span class="font-light">{{ course._id }}</span>
          </h1>
          <button class="p-2 text-sm bg-gray-200 text-black rounded mr-2">
            <a :href="'/courses/view/' + course._id"> View </a>
          </button>
          <button
            @click="remove('course', course._id)"
            class="p-2 text-sm bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
    <h1 id="school" class="text-2xl p-2">School Management</h1>
    <div class="flex flex-wrap">
      <div v-for="school in schools" :key="school._id">
        <div class="p-2 m-2 bg-gray-100 border-2 rounded">
          <h1 class="text-xl">{{ school.name }}</h1>
          <h1 class="text-sm font-light">
            {{ school.city }}, {{ school.state }}
          </h1>

          <h1 class="text-sm font-light">SID: {{ school._id }}</h1>
          <button class="p-2 text-sm bg-gray-200 text-black rounded mr-2">
            <a :href="'/schools/view/' + school._id"> View </a>
          </button>
          <button
            @click="remove('school', school._id)"
            class="p-2 text-sm bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
      courses: [],
      schools: [],
    };
  },
  async beforeCreate() {
    let admins = (await this.$http.get("/admins/all")).data;

    let found = admins.find((admin) => {
      return admin.user === this.$store.state.userData._id;
    });

    if (!found) return location.replace("/");

    this.reviews = (await this.$http.get("/reviews/all")).data;
    this.courses = (await this.$http.get("/courses/all")).data;
    this.schools = (await this.$http.get("/schools/all")).data;
  },
  methods: {
    async remove(item, id) {
      try {
        if (!confirm("Are you sure you want to remove this item?")) return;
        if (item === "review") {
          await this.$http.delete(`/reviews/delete/${id}`);
        } else if (item === "course") {
          await this.$http.delete(`/courses/delete/${id}`);
        } else {
          await this.$http.delete(`/schools/delete/${id}`);
        }

        location.reload();
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style>
body {
  background: rgb(221, 219, 219);
}
</style>

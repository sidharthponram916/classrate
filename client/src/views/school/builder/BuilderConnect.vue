<template>
  <div class="text-white lexend">
    <h1 class="font-bold text-center mt-32 text-7xl m-auto">ClassBuilder</h1>
    <p class="font-bold text-2xl">
      By Class<span class="text-yellow-300">Rate</span
      ><span class="text-xl">.org</span>
    </p>

    <div
      class="text-black text-left bg-slate-700 p-2 m-2 rounded w-1/2 mt-10 mx-auto"
    >
      <SchoolSelect @onSchoolSelect="selectSchool" />
    </div>
    <button
      class="bg-slate-950 text-white p-2 m-2 text-2xl font-bold rounded shadow mt-5"
    >
      <a :href="'/schools/builder/' + school_id"> Continue </a>
    </button>
  </div>
</template>

<script>
import SchoolSelect from "../../../components/SchoolSelect.vue";
export default {
  components: {
    SchoolSelect,
  },
  data() {
    return {
      school_id: "",
    };
  },
  async mounted() {
    console.log(this.$store.state.userData);
  },
  methods: {
    selectSchool(school) {
      this.school_id = school._id;
    },
  },
};
</script>

<style>
body {
  background: #0f172a;
}
input {
  width: 100px;
}
</style>

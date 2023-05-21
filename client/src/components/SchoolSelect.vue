<template>
  <div>
    <input
      type="text"
      v-model="search"
      v-show="viewSB"
      class="p-2 mt-2 mb-2 w-11/12 text-xl bg-gray-200 text-gray-800 border-b-2 border-white focus:outline-none"
      placeholder="Search for your school..."
      @keyup="searchSchools"
    />
    <div v-if="viewSB">
      <div v-for="school in results" :key="school._id">
        <div
          @click="selectSchool(school._id)"
          class="cursor-pointer flex p-2 w-11/12 text-left bg-gray-100 mb-1 text-black border-2"
        >
          <img :src="school.url" class="rounded-full mr-2 w-16 h-16" />
          <div class="mr-2">
            <h1 class="text-2xl font-bold" :style="'color:' + school.color">
              {{ school.name }}
            </h1>
            <p class="text-lg">{{ school.city }} {{ school.state }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      @click="unselectSchool()"
      class="flex p-2 bg-gray-100 w-11/12 mb-2 mt-2 border-2 cursor-pointer"
      v-else
    >
      <img :src="selected.url" class="rounded-full mr-2 w-16 h-16" />
      <div class="mr-2">
        <h1 class="text-2xl font-bold" :style="'color:' + selected.color">
          {{ selected.name }}
        </h1>
        <p class="text-lg">{{ selected.city }} {{ selected.state }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchoolSelect",
  props: ["value"],
  data() {
    return {
      schools: [],
      search: "",
      results: [],
      selected: "",
      viewSB: true,
    };
  },
  async created() {
    this.schools = (await this.$http.get("/schools/all")).data.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    if (this.$store.state.userData.school.trim(" ") != "") {
      this.selected = this.schools.find((school) => {
        return school._id === this.$store.state.userData.school;
      });

      this.viewSB = false;
    }
  },
  methods: {
    searchSchools() {
      let results = this.schools.filter((school) => {
        return school.name
          .toLowerCase()
          .includes(this.search.toLowerCase().trim(" "));
      });

      this.results = results.splice(0, 3);
    },
    selectSchool(id) {
      let value = this.schools.find((school) => {
        return school._id === id;
      });
      
      this.viewSB = false;

      this.selected = value;

      this.$emit("onSchoolSelect", value);
    },
    unselectSchool() {
      this.value = " ";
      this.viewSB = true;
      this.search = "";
    },
  },
};
</script>

<style></style>

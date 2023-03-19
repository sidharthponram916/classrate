<template>
  <div class="p-2">
    <FlashMessage></FlashMessage>
    <div class="text-left m-auto bg-indigo-900 text-white w-5/6">
      <h1 class="text-left m-2 p-2 text-4xl">School Request Form</h1>
      <p class="text-md m-2 p-2">
        Fill out the form below so that you can successfully add a school! Make
        sure to answer the questions correctly.
      </p>
    </div>
    <div class="text-left m-auto bg-white w-5/6 py-2">
      <form class="m-2 p-2 text-xl">
        <label class="text-left text-2xl"
          >What is the official name of the school?*</label
        >
        <input
          type="text"
          placeholder="School Name"
          :class="style.input"
          v-model="data.name"
        />
        <br />
        <label class="text-left text-2xl"
          >What state is this school located?*</label
        >
        <select :class="style.input" v-model="data.state">
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <br />
        <label class="text-left text-2xl"
          >What city is this school located in?*</label
        >
        <input
          type="text"
          placeholder="School Name"
          :class="style.input"
          v-model="data.city"
        />
        <br />
        <label class="text-left text-2xl"
          >What is the current address of the school?*</label
        >
        <input
          type="text"
          placeholder="Current Address"
          v-model="data.address"
          :class="style.input"
        />
        <br />
        <label class="text-left text-2xl"
          >What is the school's logo?*
          <span class="text-sm"> (Add an image url) </span></label
        >
        <input
          type="url"
          placeholder="School Logo URL"
          v-model="data.url"
          :class="style.input"
        />
        <br />
        <label class="text-left text-2xl"
          >What is the school's website url?
        </label>
        <input
          type="url"
          placeholder="Current Website URL"
          v-model="data.website"
          :class="style.input"
        />
        <br />
        <label class="text-left text-2xl"
          >What is the school's primary school color?</label
        >
        <input
          type="color"
          placeholder="School Color"
          v-model="data.color"
          class="mt-2 mb-2 w-11/12 text-xl bg-gray-200 rounded focus:outline-none"
        />
        <br />
        <label class="text-left text-2xl"
          >List some common aliases for this school.
          <span class="text-sm"
            >(Example: Roach High School => RHS or Roachers)</span
          ></label
        >
        <div v-if="data.search_terms" class="my-2">
          <span
            class=""
            v-for="term in data.search_terms.split(', ')"
            :key="term"
          >
            <span class="bg-gray-300 text-sm mr-2 p-1 rounded">
              {{ term }}
            </span>
          </span>
        </div>
        <input
          type="text"
          placeholder="Search Terms.."
          v-model="data.search_terms"
          :class="style.input"
        />
        <br />
        <button
          @click="submitInfo()"
          type="button"
          class="mt-3 text-white rounded p-2 bg-blue-500"
          :disabled="disableInput"
        >
          Request School
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        input:
          "p-2 mt-2 mb-2 w-11/12 text-xl bg-gray-200 rounded focus:outline-none",
      },
      data: {
        name: "",
        city: "",
        state: "",
        address: "",
        logo: "",
        district: "",
        search_terms: "",
        color: "#000000",
      },
    };
  },
  computed: {
    disableInput() {
      if (
        this.data.name.trim("") === "" ||
        this.data.city.trim("") == "" ||
        this.data.state.trim("") == "" ||
        this.data.address.trim("") == ""
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async submitInfo() {
      let school = await this.$http.post("/schools/create", {
        name: this.data.name,
        state: this.data.state,
        city: this.data.city,
        address: this.data.address,
        district: this.data.district,
        search_terms: this.data.search_terms,
        url: this.data.url,
        website: this.data.website,
        color: this.data.color,
      });
      location.replace(`/schools/view/${school.data._id}`);

      this.flashMessage.success({
        title: "School Added Successfully!",
        message: "Thank you for contributing to Classrate!",
      });
    },
  },
};
</script>

<style></style>

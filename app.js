const app = Vue.createApp({
  data() {
    return {
      firstName: "David",
      lastName: "C",
      email: "davidccbp20@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/women/10.jpg",
    };
  },
  methods: {
    async getUser() {
      // Fetch the api
      const res = await fetch("https://randomuser.me/api");

      //   De-construct the json that we will get from the api
      const { results } = await res.json();

      //   Show the JSON object, learn how the object is structured
      console.log(results);

      // Set the data.variables to the data from results that was deconstructed.
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");

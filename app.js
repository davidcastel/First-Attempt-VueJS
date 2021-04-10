const app = Vue.createApp({
  data() {
    return {
      firstName: "Johnny",
      lastName: "Hotstuff",
      email: "johnnyHS24@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
      setup: "",
      punchline: "",
    };
  },
  methods: {
    async getUser() {
      // Fetch the api
      const randomUser = await fetch("https://randomuser.me/api");

      //   De-construct the json that we will get from the api
      const { results } = await randomUser.json();

      //   Show the JSON object, learn how the object is structured
      console.log(results);

      // Set the data.variables to the data from results that was deconstructed.
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
    async getJoke() {
      const randomJoke = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );

      const Joke = await randomJoke.json();

      console.log(Joke);

      this.setup = Joke.setup;
      this.punchline = Joke.punchline;
    },
  },
});

app.mount("#app");

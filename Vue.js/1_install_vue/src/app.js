const myNameApp = {
  data() {
    return {
      name: "",
      lastName: "",
      age: 26,
      job: "Developer",
      input_name: ""
    }
  },
  methods: {
    submitForm(e) {

      e.preventDefault();

      console.log(this.input_name, this.input_name2);

      this.name = this.input_name;
      
    }
  }
}

Vue.createApp(myNameApp).mount("#app");
const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal(){
      console.log(this.enteredValue)
      this.goals.push(this.enteredValue);
      this.enteredValue = ''
      console.log(this.goals)
    }
  }
});

app.mount('#user-goals');

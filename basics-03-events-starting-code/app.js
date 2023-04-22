const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      completeName: ''
    };
  },
  methods: {
    add(num){
      this.counter = this.counter + num
    },
    reduce(num){
      this.counter = this.counter - num
    },
    setName(event, message){
      this.name = message + event.target.value
    },
    showCompleteName(){
      this.completeName = this.name
    }
  }
});

app.mount('#events');

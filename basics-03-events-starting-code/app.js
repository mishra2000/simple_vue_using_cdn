const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
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
    }
  },
  watch: {
    counter(current_value){
      if(current_value > 50)
      {
        this.counter = 0;
      }
    }
  },
  computed: {
    showCompleteName(){
      if(this.name.length==12 || this.name.length == 0)
        return ''
      return this.name + " Mishra"
    }
  }
});

app.mount('#events');

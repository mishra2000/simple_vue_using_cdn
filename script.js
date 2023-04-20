Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        },
        removeLastGoal(){
            this.goals.pop();
        },
        removeTopGoal(){
            this.goals.shift();
        }
    }
}).mount("#sample_app")
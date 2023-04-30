app = Vue.createApp({
    data(){
        return {
            tasks: [],
            inputTask: '',
            showList: true,
            btnText: "Hide List"
        }
    },
    watch: {
        showList(current_value){
            if(current_value){
                this.btnText = "Hide List"
            }else{
                this.btnText = "Show List"
            }
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.inputTask);
            this.inputTask = '';
            console.log(this.tasks)
        },
        listVisibility(){
            this.showList = !this.showList
        }
    }
})

app.mount("#assignment")
app = Vue.createApp({
    data(){
        return {
            tasks: [],
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
            this.tasks.push(this.$refs.userText.value);
            this.$refs.userText.value = '';
        },
        listVisibility(){
            this.showList = !this.showList
        }
    }
})

app.mount("#assignment")
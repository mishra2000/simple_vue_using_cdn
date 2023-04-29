app = Vue.createApp({
    data(){
        return {
            cssClass: "",
            user1active: false,
            user2active: false,
            visibility: true,
            background: ""
        }
    },
    watch: {
        cssClass(current_value){
            console.log(current_value)
            if(current_value === "user1")
                this.user1active = !this.user1active
            else if(current_value === "user2")
                this.user2active = !this.user2active
            else{
                this.user1active = false
                this.user2active = false
            }  
        }
    },
    methods: {
        setVisibility(){
            console.log("called")
            this.visibility = !this.visibility
        }
    }
}).mount("#assignment")
Vue.createApp({
    data() {
        return {
            redirect_link: "https://www.google.com"
        }
    },
    methods: {
        randomMessage(){
            rand = Math.random()
            console.log(rand)
            if (rand < 0.33)
                return "This is a random message"
            else if(rand < 0.66)
                return "This is second random message"
            else
                return "This is third random message"    
        }
    }
}).mount("#user-goal");
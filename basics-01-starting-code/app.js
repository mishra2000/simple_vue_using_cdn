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
                return "<h3>This is a random message</h3>"
            else if(rand < 0.66)
                return "<h3>This is second random message</h3>"
            else
                return "<h3>This is third random message</h3>"    
        }
    }
}).mount("#user-goal");
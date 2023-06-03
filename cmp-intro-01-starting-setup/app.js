app = Vue.createApp({
    data(){
        return {
            friends: [
                {
                    id: 0,
                    name: "Utkarsh Mishra",
                    phone: "9179069161",
                    email: "thisismy#email.com",
                    hidden: false,
                },
                {
                    id: 1,
                    name: "Amrita Mishra",
                    phone: "9879069161",
                    email: "thisisnotmy#email.com",
                    hidden: false,
                }
            ]
        }
    },
    methods: {
        toggleHide(id){
            friend = this.friends[id]
            friend.hidden = !friend.hidden
        }
    }

})

app.mount("#app")
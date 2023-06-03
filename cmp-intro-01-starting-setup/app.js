app = Vue.createApp()

app.component('friend-contact',{
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleHide">Show Details</button>
        <ul v-if="friend.hidden">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
    data(){
        return {
            friend: {
                id: 0,
                name: "Utkarsh Mishra",
                phone: "9179069161",
                email: "thisismy#email.com",
                hidden: false,
            }
        }
    },
    methods: {
        toggleHide(){
            this.friend.hidden = !this.friend.hidden
        }
    }

})

app.mount("#app")


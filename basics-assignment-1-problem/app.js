app = Vue.createApp({
    data: function(){
        return {
            name: "Utkarsh Mishra",
            age: "My age is 24",
            age_in_five_years: "My age in 5 years will be 29" ,
            max_random: 99,
            min_random: 1,
            image_url: "https://picsum.photos/200/200"
        }
    },
    methods: {
        populate_input_field(){
            return this.image_url
        }
    }
}).mount("#assignment")
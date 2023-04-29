app = Vue.createApp({
    data: function(){
        return {
            sum: 0,
            result: "Add values to 37"
        }
    },
    watch: {
        sum(current_value){
            if(current_value === 0)
                return

            if(current_value > 37){
                this.result = "Too Much"
            }
            else if(current_value < 37){
                this.result = "Not there yet"
            }
            else{
                this.result = "You won"
                const that = this
                window.setTimeout(function(){
                    that.sum = 0
                    that.result = "Add values to 37"
                }, 1000);
            }
        }
    },
    methods: {
        addValue(event, value){
            this.sum = this.sum + value;
        }
    }
}).mount("#assignment")
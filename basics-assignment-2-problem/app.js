app = Vue.createApp({
    data: function(){
        return {
            liveInput: '',
            storedInput: '',
            completeInput: ''
        }
    },
    methods: {
        showAlert(){
            alert("Button is clicked")
        },
        printLiveInput(event){
            this.liveInput = event.target.value
        },
        storeInput(event){
            this.storedInput = event.target.value
        },
        showInput(event){
            this.completeInput = this.storedInput
        }
    }
}).mount("#assignment")
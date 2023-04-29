app = Vue.createApp({
    data(){
        return {
            boxAselected: false,
            boxBselected: false,
            boxCselected: false
        };
    },
    methods: {
        selectBox(box){
            if(box === 'A')
            {
                this.boxAselected = !this.boxAselected
            }
            else if(box === 'B')
            {
                this.boxBselected = !this.boxBselected
            }
            else if(box === 'C')
            {
                this.boxCselected = !this.boxCselected
            }
            
        }
    }
}).mount("#styling")
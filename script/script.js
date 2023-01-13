
const app = Vue.createApp({
    data(){
        return{
            contacts,
            currentIndex : 0
        }
    },
    computed:{
        showMe(){
            return this.contacts[this.currentIndex]
        },
        chatMessages(){
            return this.showMe.messages;
        }
    },
    methods:{
        setCurrentIndex(i){
            this.currentIndex = i
        }
    }
})

app.mount("#root");
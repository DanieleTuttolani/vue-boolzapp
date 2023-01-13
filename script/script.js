
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
    }
})

app.mount("#root");
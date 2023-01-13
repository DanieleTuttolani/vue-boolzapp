
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
        },
        createNewObj(){
            let newObj = {
                text : this.newText ,
                status : "sent"
            }
            return newObj;
        } 
    },
    methods:{
        setCurrentIndex(i){
            this.currentIndex = i
        },
        addMessage(){
            this.chatMessages.push(this.createNewObj);
            this.newText = ""
        }
    }
})

app.mount("#root");
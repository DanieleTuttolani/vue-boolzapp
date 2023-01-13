
const app = Vue.createApp({
    data(){
        return{
            contacts,
            currentIndex : 0,
            newText: ""
        }
    },
    computed:{
        showMe(){
            return this.contacts[this.currentIndex]
        },
        chatMessages(){
            return this.showMe.messages;
        },
        createNewSend(){
            let newObj = {
                text : this.newText ,
                status : "sent"
            }
            return newObj;
        } ,
        createNewAnswere(){
            let newObj = {
                text : "ok my man" ,
                status : "received"
            }
            return newObj;
        }
    },
    methods:{
        setCurrentIndex(i){
            this.currentIndex = i
        },
        addMessage(){
            this.chatMessages.push(this.createNewSend);
            this.newText = ""

        }
    }
})

app.mount("#root");
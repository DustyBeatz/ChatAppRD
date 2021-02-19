import ChatMessage from "./components/TheMessageComponent.js";

(() =>{
    console.log("Fired");
    //load the socket library
    const socket = io();

    //messenger service event handling -> incoming from the manager

    function setUserId(sID, message) {
        //incoming connected event with with data
        // debugger;

        vm.socketID = sID;
    }

    function appendMessage(message) {

        // debugger;
        vm.messages.push(message); 
    }

    const vm = new Vue({
       data: { 
        messages: [],
        nickname: '',
        username: '',
        socketID: '',
        message: ''
        },

        created: function() {
            console.log("it's live");
        },

        methods: {

            dispatchMessage() {
                // debugger;
                socket.emit('chatmessage', {content: this.message, name: this.nickname || "Anonymous"});
                
                this.message = "";
            
            }


        },

        components: {
            newmessage: ChatMessage
        },

    }).$mount('#app');

    socket.addEventListener("connected", setUserId);
    socket.addEventListener('message', appendMessage);
})();
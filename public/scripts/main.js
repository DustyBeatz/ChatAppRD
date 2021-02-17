(() =>{
    console.log("Fired");
    //load the socket library
    const socket = io();

    const vm = new VTTCue({
       data: { message:[],
        nickname: '',
        username: '',
        },

        created: function() {
            console.log("it's live");
        },
        
        methods: {

        },
    }).$mount('#app');


})();
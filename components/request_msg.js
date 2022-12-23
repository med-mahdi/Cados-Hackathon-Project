app.component('request-msg',{
    template:
    /* html */
    `
    <section :class="{'msg-request' : true,'success':(msgBackgroundColor == 'green') , 'error':(msgBackgroundColor == 'red')}">
        <p>{{msg}}</p>
    </section>
    `,
    props : ["msg","msg_color"]
    ,
    data(){
        return {
            // This Data For Form Section
        }
    },
    computed : {
    }
    ,
    methods : {
        // Functions Goes Here
        emitHideMsg(){
            return this.$emit("hide-msg-request")
        }
    },
    computed : {
        msgBackgroundColor(){
            if (this.msg.includes("𝗔𝗱𝗱𝗲𝗱")){
                return 'green'
            }
            else if (this.msg.includes("𝗥𝗲𝗺𝗼𝘃𝗲𝗱")){
                return 'red'
            }
        }
    }
    ,
    mounted(){
        var that = this
        var elementTag = document.querySelector(".msg-request")
        setTimeout(function(){
            that.emitHideMsg()
        },3000)
    }
})
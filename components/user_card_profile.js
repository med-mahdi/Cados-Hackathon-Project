
app.component('user-card-profile',{
    template:
    /* html */
    `
    <div class="card_user_profile">
        <div class="card_user_profile_container">
                <div class="img_user">
                    <img :src="user_image" alt="">
                </div>
                
                <h3 v-if="user_name.length > 19">{{user_name.substring(0,19)}}...</h3>
                <h3 v-else>{{user_name}}</h3>

                <p v-if="bio.length > 90">{{bio.substring(0,90)}}...</p>
                <p v-else>{{bio}}</p>
                <button :class="{ follow_btn: true, 'followed_true': followed }" @click="followUser">
                    {{followText}}
                </button>
        </div>
    </div>
    `,
    props : ["user_name","user_image","bio"]
    ,
    data(){
        return {
            // This Data For Form Section
                followed : false,
        }
    },
    computed : {
        followText(){
            if (this.followed == true){
                return "Remove"
            }
            return "Follow"
        }
    }
    ,
    methods : {
        // Functions Goes Here
        followUser(){
            this.followed = !this.followed
            if (this.followed == true){
                var msg_text_content = `"${this.user_name}" 𝗔𝗱𝗱𝗲𝗱 𝘁𝗼 𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗱 𝗟𝗶𝘀𝘁`
                return this.$emit("followed-msg",msg_text_content,"added")
            }
            var msg_text_content = `"${this.user_name}" 𝗥𝗲𝗺𝗼𝘃𝗲𝗱 𝗙𝗿𝗼𝗺 𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗱 𝗟𝗶𝘀𝘁`
            return this.$emit("followed-msg",msg_text_content,"removed")
        }
    }
})
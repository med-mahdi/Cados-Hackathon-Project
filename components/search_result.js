
app.component('search-result-section',{
    template:
    /* html */
    `
    <div class="search-result-section">
        <div class="container">
            <div class="search-result-heading">
                <h3>Search results {{request_loading}}</h3>
                <p v-if="users_number"><b>{{users_number}}</b> Adovates developers</p>
                <p v-else>--- --- ---</p>
            </div>

            <div class="search-result-content" v-if="request_loading == true">
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
                <user-card-no-data></user-card-no-data>
            </div>

            <div class="search-result-content" v-else>
                <user-card-profile v-for="usr in data" @followed-msg="emitFollow" :user_name="usr.name" :user_image="usr.profile_pic" :bio="usr.bio"></user-card-profile>
            </div>
        </div>
    </div>
    `,
    props : ["data","request_loading","users_number"]
    ,
    data(){
        return {
            // This Data For Form Section
        }
    },
    methods : {
        // Functions Goes Here
        emitFollow(msg,follow_state){
            this.$emit("show-follow-msg",msg,follow_state)
        }
    },
    mounted(){
        // console.log(this.data)
    }
})
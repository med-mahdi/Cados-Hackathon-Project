
app.component('search-section',{
    template:
    /* html */
    `
    <div class="heropage-section">
        <h1>All Advocates Developer <br> In one place</h1>
        <img src="">
        <p>Search now and Get connection with other advocate developers</p>
        <div class="input-search-box">
            <div class="container">
                <div class="input-box-text">
                    <input type="text" name="" id="" placeholder="Search by name of the user" v-model="search_pattren">
                </div>
                <button id="search-btn" @click="showMsgRequest"><img src="./icon/search_icon.png" alt="">search</button>
            </div>
        </div>
    </div>
    `,
    data(){
        return {
            // This Data For Form Section
            search_pattren : "",
        }
    },
    methods : {
        // Functions Goes Here
        showMsgRequest(){
            this.$emit("show-msg-request")
        }
    }
})
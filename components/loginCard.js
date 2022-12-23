
app.component('login-card',{
    template:
    /* html */
    `
    <message-request v-show="show" :message="message"></message-request>
    <div class="login-card">
                    <div class="container">
                        <div class="heading-card">
                            <h1>Welcome Back</h1>
                            <p>Enter your username and password to login</p>
                        </div>
                        <form action="#"  @submit="submitForm" method="post">
                            <label for="">User name
                                <div class="input-box">
                                    <input type="text" v-model="username" required placeholder="Enter your username" maxlength="20">
                                </div>
                            </label>
                            <label for="">Password
                                <div class="input-box">
                                    <span v-if="!showPassword">
                                        <input type="password" @keyup="disableBtn" v-model="password" required placeholder="Enter your password">
                                        <i style="font-size:20px;color: #333333;" @click="showHiddePassword" class="fa-regular fa-eye"></i>
                                    </span>
                                    <span v-if="showPassword">
                                        <input type="text"  @keyup="disableBtn" v-model="password" required placeholder="Enter your password">
                                        <i style="font-size:20px;color: #333333;" class="fa-regular fa-eye-slash" @click="showHiddePassword"></i>
                                    </span>
                                </div>
                            </label>
                            <input type="submit" value="Sign In" id="btn-submit">
                            <p class="registerNotify">Don't have an account yet? <span id="register-link"><a href="./registerPage.html">Register Now</a></span></p>
                        </form>

                    </div>
                </div>
    `,
    props : ["csrfval"]
    ,
    data(){
        return {
            // This Data For Form Section
            showPassword: false,
            username : "",
            password : "",
            csrfValue : this.csrfval,
            btn_disabled : true ,

            show : false,
            message : "Login request unsuccessfull , Doesn’t link with any backend yet",
        }
    },
    methods : {
        disableBtn(){
            var password_length = this.password.length
            if (password_length >= 1){
                this.btn_disabled = false
            }
            else{
                this.btn_disabled = true
            }
        }
        ,
        showHiddePassword(){
            this.showPassword = !this.showPassword
        },
        submitForm(e){
            e.preventDefault()
            var that = this
            that.show = true
            setTimeout(function(){
                that.show = false
            },3000)
        }
    }
})
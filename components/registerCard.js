
app.component('register-card',{
    template:
    /* html */
    `
    <message-request v-show="show" :message="message"></message-request>
    <div class="register-card">
                    <div class="container">
                        <div class="heading-card">
                            <h1>Register Now</h1>
                            <p>Enter your informations to get start with us</p>
                        </div>
                        <form action="#"  @submit="submitForm" method="post">
                            <label for="">First name
                                <div class="input-box">
                                    <input type="text" v-model="firstname" required placeholder="Enter your username" maxlength="20">
                                </div>
                            </label>
                            <label for="">Last name
                                <div class="input-box">
                                    <input type="text" v-model="lastname" required placeholder="Enter your username" maxlength="20">
                                </div>
                            </label>
                            <label for="">Email
                                <div class="input-box">
                                    <input type="text" v-model="email" required placeholder="Enter your username">
                                </div>
                            </label>
                            <label for="">Password
                                <div class="input-box">
                                        <input type="password" v-model="password" required placeholder="Enter your password">
                                </div>
                            </label>
                            <label for="">Confirm password
                                <div class="input-box">
                                        <input type="password" v-model="passwordConf" required placeholder="Enter your password confirmation">
                                </div>
                            </label>
                            
                            <input type="submit" value="Sign In" id="btn-submit">
                            <p class="registerNotify">Already Have an account <span id="register-link"><a href="./loginpage.html">Login Now</a></span></p>
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
            firstname : "",
            lastname : "",
            email : "",
            password : "",
            passwordConf : "",
            csrfValue : this.csrfval,
            btn_disabled : true ,

            show : false,
            message : "Register request unsuccessfull , Doesn’t link with any backend yet",
        }
    },
    methods : {
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
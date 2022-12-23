app.component('navbar-sec',{
    template:
    /* html */
    `
    <header class="navBar">
            <div class="container">
                <a href="./advocatesPage.html">
                    <div id="logo">
                        <h1>Cados.dev</h1>
                    </div>
                </a>

                <nav>
                    <div class="offic-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </div>

                    <ul class="navLinks" v-if="!username">
                        <a href="./loginpage.html"><button id="btn-add-item-sec">Login</button></a>
                        <a href="./registerPage.html"><button id="btn-add-item-pri">Get Started Now</button></a>
                    </ul>
                </nav>

                <span class="material-symbols-outlined" @click="openResponsiveNav">
                    widgets
                </span>

                <span class="material-symbols-outlined" id="closingMenu" @click="openResponsiveNav">close</span>
            </div>
            <div class="progress" v-if="progress_bar === 'true'">
                <div class="progress-bar"></div>
            </div>
    </header>
    `,
    props : ["background","progress_bar"]
    ,
    data() {
        return {
            // 
            toggle_dropDown : false,
            showResNav : false,
            username : "",
            img : ""
        }
    },
    methods: {
        getWidth() {
            if (self.innerWidth) {
              return self.innerWidth;
            }
            if (document.documentElement && document.documentElement.clientWidth) {
              return document.documentElement.clientWidth;
            }
            if (document.body) {
              return document.body.clientWidth;
            }
        }
        ,
        getData(){
            fetch("/home/api/personalInfoApi")
            .then(res=>res.json())
            .then((res)=>{
                this.username = (res[0].username);
                this.img = (res[0].image)
            })
        }
        ,
        openDropDown(){
            this.toggle_dropDown = !this.toggle_dropDown
        }
        ,
        openResponsiveNav(){
            this.showResNav = !this.showResNav
            console.log("SHowing Navigation " + this.showResNav)

            if (this.showResNav == true){
                document.querySelector("#closingMenu").style.display = "inline"
                document.querySelector("nav").style.display = "flex"
                document.body.style.overflow = "hidden"
                this.toggle_dropDown = true
            }
            else{
                document.querySelector("#closingMenu").style.display = "none"
                document.querySelector("nav").style.display = "none"
                document.body.style.overflowY = "scroll"
            }
        }
    }
    ,
    computed : {
        profileLink(){
            var url = `/account/boutique/${this.username}`
            return url
        }
    }
    , 
    mounted(){
        var that = this
        document.querySelector(".navBar").style.backgroundColor = this.background;
        

        
        //> This prevent us hidding chat room when user goes from responsive to Desktop
        window.addEventListener('resize', function(event) {
            // 950
            var value_resize = that.getWidth()
            var navbar = document.querySelector("nav")
            if (value_resize > 950){
                navbar.style.display = "flex"
            }
            else{
                navbar.style.display = "none"
            }
        }, true);
    }
})





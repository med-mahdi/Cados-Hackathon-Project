
const app = Vue.createApp({
    data() {
      return {
        //> Data Goes Here
        pagination_number : 1,
        profiles_data : null,
        users_number : null,
        
        has_prev_page : false,
        has_next_page : false,
        requestLoading : true,

        show_msg_request : false,
        msg_content : "",
        msg_color : ""
    }
    },
    methods: {
        //> Methods Goes Here
        getPaginationNum () {
            var urlPage = window.location.href
            try { return urlPage.split("?")[1].split("=")[1] }
            catch { return 1 }
        },
        displayFollowMsg(msg,follow_state){
            if (follow_state == "added"){
                this.show_msg_request = true
                this.msg_content = msg
            }
            else if (follow_state == "removed"){
                this.show_msg_request = true
                this.msg_content = msg
            }
        },
        showMsgRequest(){
            this.show_msg_request = true
            this.msg_content = "Search functionality doesn't work yet ( search API doesn't exist yet)"
        },
        hideMsgRequest(){
            this.show_msg_request = false
        }
    }
    ,
    mounted(){
        //> Mounted Methods Goes Here 
        var that = this
        var page_number = that.getPaginationNum()
        var notNumber = isNaN(page_number)
        if (page_number == undefined || notNumber == true || page_number == "" || page_number == null){
            page_number = 1
        }
        this.pagination_number = page_number
        var xhr = new XMLHttpRequest
        var url_request = `https://cados.up.railway.app/advocates/?format=json&page=${page_number}`
        xhr.onreadystatechange = (e) => {
            var state_num = xhr.readyState
            if (state_num == 3){
                console.log("request proccessing")
            }
            if (state_num == 4){
                this.requestLoading = false
                var data = JSON.parse(xhr.response)
                this.profiles_data = data.advocates
                this.users_number = data.pagination.results_found
                this.has_prev_page = data.pagination.prev_page
                this.has_next_page = data.pagination.has_next
            }
        }
        xhr.open("GET", url_request);
        xhr.send()
    }
})
















        // fetch(url_request)
        // .then(res=>res.json())
        // .then((data)=>{
        //     this.profiles_data=data.advocates
        //     this.pagination_data=data.pagination
        // })
        // .then(()=>console.log(this.profiles_data))
        // .then(()=>console.log(this.pagination_data))
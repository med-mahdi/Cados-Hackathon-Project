var body = document.body,
    html = document.documentElement;

const app = Vue.createApp({
    data() {
      return {
        test : "hey there",
        // Info About User
        is_auth : true,
        user_name : "mehdi hyad",
        bgColor : "white",
        bodyHeight : Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )
      }
    },
    methods: {
    }
})
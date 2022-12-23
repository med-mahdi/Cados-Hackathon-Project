
app.component('pagination-section',{
    template:
    /* html */
    `
    <div class="pagination-section">
        <button class="previous_page_btn" v-if="has_previous == false" disabled>Previous Page</button>
        <button class="previous_page_btn" v-else  @click="goBack">Previous Page</button>

        <button class="newt_page_btn" v-if="has_next == false" disabled>Next Page</button>
        <button class="newt_page_btn" v-else @click="goForward">Next Page</button>
    </div>
    `,
    props : ["has_previous","has_next","page_number"]
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
        goBack(){
            var urlPage = window.location.href.split("?")[0]
            window.location.assign(`${urlPage}?page=${this.page_number-1}`)
        },
        goForward(){
            var urlPage = window.location.href.split("?")[0]
            var new_page_num = parseInt(this.page_number) + 1
            window.location.assign(`${urlPage}?page=${new_page_num}`)
        }
    }
})
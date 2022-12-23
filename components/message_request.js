
app.component('message-request',{
    template:
    /* html */
    `
    <div class="messagebox" style="position: relative;top: 86px;border: 1px solid;height: 51px;display: flex;justify-content: center;align-items: center;background: #E98B1C;font-family: 'Inter';font-style: normal;font-weight: 500;font-size: 14px;line-height: 17px;color: #FFFFFF;"><p>{{message}}</p></div>
    `,
    props : ["message"]
    ,
    data(){
        return {
        }
    },
})
const app=Vue.createApp({
    data (){
        return {
          
            friends:[
             {
                 id : 'Pen',
                 name : 'pensiri',
                 phone : '123456',
                 email : 'pen@gmail.com'
             },{
                 id : 'Ann',
                 name : 'Annie',
                 phone : '1111111',
                 email : 'ann@gmail.com'
             }
            ],
        };
    },
    methods:{
       
    },

});
app.component('friend-contact',{
    template : `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetail(friend.id)">
            {{ detailAreVisible ? 'Show' : 'Hide' }}
             Details</button>
          <ul v-if="detailAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
    data() {
           return {
            detailAreVisible : 'false',
            friend :{
                 id : 'Pen',
                 name : 'pensiri',
                 phone : '123456',
                 email : 'pen@gmail.com'
            }

            ,
           }
    },
    methods:{
        toggleDetail(){
            this.detailAreVisible =!this.detailAreVisible;
        }
    },
})
app.mount('#app');
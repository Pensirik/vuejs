const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      confirmName:'',
    };
  },
  methods:{
    confirmInput(){
      this.confirmName = this.name;
    },
    submitForm(){
      alert("submit");
    },
    setName(event,lastname){
      this.name = event.target.value + ' ' + lastname;
    },
    add(num){
        this.counter = this.counter + num;
    },
    reduce(num){
       this.counter =  this.counter - num;
    }
  }
});

app.mount('#events');

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName:''
    };
  },
  watch:{
    counter(value){
    if(value>50){
      const that = this; 
      this.counter = 0;
        setTimeout(function(){
          that.counter = 0
          },2000);

        }
    }
  },
  computed:{
    // fullname(){
    //   console.log('Running again!!');
    //    if(this.name==''){
    //       return '';
    //   }
    //   return this.name + ' ' + 'kusalaporn';
    // }
  },
  methods: {
    outputFullName(){
      if(this.name == '' || this.lastName == ''){
          return '';
      }
      return this.name + ' ' + this.lastName ;
    },
    setName(event) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name=''; this.lastName='';

    }
  }
});

app.mount('#events');

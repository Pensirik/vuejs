const app = Vue.createApp({
    data(){
        return {
            courseGoal:'Finish the couse and learn Vue!',
            vueLink:'https://v3.vuejs.org/'
        }
    },
    methods:{
     outputGoal(){
         const randomNumber = Math.random();
         if(randomNumber<0.5){
             return "Learn Vue";
         }else{
             return "Master Vue";
         }

     }
    }
});

app.mount('#user-goal');

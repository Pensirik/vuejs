const app = Vue.createApp({
    data(){
        return {
            courseGoalA:'Finish the couse and learn Vue!',
            courseGoalB:'Master Vue and build amezing app!',

            vueLink:'https://v3.vuejs.org/'
        }
    },
    methods:{
     outputGoal(){
         const randomNumber = Math.random();
         if(randomNumber<0.5){
             return this.courseGoalA;
         }else{
             return this.courseGoalB;
         }

     }
    }
});

app.mount('#user-goal');

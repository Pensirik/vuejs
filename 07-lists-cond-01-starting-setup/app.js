const app = Vue.createApp({
  data() {
    return { 
      enterGoalsValue :'',
      goals: [] };
  },
  methods : {
    addGoals(){
     this.goals.push(this.enterGoalsValue)
    },
    removeGoals(idx){
      this.goals.splice(idx,1);
    }
  }
});

app.mount('#user-goals');

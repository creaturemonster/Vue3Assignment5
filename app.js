const app = Vue.createApp({
  data() {
  return {
    enteredTaskValue:'',
    showList:true,
    tasks:[]
  };
},
 methods:{
    addTask(){
      this.tasks.push(this.enteredTaskValue);
    },
    triggerList(){
      this.showList=!this.showList;
    }, 
    removeTask(index){
      this.tasks.splice(index, 1);
    }
  }
});
app.mount('#assignment');

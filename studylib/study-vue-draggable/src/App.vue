<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <nested-draggable :tasks="list" />
     -->
    <div class="justify-content-between row">
      <nested-draggable class="col-8" v-model="list" />
    <!-- <raw-displayer class="col-4" :title="'Vuex Store'" :value="elements" /> -->
    </div>
    <button type="button" @click="addItem">
      追加
    </button>
  </div>
</template>

<script>
/* eslint-disable */
import nestedDraggable from "./components/NestedDraggable"
import eventbus from "./eventbus.js"

function filtertree(list,excludeId){
  console.log(list);
    if(list.length===0){
      return [];
    }

    const newlist=list.filter(elem=>elem.id!==excludeId);
    console.log(newlist);
    for(const elem of newlist){
      console.log(elem.elements);
      elem.elements=filtertree(elem.elements,excludeId)
    }

    return newlist;


}

function getItemCount(list){
  if(list.length===0){
    console.log("0")
    return 0;
  }
  let sum=0;
  for(const elem of list){
    console.log("id:"+elem.id);
    //自分+子要素
    sum+=1+getItemCount(elem.elements);
  }
  return sum;
}

export default {
  name: 'App',
  components: {
    nestedDraggable
  },
  data:function(){
    return {
      list:[
        {
          id:0,
          name:"task11",
          elements:[]
        },
        {
          id:1,
          name:"task2",
          elements:[
            {
              id:2,
              name:"task3",
              elements:[]
            }
          ]
        },{
          id:3,
          name:"task4",
          elements:[]
        }
      ],
      newItemId:-1
    }
  },
  methods:{
    addItem(){
      this.list.push({
        id:this.newItemId,
        name:"new item",
        elements:[]
      });
      this.newItemId++;
    },
    removeItem(id){
      this.list=filtertree(this.list,id);
    }
  },
  created:function(){
    eventbus.$on("onRemoveButtonClicked",(id)=>{
      this.removeItem(id);
    });
    this.newItemId=getItemCount(this.list);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

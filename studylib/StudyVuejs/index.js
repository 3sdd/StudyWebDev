
var Vue=require("vue/dist/vue");

var app=new Vue({
    el:"#app",
    data:{
        message:"hello vue"
    }
});

var app4=new Vue({
    el:"#app4",
    data:{
        todos:[
            {text:"item1"},
            {text:"item2"},
            {text:"item3"}
        ]
    }
});

var app5=new Vue({
    el:"#app5",
    data:{
        message:"Hello Vue.js"
    },
    methods:{
        reverseMessage:function(){
            this.message=this.message.split(" ").reverse().join(" ");
        }
    }
})

var app6=new Vue({
    el:"#app6",
    data:{
        message:"hi"
    }
})

Vue.component("todo-item",{
    props:["todo"],
    template:"<li>{{todo.text}}</li>"
})

var app7=new Vue({
    el:"#app7",
    data:{
        groceryList:[
            {id:0,text:"vegetables"},
            {id:1,text:"cheese"},
            {id:2,text:"whatever else"}
        ]
    }
})
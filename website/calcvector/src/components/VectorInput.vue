<template>
    <div class="vector-input">
        <span>
            <span v-html="renderVector(vectorName)"></span>
            =
        </span>
        <span>(</span>
        <div class="v-elem">
            <label :for="vectorName+'-x'">x: </label>
            <input type="number" :name="vectorName+'-x'"  v-model="x">
        </div>

        <span> , </span>
        <div class="v-elem">
            <label :for="vectorName+'-y'">y: </label>
            <input type="number" :name="vectorName+'-y'" v-model="y">
        </div>
        <span>)</span>
    </div>
</template>

<script>

import katex from "katex"
import "katex/dist/katex.min.css"

export default {
    name:"VectorInput",
    data:function(){
        return {
            x:0,
            y:0
        }
    },
    props:{
        vectorName:{
            type:String,
            required:true
        }
    },
    watch:{
        x:function(newx){
            if(!this.validate(newx)){
                return;
            }

            this.onVectorUpdated();
        },

        y:function(newy){
            if(!this.validate(newy)){
                return;
            }

            this.onVectorUpdated();
        }
    },
    methods:{
        validate:function(val){
            if(val===""){
                return false;
            }
            return true
        },
        onVectorUpdated:function(){
            this.$emit("onVectorUpdated",
            {
                vectorName:this.vectorName,
                x:Number(this.x),
                y:Number(this.y)
            }
            
            );
        },
        renderVector(name){
            const text=`\\vec{${name}}`;
            return katex.renderToString(text);
        }
    }
}
</script>

<style scoped>

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

label{
    width:20%;
}

input[type="number"]{
    -moz-appearance:textfield;
    width:50%;
    outline: none;
    border: none;
    text-decoration: none;
    padding: 5px 10px;
}

.v-elem{
    display: inline-block;
    width: 100px;
}
</style>
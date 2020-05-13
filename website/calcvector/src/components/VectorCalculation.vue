<template>
    <div id="area">
        <span>
            <span v-html="getResultsHtml()"> </span>
        </span>
        <div id="board" class="jxgbox"></div>
    </div>
</template>

<script>
import {eventBus} from "../main"
import katex from "katex"
import "katex/dist/katex.min.css"

import "jsxgraph/distrib/jsxgraph.css"
import JXG from "jsxgraph/distrib/jsxgraphcore.js"

export default {
    name:"VectorCalculation",
    data:function(){
        return {
            vectors:[
                {vectorName:"a",x:0,y:0},
                {vectorName:"b",x:0,y:0}
            ],
            results:[
                {x:0,y:0}
            ],
            board:{},
            vectorsOnBoard:[]
        }
    },
    mounted:function(){
        const t=this;
        eventBus.$on("onVectorsUpdated",function(args){
            t.updateResult(args);
            t.board.update();
        });
        this.initGraph();
    },
    methods:{
        updateResult:function(args){
            this.vectors=args.vectors;
            this.results=[this.getCalculationResult()]
        },
        getVectorNameWithArrow(name){
            return katex.renderToString(`\\vec{${name}}`,{
                throwOnError:false
            });
        },
        getResultsHtml(){
            const veca=this.vectors[0];
            const vecb=this.vectors[1];

            const vecResult=this.getCalculationResult();
            const text=`\\vec{a}+\\vec{b}=(${veca.x},${veca.y})+(${vecb.x},${vecb.y})=(${vecResult.x},${vecResult.y})`;
            return katex.renderToString(text);
        },
        getCalculationResult(){
            const x=this.vectors[0].x+this.vectors[1].x;
            const y=this.vectors[0].y+this.vectors[1].y;
            return {x:x,y:y};
        },
        initGraph(){
            let lineSettings={
                straightFirst:false,
                straightLast:false,
                lastArrow:true,
                strokeWidth:3,
                strokeColor:"#0086CC"
            }
            
            this.board=JXG.JSXGraph.initBoard("board", {boundingbox: [-10, 10, 10, -10], axis:true});
            this.board.suspendUpdate();
            const pointSize=2;
            
            
            const pointa=this.board.create("point",[()=>this.vectors[0].x,()=>this.vectors[0].y],{size:pointSize,name:this.vectors[0].vectorName});
            const linea=this.board.create("line",[[0,0],[()=>this.vectors[0].x,()=>this.vectors[0].y]],lineSettings);

            this.vectorsOnBoard.push({"name":this.vectors[0].vectorName,point:pointa,line:linea})

            const pointb=this.board.create("point",[()=>this.vectors[1].x,()=>this.vectors[1].y],{size:pointSize,name:this.vectors[1].vectorName});
            const lineb=this.board.create("line",[[0,0],[()=>this.vectors[1].x,()=>this.vectors[1].y]],lineSettings);
            this.vectorsOnBoard.push({"name":this.vectors[1].vectorName,point:pointb,line:lineb})


            //結果のベクトル
            this.board.create("point",[()=>this.results[0].x,()=>this.results[0].y],{size:pointSize,name:"result vector",fillColor:"#0086CC",});
            this.board.create("line",[[0,0],[()=>this.results[0].x,()=>this.results[0].y]],{straightFirst:false,straightLast:false,lastArrow:true,strokeWidth:3,strokeColor:"#FF0000"});


            this.board.unsuspendUpdate();


        },
    },
    computed:{
        vectorLength:{
            get:function(){
                return this.vectors.length;
            }
        },
        addtionResult:function(){
            let result={x:0,y:0}
            for(const vec of this.vectors){
                result.x+=vec.x;
                result.y+=vec.y;
            }
            return result;
        },

    }
}
</script>

<style scoped>


#board{
    width: 500px;
    height: 500px;
    margin:auto;
    margin-top:50px
}

</style>
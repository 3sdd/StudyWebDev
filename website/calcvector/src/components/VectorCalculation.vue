<template>
    <div>
        <span>
            <math>
                <mover>
                    <mi> a</mi>
                    <mo>&rarr;</mo>
                </mover>
                <mo>+</mo>
                <mover>
                    <mi> b</mi>
                    <mo>&rarr;</mo>
                </mover>
                <mo>=</mo>

            </math>
        </span>
        <span>
            <span v-for="(vector,index) in vectors" v-bind:key="index" v-bind:vectors="vectors">
                ({{vector.x}} , {{vector.y}}) <span v-if="index<vectorLength-1">+</span>
            </span>
            =
            <span>( {{addtionResult.x}} , {{addtionResult.y}} )</span>
        </span>

        <!-- <span>({{vectors[0].x}},{{vectors[0].y}})+({{vectors[1].x}},{{vectors[1].y}})</span> -->
    </div>
</template>

<script>
import {eventBus} from "../main"
export default {
    name:"VectorCalculation",
    data:function(){
        return {
            vectors:[
                {vectorName:"a",x:0,y:0},
                {vectorName:"b",x:0,y:0}
            ]
        }
    },
    mounted:function(){
        const t=this;
        eventBus.$on("onVectorsUpdated",function(args){
            t.updateResult(args);
        })
    },
    methods:{
        updateResult:function(args){
            this.vectors=args.vectors;
        }
    },
    watch:{
        vectors:function(){
            console.log("changed");
        }
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
        }
    }
}
</script>

<style scoped>

</style>
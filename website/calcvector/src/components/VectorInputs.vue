<template>
    <div class="vector-inputs">
        <div>
            <VectorInput vectorName="a" @onVectorUpdated="onVectorsUpdated"></VectorInput>
            <VectorInput vectorName="b" @onVectorUpdated="onVectorsUpdated"></VectorInput>
        </div>
    </div>
</template>

<script>
import VectorInput from "./VectorInput.vue"
import {eventBus} from "../main"

export default {
    name:"VectorInputs",
    components:{
        VectorInput
    },
    methods:{
        onVectorsUpdated:function() {
            // console.log(`name:${obj.vectorName} , x:${obj.x},y:${obj.y}`);
            // console.log(this.$children);
            eventBus.$emit("onVectorsUpdated",{
                vectors:this.getVectors()
            });
        },
        getVectors(){
            let vectors=[]
            for(const cmp of this.$children){
                vectors.push({vectorName:cmp.vectorName,x:Number(cmp.x),y:Number(cmp.y)})
            }
            return vectors
        }
    },
}
</script>

<style scoped>

.vector-input{
    padding: 10px 10px;
}
</style>


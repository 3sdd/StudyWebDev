<template>
    <div class="vector-input">
        <span>
            <math>
                <mover>
                    <mi> {{vectorName}}</mi>
                    <mo>&rarr;</mo>
                </mover>
            </math>
             =
        </span>
        <span>(</span>
        <label :for="vectorName+'-x'">x:</label>
        <input type="number" :name="vectorName+'-x'"  v-model="x">
        <span>, </span>
        <label :for="vectorName+'-y'">y:</label>
        <input type="number" :name="vectorName+'-y'" v-model="y">
        <span>)</span>
    </div>
</template>

<script>



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
        }
    }
}
</script>

<style scoped>

</style>
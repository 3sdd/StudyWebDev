<template>
    <div>
        hi
        <span>{{outputTensor}}</span>
    </div>
</template>

<script>
import {InferenceSession} from "onnxjs"



export default {
    data:function(){
        return {
            outputTensor:"",
        }
    },
    async mounted(){

        const session=new InferenceSession({
            backendHint:"cpu"
        })
        let path="";
        if(process.env.NODE_ENV === 'production'){
            path="/study-onnxjs/model.onnx";
        }else{
            path="/model(1).onnx";
        }
        console.log(path);
        // this.modelFilepath = process.env.NODE_ENV === 'production' ? MODEL_FILEPATH_PROD : MODEL_FILEPATH_DEV;
        session.loadModel(path)
            .then(function(){
                console.log("hi");

            });
        console.log("uu")
        // const func=async()=>{


            
        //     const url="../static/model.onnx"
        //     console.log([session,url,new Tensor()]);
        //     // await session.loadModel(url);
        //     console.log("model loaded")

        //     // const inputs=[
        //     //     new Tensor(new Float32Array([1.0,2.0,3.0,4.0]),"float32",[2,2])
        //     // ]

        //     // const outputMap=await session.run(inputs);
        //     // const outputTensor=outputMap.values().next().value;
        //     // console.log("return")
        //     // return outputTensor;
        // }

        // // this.outputTensor=await func();
        
        // // console.log("end")
        // await func();

    }
}
</script>

<style scoped>

</style>
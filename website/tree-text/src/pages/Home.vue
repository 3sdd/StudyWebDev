<template>
    <div class="container">
        <div class="row">
            <p>
              ツリーのような表記に変更します。  
            </p>
        </div>
        <div class="form-group row">
            <div class="col-sm-6">
                <h2 class="h2">入力</h2>
                <div>
                    <textarea class="form-control" rows="10" cols="40" v-model="inputText"></textarea>
                </div>
            </div>
            <div class="col-sm-6">
                <h2 class="h2">出力</h2>
                <div>
                    <textarea class="form-control" rows="10" cols="40" readonly v-model="outputText">text</textarea>
                </div>
            </div>


        </div>
    </div>

</template>

<script>
import sampleTexts from "./../static/js/sample-texts.js"
import converter from "./../static/js/tree-converter.js"

export default {
    data:function(){
        return {
            inputText:"",
            outputText:""
        }
    },
    mounted:function(){
        this.inputText=sampleTexts.jaSampleText2;
    },
    watch:{
        inputText:function(text){
            console.log(text)
            const outputText=converter(text);
            this.outputText=outputText;
        }
    }
    
}
</script>

<style scoped>
textarea{
    width: 500px;
    text-align: left;
    margin: auto;

}
.container{
    margin-top: 100px;
    margin-bottom: 100px;
}
</style>
<template>
    <div class="container">
        <div class="row">
            <div col-sm-12>
                説明
            </div>
            <div col-sm-12>

                ツリーのような表記に変更します。  

            </div>

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
                <b-button variant="dark" v-clipboard:copy="outputText" v-clipboard:success="onCopy" v-clipboard:error="onError">
                    <font-awesome-icon icon="copy" />
                    コピー
                </b-button>
                <b-button variant="dark" @click="downloadText">
                    <font-awesome-icon icon="file-download" />
                    ダウンロード
                </b-button>

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
    },
    methods:{
        onCopy:function(e){
            alert("コピー完了"+e.text)
            // this.$root.$emit()
        },
        onError:function(){
            alert("コピー失敗しました")
        },
        downloadText(){
            let blob=new Blob([this.outputText],{type:"text/plain"});
            let a=document.createElement("a");
            a.href=window.URL.createObjectURL(blob);
            a.download="TreeText.txt";
            a.click();
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
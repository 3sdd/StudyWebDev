<template>
    <div class="container border border-dark rounded-lg p-3">
        <div class="row">
            <div col-sm-12>
            </div>
            <div col-sm-12>
                <div class="description-area p-4 text-left">
                    <h2>なにができる？</h2>
                    <p>
                        treeコマンドのような表示(下のもの)を作ります。<br class="mb-4">
<pre class="pl-4">
ルート
├─ フォルダー1
└─ フォルダー2
</pre>
                                        
                       
                        左側にスペース(空白)を使って階層構造を作ります。
                        右側にtreeコマンドのように線で繋げたテキストを生成します。
                    </p>
                    <h2 class="mb-2">使い方</h2>
                    <p>
                        1. 左側のテキスト入力欄にフォルダー名を入れていきます。<br>
                        2. 一番左側にスペースを入力することで、階層を表現します。
                        上のフォルダーに関連して階層構造となります。<br>

                    </P>
                </div>

            </div>

        </div>
        <div class="form-group row">
            <div class="col-sm-6">
                <h2 class="h2">入力</h2>
                <div>
                    <textarea class="form-control" rows="15" cols="50" v-model="inputText"></textarea>
                </div>
            </div>
            <div class="col-sm-6">
                <h2 class="h2">出力</h2>
                <div>

                    <textarea class="form-control" rows="15" cols="50" readonly v-model="outputText">text</textarea>
                </div>
            </div>
        </div>

        <div class="button-group text-right">
            <b-button class="mr-4" variant="dark" v-clipboard:copy="outputText" v-clipboard:success="onCopy" v-clipboard:error="onError">
                <font-awesome-icon icon="copy" />
                コピー
            </b-button>
            <b-button class="mr-4" variant="dark" @click="downloadText">
                <font-awesome-icon icon="file-download" />
                ダウンロード
            </b-button>
  
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
        this.inputText=sampleTexts.jaSampleText;
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
.border{
    border: solid 5px #d6d6d6 !important;
}
.container{
    margin-top: 20px;
    margin-bottom: 100px;
}

.btn{
    padding: 10px 20px;
}


.btn-group{
    padding-bottom: 100px;
}
</style>
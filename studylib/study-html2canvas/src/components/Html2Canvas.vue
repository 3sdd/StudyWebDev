<template>
  <div>
    <h1>hi</h1>
    <div>
      <div class="ss-area">
      <span>{{message}}</span>
      <textarea rows="10" cols="50">
      </textarea>
    </div>
    </div>

    <div>
      <button class="favorite styled"
              type="button" @click="takeScreenshot">
          SS保存
      </button>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas"

export default {
  name: 'Html2Canvas',
  data:function(){
    return {
      message:"hello"
    }
  },
  methods:{
    takeScreenshot(){
      console.log("ss")
      html2canvas(document.querySelector(".ss-area"))
        .then(function(canvas){

            let link = document.createElement("a")
            link.setAttribute('download', 'ss.png');
            link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
            link.click();
        });
    }
  }
}
</script>

<style scoped>
.ss-area{
  width:200px;
  margin:auto;
  border:solid 1px red;
}

button{
  padding:10px
}
</style>

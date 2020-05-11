<template>
    <header>
        <div>
            {{siteName}}
        </div>

    </header>
</template>

<script>
export default {
    name:"PageHeader",
    props:{
        siteName:String
    }
}
</script>

<style scoped>
/* header ul li{
    display:flex;
    padding:10px;
    border: 1px solid #333;
    background:pink;
} */

header{
    background: darkslateblue;
}

header div{
    padding:20px 30px;
    display: flex;
    color:white;
    font-size: 1.6em;
}
</style>
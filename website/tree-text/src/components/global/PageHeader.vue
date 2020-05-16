<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" class="p-3">
            <b-navbar-brand href="#" class="">Tree Text</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-navbar-nav align="right" class="ml-auto">
                <b-nav-item href="https://docs.google.com/forms/d/e/1FAIpQLSeWH6MO4pb-A_XabcOYu73VAmCufKZZNOSR9a1XE_fQBvlL1g/viewform?usp=sf_link">
                    <font-awesome-icon icon="envelope"/>
                </b-nav-item>
                <b-nav-item href="https://twitter.com/__msdd__" >
                    <font-awesome-icon :icon="['fab', 'twitter']" size="lg"/>
                </b-nav-item>
                <b-nav-item href="https://docs.google.com/forms/d/e/1FAIpQLSdcnOL4F-IkaeCMwEJucK3yJW7ntOHxbg1_9u2XGzLKA1ZvIw/viewform?usp=sf_link">
                    <font-awesome-icon icon="bug" size="lg"/>
                </b-nav-item>
            </b-navbar-nav>


        </b-navbar>
    </div>


</template>

<script>
export default {
    
}
</script>


<style scoped>
.navbar-brand
{
  font-size: 25px;
  font-weight: bold;
}
li.nav-item{
    margin-right: 20px;
}
</style>
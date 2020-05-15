<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" class="p-3">
            <b-navbar-brand href="#">Tree Text</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-navbar-nav>
                <b-nav-item href="#" >
                    <font-awesome-icon :icon="['fab', 'twitter']"/>
                </b-nav-item>
                <b-nav-item href="#">
                    <font-awesome-icon icon="bug"/>
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
</style>
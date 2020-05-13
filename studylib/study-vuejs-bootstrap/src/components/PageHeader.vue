<template>
    <header id="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand text-light" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <RouterLink to="/" class="nav-link text-light" exact>ホーム</RouterLink>
                <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link text-light" to="/pagea"><a>page a</a></RouterLink>

            </li>
            <li class="nav-item">
                <RouterLink class="nav-link text-light" to="/pageb"><a>page b</a></RouterLink>

            </li>
            <li class="nav-item">
                <RouterLink class="nav-link disabled  text-light" to="/pagec"><a>page c</a></RouterLink>
            </li>
            </ul>
        </div>
        </nav>
    </header>    
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
<script>
import appCard from "./appCard.vue"
import { store } from "../store"

export default {
    data() {
        return {
            store
        }
    },
    components: {
        appCard
    }
}

</script>

<template>

    <!-- sezione card -->
    <section class="container_width pt-3 d-flex flex-wrap pe-2 justify-content-center">
        <!-- ciclo v-for per andare a stampare tot card quante sono nell'array movies -->
        <div v-for="(movie, index) in store.movies" :key="index" class="card">

            <!-- props per portareil dato movies nel componenete figlio -->
            <appCard :film="movie" />
        </div>
    </section>

</template>

<style scoped>
.card {
    margin: 10px 5px;
    text-align: center;
    width: 342px;
}
</style>
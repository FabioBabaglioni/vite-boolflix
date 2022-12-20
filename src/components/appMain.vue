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

    <section class="container_width pt-3 d-flex flex-wrap pe-2 justify-content-center">
        <div v-for="(movie, index) in store.movies" :key="index" class="card">
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
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

    <section class="container_width pt-3 d-flex flex-wrap pe-2">
        <div v-for="(movie, index) in store.movies" :key="index" class="card">
            <appCard :film="movie" />
        </div>
    </section>

</template>

<style scoped>
.card {
    width: calc((100% / 3) - 10px);
    margin: 10px 5px;
    /* background-color: green; */
    text-align: center;
    border: solid 2px red;
}
</style>
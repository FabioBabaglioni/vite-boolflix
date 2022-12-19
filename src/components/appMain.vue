<script>
import { store } from "../store"

export default {
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <section class="container_width pt-3">
        <div v-for="(movie, index) in store.movies" :key="index" class="d-flex card">
            <div>
                <span>titolo: </span>
            </div>
            <div>
                <span>Titolo originale: {{ movie.original_title }} </span>
            </div>
            <div>
                <span>Lingua: {{ movie.original_language }}</span>
            </div>
            <div>
                <span>Voto: {{ movie.vote_average }}</span>
            </div>
        </div>

    </section>

</template>

<style scoped>
.card {
    width: calc(100% / 4);
    background-color: green;
}
</style>
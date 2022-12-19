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

    <section class="container_width pt-3 d-flex flex-wrap pe-2">
        <div v-for="(movie, index) in store.movies" :key="index" class="card">
            <div>
                <span>titolo: {{ movie.title }}</span>
            </div>
            <div>
                <span v-if="movie.title != movie.original_title">Titolo originale: {{ movie.original_title }} </span>
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
    width: calc((100% / 4) - 10px);
    margin: 10px 5px;
    background-color: green;
}
</style>
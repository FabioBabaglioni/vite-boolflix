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
                <span v-if="movie.title != movie.original_title">Titolo originale: {{ movie.original_title }} {{
                        movie.original_name
                }} </span>
            </div>
            <div>
                <span>Lingua:
                    <img src="../img/uk.png" alt="" v-if="movie.original_language === `en`">
                    <img src="../img/italy.png" alt="" v-else-if="movie.original_language === `it`">
                    <img src="../img/france.png" alt="" v-else-if="movie.original_language === `fr`">
                    <img src="../img/cyprus.png" alt="" v-else="">
                    <!-- {{ movie.original_language }} -->
                </span>
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

img {
    width: 20px;
}
</style>
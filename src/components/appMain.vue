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
        <div>
            <span>titolo: </span>
            <span></span>
        </div>
        <div>
            <span>Titolo originale: </span>
            <span> {{ store.movies.original_title }}</span>
        </div>
        <div>
            <span>Lingua: </span>
            <span> {{ store.movies.original_language }}</span>
        </div>
        <div>
            <span>Voto: </span>
            <span> {{ store.movies.vote_average }}</span>
        </div>


    </section>

</template>

<style scoped>

</style>
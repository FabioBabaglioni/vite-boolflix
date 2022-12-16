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
        <div v-for="(option, index) in store.optionFilm">
            <span>{{ store.optionFilm[index] }} </span>
            <span> risultato api</span>
        </div>

    </section>

</template>

<style scoped>

</style>
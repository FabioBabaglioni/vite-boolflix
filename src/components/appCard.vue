<script>

export default {
    props: {
        film: Array,
    }
}

</script>

<template>

    <div>
        titolo: {{ film.title }}
    </div>

    <div v-if="film.title != film.original_title">
        Titolo originale: {{ film.original_title }}
    </div>

    <div>
        Lingua:
        <img src="../img/uk.png" alt="" v-if="film.original_language === `en`">
        <img src="../img/italy.png" alt="" v-else-if="film.original_language === `it`">
        <img src="../img/france.png" alt="" v-else-if="film.original_language === `fr`">
        <img src="../img/cyprus.png" alt="" v-else="">
        <!-- {{ film.original_language }} -->
    </div>

    <div>
        Voto: {{ film.vote_average }}
    </div>

</template>

<style scoped>
img {
    width: 20px;
}
</style>
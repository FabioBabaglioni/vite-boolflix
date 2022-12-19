<script>

export default {
    props: {
        film: Object,
    },
    methods: {
        getImage() {

        }
    }
}

</script>

<template>

    <div>
        <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="">
    </div>

    <div>
        titolo: {{ film.title }} {{ film.original_name }}
    </div>

    <div v-if="film.title != film.original_title">
        Titolo originale: {{ film.original_title }}
    </div>

    <div>
        Lingua:
        <img class="flag" src="../img/uk.png" alt="" v-if="film.original_language === `en`">
        <img class="flag" src="../img/italy.png" alt="" v-else-if="film.original_language === `it`">
        <img class="flag" src="../img/france.png" alt="" v-else-if="film.original_language === `fr`">
        <img class="flag" src="../img/cyprus.png" alt="" v-else="">
    </div>

    <div>
        Voto: {{ film.vote_average }}
    </div>

</template>

<style scoped>
.flag {
    width: 20px;
}
</style>
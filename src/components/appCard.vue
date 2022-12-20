<script>
import appVote from './appVote.vue'

export default {
    components: {
        appVote
    },
    props: {
        film: Object,
    },

}

</script>
<!-- componenete dei dati della card -->

<template>
    <div class="info">

        <!-- copertina film -->
        <div class="img_cover">
            <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="">
        </div>


        <div class="container_info">
            <div>
                <strong>TITOLO:</strong> {{ film.title }} {{ film.original_name }}
            </div>

            <div v-if="film.title != film.original_title">
                <strong>TITOLO ORIGINALE:</strong> {{ film.original_title }}
            </div>

            <div>
                <!-- v-if per inserire la bandiera dello stato  -->
                <strong>LINGUA:</strong>
                <img class="flag" src="../img/uk.png" alt="" v-if="film.original_language === `en`">
                <img class="flag" src="../img/italy.png" alt="" v-else-if="film.original_language === `it`">
                <img class="flag" src="../img/france.png" alt="" v-else-if="film.original_language === `fr`">
                <img class="flag" src="../img/cyprus.png" alt="" v-else="">
            </div>

            <div>
                <!-- props per portare il dato film nel componenente figlio -->
                <appVote :vote="film" />
            </div>

            <div class="small_text">
                <strong>Descrizione:
                    {{ film.overview }}
                </strong>
            </div>
        </div>
    </div>



</template>

<style scoped lang="scss">
@use "./style/partials/variables.scss" as *;

.info {
    position: relative;

    .container_info {
        font-size: 20px;
        background-color: $brandBackground;
        border: 1px solid $brandSecondary;
        color: $brandSecondary;
        width: 100%;
        height: 100%;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        overflow: auto;
        padding: 100px 20px 20px 20px;
        text-align: left;

        .small_text {
            font-size: 15px;
        }
    }

    &:hover {

        .container_info {
            display: block;
        }
    }
}

.flag {
    width: 20px;
}
</style>
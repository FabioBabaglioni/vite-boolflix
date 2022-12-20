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

<template>
    <div class="info">
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
                <strong>LINGUA:</strong>
                <img class="flag" src="../img/uk.png" alt="" v-if="film.original_language === `en`">
                <img class="flag" src="../img/italy.png" alt="" v-else-if="film.original_language === `it`">
                <img class="flag" src="../img/france.png" alt="" v-else-if="film.original_language === `fr`">
                <img class="flag" src="../img/cyprus.png" alt="" v-else="">
            </div>

            <div>
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
.info {
    position: relative;

    .container_info {
        font-size: 20px;
        background-color: rgba($color: #000000, $alpha: .5);
        color: white;
        width: 90%;
        height: 400px;
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 40px;
        overflow: auto;
        padding: 10px;

        .small_text {
            font-size: 15px;
        }
    }

    &:hover {

        .img_cover {
            filter: grayscale(1);
            filter: opacity(.2);
        }

        .container_info {
            display: block;
        }
    }

}

.flag {
    width: 20px;
}

.fa-star {
    color: #FFD700;
}
</style>
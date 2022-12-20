<script>

export default {
    props: {
        vote: Object,
    },
    computed: {
        getVoto() {
            const voto = Math.ceil(this.vote.vote_average / 2)
            return voto;
        }
    },


}

</script>

<template>

    <!-- <div>
        Voto: {{ getVoto }}
    </div> -->

    <div v-if="getVoto === 1">
        <strong>VOTO:</strong>
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />

    </div>
    <div v-else-if="getVoto === 2">
        <strong>VOTO:</strong>
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
    </div>
    <div v-else-if="getVoto === 3">
        <strong>VOTO:</strong>
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
    </div>
    <div v-else-if="getVoto === 4">
        <strong>VOTO:</strong>
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
    </div>
    <div v-else-if="getVoto === 5">
        <strong>VOTO:</strong>
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-solid fa-star" />
    </div>

</template>

<style scoped>
.fa-star {
    color: #FFD700;
}
</style>
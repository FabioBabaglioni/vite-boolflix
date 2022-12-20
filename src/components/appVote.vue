<script>

export default {
    props: {
        vote: Object,
    },


}

</script>

<template>

    <div v-if="vote.vote_average === 1">
        Voto: {{ star }} <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
    </div>

</template>

<style scoped>
.fa-star {
    color: #FFD700;
}
</style>
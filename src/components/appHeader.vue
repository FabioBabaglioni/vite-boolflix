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
    <section>
        <div class="d-flex justify-content-between align-items-center container_width">

            <!-- logo dell'azienda -->
            <h1>BOOLFLIX</h1>

            <!-- input per la ricerca dei film  -->
            <form>
                <input v-model="store.apiSearchText" type="text" class="me-2" id="searchBar" placeholder="Cerca film">

                <!-- emit per portare fuori dal componente l'evento di ricerca film -->
                <button type="submit" id="searchBar" @click.prevent="$emit(`search`)">
                    search
                </button>
            </form>

        </div>

    </section>
</template>

<style scoped lang="scss">
@use "./style/partials/variables.scss" as *;

section {
    height: 100px;
    background-color: $brandBackground;
}

h1 {
    color: $brandPrimary;
}
</style>

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
            <h1>BOOLFLIX</h1>
            <form>
                <input v-model="store.apiSearchText" type="text" class="me-2" id="searchBar" placeholder="Cerca film">
                <button type="submit" id="searchBar" @click.prevent="$emit(`search`)">
                    search
                </button>
            </form>

        </div>

    </section>
</template>

<style scoped>
section {
    height: 100px;
    background-color: black;
}

h1 {
    color: red;
}
</style>

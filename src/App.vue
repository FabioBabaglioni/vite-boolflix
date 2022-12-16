<script >
import axios from "axios"
import appHeader from './components/appHeader.vue'
import { store } from "./store"
import appMain from './components/appMain.vue'



export default {
  components: {
    appHeader, appMain
  },

  data() {
    return {
      store
    }
  },

  methods: {
    getMovies() {

      axios
        .get(store.apiUrl += `${store.apiKey}${store.apiUrlMovies}${store.apiSearchText}`)
        .then(res => {
          store.movies = res.data.results;
        })
        .catch(err => {
          console.log("Errori, err")
        })
    }
  },
  mounted() {
    this.getMovies()
  }
}

</script>


<template>
  <header>
    <appHeader @search="getMovies" />
  </header>

  <main>
    <appMain />
  </main>


</template>

<style lang="scss">
@use "./components/style/general.scss";
</style>

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
    // metodo per fare la chiamata APi
    getMovies() {

      let myUrl = store.apiUrl;

      if (store.apiSearchText !== "") {
        myUrl += `${store.apiKey}${store.apiSearchText}`
      }

      axios

        .get(myUrl)
        .then(res => {
          store.movies = res.data.results;
        })
        .catch(err => {
          console.log("Errori, err")
        });

    },
  }
}

</script>


<template>
  <header>
    <!-- punto di ricezione emit -->
    <appHeader @search="this.getMovies" />
  </header>

  <main>
    <appMain />
  </main>


</template>

<style lang="scss">
@use "./components/style/general.scss";

// css main generico
main {
  background-color: grey;
  height: calc(100vh - 100px);
  overflow: auto;
}
</style>

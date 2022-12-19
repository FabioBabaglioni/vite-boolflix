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
    // getSeries() {

    //   let myUrl = store.apiUrl;

    //   if (store.apiSearchText !== "") {
    //     myUrlSeries += `${store.apiSeries}${store.apiKey}${store.apiSearchText}`
    //   }

    //   axios

    //     .get(myUrlSeries)
    //     .then(res => {
    //       store.series = res.data.results;
    //     })
    //     .catch(err => {
    //       console.log("Errori, err")
    //     });

    // }
  },
  // mounted() {
  //   this.getMovies()
  // }
}

</script>


<template>
  <header>
    <appHeader @search="this.getMovies" />
  </header>

  <main>
    <appMain />
  </main>


</template>

<style lang="scss">
@use "./components/style/general.scss";
</style>

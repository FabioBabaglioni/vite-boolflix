import { reactive } from "vue";

export const store = reactive({

    // url iniziale
    apiUrl: `https://api.themoviedb.org/3/search/multi`,

    // array da popolare con la chiamata all'API
    movies: [],

    // api key per l'identificazione di chi sta facendo la chimata
    apiKey: `?api_key=e99307154c6dfb0b4750f6603256716d&query=`,

    // stringa dove andrò a vedere con il v-model cosa scrive l'utente
    apiSearchText: "",
})
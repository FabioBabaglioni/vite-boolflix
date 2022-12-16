import { reactive } from "vue";

export const store = reactive({
    apiUrl: `https://api.themoviedb.org/3`,
    movies: [],
    series: [],
    apiUrlMovies: "/search/movie/550&query=",
    apiUrlSeries: "/search/series/550&query=",
    apiKey: "?api_key=fa8e15da4a5b52dca91a0f6a7d7abde2",
    apiSearchText: "",
    optionFilm: [
        "Titolo:",
        "Titolo originale:",
        "Lingua:",
        "Voto:",
    ]
})
import axios from "axios"

const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/',
    headers: {
        'X-API-KEY': "2baadf78-a2ef-4263-8045-80c2146675e6",
        'Content-Type': 'application/json',
    },
})

export const filmsAPI = {
    getAllFilms() {
        return instance.get(`v2.2/films`).then(res => res.data)
    },
    getMovieDetail(id) {
        return instance.get(`v2.2/films/ ${id}`).then(res => res.data)
    },
    searchFilmByName(name) {
        return instance.get(`v2.1/films/search-by-keyword?keyword=${name}`).then(res => res.data)
    }
}
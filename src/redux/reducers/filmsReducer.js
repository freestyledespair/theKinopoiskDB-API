import { filmsAPI } from "../../api"


const initialState = {
    isLoading: false,
    allFilms: {},
    movieDetails: {},
}

const TOGGLE_LOADING = "TOGGLE_LOADING"
const SET_FILMS = "SET_FILMS"
const SET_MOVIE_DETAILS = "SET_MOVIE_DETAILS"

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_FILMS:
            return {
                ...state,
                allFilms: action.allFilms

            }
        case SET_MOVIE_DETAILS:
            return {
                ...state,
                movieDetails: action.movieDetails
            }
        default:
            return state
    }
}

const toggleIsLoading = (isLoading) => ({ type: TOGGLE_LOADING, isLoading })
const setAllFilms = (allFilms) => ({ type: SET_FILMS, allFilms })
const setMovieDetails = (movieDetails) => ({ type: SET_MOVIE_DETAILS, movieDetails })

export const getAllFilms = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    filmsAPI.getAllFilms()
        .then(data => dispatch(setAllFilms(data?.items)))
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}

export const getMovieDetails = (id) => (dispatch) => {
    filmsAPI.getMovieDetail(id)
        .then(data => dispatch(setMovieDetails(data)))
        .catch(err => console.error(err))
}

export const getFilmByName = (name) => (dispatch) => {
    filmsAPI.searchFilmByName(name)
        .then(data => dispatch(setAllFilms(data?.films)))
        .catch(err => console.error(err))
}

export default filmsReducer;
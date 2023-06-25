import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../../redux/reducers/filmsReducer';

const Movie = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const movie = useSelector(state => state?.films.movieDetails)

    useEffect(() => {
        dispatch(getMovieDetails(id))
    }, [id])

    return (
        <div>
            <Link to={"/"} style={{ color: "red" }}>Home</Link>
            <h1>{movie.nameRu}</h1>
            <h2>{movie.nameOriginal}</h2>
            <p>{movie.description}</p>
            <h2>IMDb rating: {movie.ratingImdb}</h2>
            <h2>Kinopoisk rating: {movie.ratingKinopoisk}</h2>
            <img src={movie.posterUrl} alt="" />
        </div>
    );
};

export default Movie;
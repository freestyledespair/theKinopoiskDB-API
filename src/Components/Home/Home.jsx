import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllFilms } from '../../redux/reducers/filmsReducer';


const Home = () => {
    const dispatch = useDispatch()
    const { isLoading, allFilms } = useSelector(state => state.films)

    useEffect(() => {
        dispatch(getAllFilms())
    }, [])

    if (isLoading) {
        return <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2014/07/A-Tiny-Javascript-Library-To-Lazy-Load-Images.jpg?fit=406%2C308&ssl=1" />
    }

    return (
        <div>
            {
                allFilms?.length > 0 ?
                    allFilms?.map(el => (
                        <div key={el.kinopoiskId ? el.kinopoiskId : el.filmId} className='film_block'>
                            <h2>{el?.nameRu}</h2>
                            <h3>Rating: {el?.ratingImdb}</h3>
                            <Link to={`film-detail/ ${el.kinopoiskId ? el.kinopoiskId : el.filmId}`}>
                                <img className='img_block' src={el?.posterUrlPreview} alt="" />
                            </Link>

                        </div>
                    ))
                    :
                    <h1>Не найдено.</h1>
            }
        </div >
    );
};

export default Home;
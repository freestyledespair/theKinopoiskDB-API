import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFilmByName } from '../../redux/reducers/filmsReducer';

const Header = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const search = (e) => {
        e.preventDefault()
        dispatch(getFilmByName(name))
        // setName('')
    }

    return (
        <div>
            <header>

                <form onSubmit={search}>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="search" placeholder='Movie title...' />
                    <button>Search</button>
                </form>
            </header>
        </div>
    );
};

export default Header;
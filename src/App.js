import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Movie from './Components/Movie/Movie';
import Error404 from './Components/Error404';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/film-detail/:id" element={<Movie />} />
      </Routes>
    </div>
  );
};

export default App;
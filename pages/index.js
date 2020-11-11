import React, { memo, useState } from 'react';
import { AppContext } from '../components/AppContext';
import Home from '../components/Home';

const App = () => {

  const [moviePages, setMoviePages] = useState({
    page: 0,
    totalPage: 0,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  const [runPush, setRunPush] = useState('');

  return (
    <AppContext.Provider
      value={{
        movies,
        runPush,
        isLoading,
        setMovies,
        setRunPush,
        moviePages,
        setIsLoading,
        setMoviePages,
      }}>
        <Home />
    </AppContext.Provider>
  );
}


export default memo(App);
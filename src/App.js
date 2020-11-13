import React from 'react';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieListContainer from './conteiners/MovieListContainer';

const App = () => {
  return (
    <div className="wrapper">
      <MovieDetailsPage />
      <MovieListContainer />
    </div>
  )
}


export default App;
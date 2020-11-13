import React from 'react';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieList from './components/MovieList/MovieList';

const App = () => {
  return (
    <div className="wrapper">
      <MovieDetailsPage />
      <MovieList />
    </div>
  )
}


export default App;
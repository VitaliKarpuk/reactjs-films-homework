import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieList from './components/MovieList/MovieList';
import Categories from './components/Categories/Caregories';
import requesGenre from "./modules/actions/requesGenre";
import {
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const [movieListView, setMovieListView] = useState(true)

  const handleMovieListView = () => setMovieListView(prev => !prev)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requesGenre());
  }, []);

  return (
    <div className="wrapper">
      <MovieDetailsPage />
      <Categories handleMovieListView={handleMovieListView} movieListView={movieListView}/>
      <Switch>
        <Route exact path="/"> <MovieList movieListView={movieListView}/></Route>
        <Route exact path="/:typeSearch"> <MovieList movieListView={movieListView}/></Route>
        <Route path="/genre/:id"><MovieList movieListView={movieListView}/></Route>
      </Switch>

    </div>
  )
}

export default App;
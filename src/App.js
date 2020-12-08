import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectorListFilms, selectorGenre } from "./modules/selectors/index";
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieList from './components/MovieList/MovieList';
import Categories from './components/Categories/Caregories';
import requesGenre from "./modules/actions/requesGenre";
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

const App = () => {
  const [movieListView, setMovieListView] = useState(true)
  const films = useSelector(state => selectorListFilms(state));
  const genre = useSelector(state => selectorGenre(state));

  let location = useLocation();

  const handleMovieListView = () => setMovieListView(prev => !prev)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requesGenre());
  }, []);

  return (
    <div className="wrapper">
      <MovieDetailsPage />
      <Categories location={location.pathname} handleMovieListView={handleMovieListView} movieListView={movieListView}/>
      <Switch>
        <Route exact path="/"> <MovieList films={films} genre={genre} movieListView={movieListView}/></Route>
        <Route exact path="/:typeSearch"> <MovieList films={films} genre={genre} movieListView={movieListView}/></Route>
        <Route path="/genre/:id"><MovieList films={films} genre={genre} movieListView={movieListView}/></Route>
      </Switch>

    </div>
  )
}

export default App;
import { connect } from 'react-redux';
import MovieList from '../components/MovieList/MovieList';
import getFilms from '../modules/actions/getFilms';

const mapStateToPops = (state) => {
  return {
    films: state.films,
    genre: state.genre
  }
}


const MovieListContainer = connect(mapStateToPops, dispatch => ({
  onGetilms: () => {
    dispatch(getFilms())
  }
}))(MovieList);

export default MovieListContainer;

import { connect } from 'react-redux';
import MovieList from '../components/MovieList/MovieList';
import getFilms from '../modules/actions/getFilms';
import { getListFilms, getGenre } from '../modules/selectors/index';

const mapStateToPops = (state) => {
  return {
    films: getListFilms(state),
    genre: getGenre(state),
  }
}


const MovieListContainer = connect(mapStateToPops, dispatch => ({
  onGetilms: () => {
    dispatch(getFilms())
  }
}))(MovieList);

export default MovieListContainer;

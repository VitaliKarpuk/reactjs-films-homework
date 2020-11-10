import { connect } from 'react-redux';
import searchFilms from '../modules/actions/searchFilms';
import SearchInput from '../components/SearchInput/SearchInput';



const SearchInputContainer = connect(null, dispatch => ({
  onSearchFilms: (title) => {
    dispatch(searchFilms(title))
  }
}))(SearchInput);

export default SearchInputContainer;

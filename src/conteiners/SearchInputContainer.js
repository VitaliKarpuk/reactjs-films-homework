import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput/SearchInput';
import searchFilms from '../modules/actions/searchFilms';



const SearchInputContainer = connect(null, dispatch => ({
  onSearchFilms: (title) => {
    dispatch(searchFilms(title))
  }
}))(SearchInput);

export default SearchInputContainer;

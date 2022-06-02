import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

// Image
import searchIcon from "../../images/search-icon.svg";

// styles
import { Wrapper, Content } from './SearchBar.css';
import { isPersistedState } from '../../helpers';

const SearchBar = ({setSearchTerm}) => {
  const [state, setState] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 800);

    return () => clearTimeout(timer);
  }, [state, setSearchTerm, setState]);// Prob Error

  useEffect(() => {
    const persistedSearch = isPersistedState("searchTerm")
    return persistedSearch && setState(persistedSearch)
  }, [])

  // Write to sessionStorage
  useEffect(() => {
    if(state.length >= 1) sessionStorage.setItem("searchTerm", JSON.stringify(state));
    if (state.length === 0) sessionStorage.removeItem("searchTerm");
  })
  return (
    <>
      <Wrapper>
          <Content>
              <img src={searchIcon} alt="search-icon" />
              <input type="text" placeholder="Search Movie" onChange={event => setState(event.currentTarget.value)} value={state} />
          </Content>
      </Wrapper>
    </>
  );
}

SearchBar.prototype = {
  setSearchTerm: PropTypes.string,
}

export default SearchBar;
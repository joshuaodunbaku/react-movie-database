import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types';

// Image
import searchIcon from "../../images/search-icon.svg";

// styles
import { Wrapper, Content } from './SearchBar.css';

const SearchBar = ({setSearchTerm}) => {
  const [state, setState] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 800);

    return () => clearTimeout(timer);
  }, [state]);// Prob Error
  return (
    <Wrapper>
        <Content>
            <img src={searchIcon} alt="search-icon" />
            <input type="text" placeholder="Search Movie" onChange={event => setState(event.currentTarget.value)} value={state} />
        </Content>
    </Wrapper>
  );
}

SearchBar.prototype = {
  setSearchTerm: PropTypes.string,
}

export default SearchBar
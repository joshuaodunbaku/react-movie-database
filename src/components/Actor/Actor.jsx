import React from 'react'
import PropTypes from "prop-types";
// Styles
import { Wrapper, Image } from './Actor.css';

const Actor = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p><i>{character}</i></p>
    </Wrapper>
  )
}

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Actor;
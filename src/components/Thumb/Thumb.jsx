import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

// Style
import { Image } from './Thumb.css'

const Thumb = ({image, movieId, clickable}) => {
  return (
    <div>
        {clickable ? (
          <Link to={`/${movieId}`}>
            <Image src={image} alt="movie-thumb" />
          </Link>
        ) : (
          <Image src={image} alt="movie-thumb" />
        )
      }
    </div>
  )
}

Thumb.prototype = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.func,
}

export default Thumb
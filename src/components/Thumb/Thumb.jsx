import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

// Style
import { Image } from './Thumb.css'

const Thumb = ({image, movieId, clickable, title}) => {
  return (
    <div>
        {clickable ? (
          <Link to={`/${movieId}`}>
            <Image src={image} alt="movie-thumb" title={title}/>
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
  clickable: PropTypes.bool,
}

export default Thumb;
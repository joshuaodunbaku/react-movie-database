import PropTypes from 'prop-types';
// Components
import Thumb from '../Thumb/Thumb';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE, } from '../../config';
// image
import NoImage from "../../images/no_image.jpg"
// Styles
import { Wrapper, Content, Text } from './MovieInfo.css';
import useWindowDimension from '../../Hooks/useWindowDimension';


const MovieInfo = ({movie}) => {
    const {browserWidth} = useWindowDimension();
    console.log(movie)
  return (
      <Wrapper backdrop={movie.backdrop_path} browserWidth={browserWidth} poster={movie.poster_path}>
          <Content>
              <Thumb image={
                  movie.poster_path 
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${(browserWidth > 768) ? movie.poster_path : movie.backdrop_path}`
                  : NoImage
              } clickable={false} alt="movie-thumb" />
              <Text>
                <h1>{movie.title}</h1>
                  <h3>Plot</h3>
                  <p>{movie.overview}</p>
                  <div className="movie-info">
                        <div className="rating-directors">
                            <div>
                            <h3>RATING</h3>
                            <div className="score center">
                                {movie.vote_average}
                                </div>
                            </div>
                            <div>
                                <div className="director">
                                    <h3>{movie.directors.length > 1 ? "DIRECTORS" : "DIRECTOR"}</h3>
                                    {movie.directors.map(director => {
                                        return <p key={director.credit_id}>{director.name}</p>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>{movie.genres.length > 1 ? "Genres" : "Genre"}</h3>
                            <p>{movie.genres.map(genre => {
                                return (`${genre.name} | `);
                            })}</p>
                        </div>
                        <div>
                            <h3>Casts</h3>
                            <p>{movie.actor.map(actor => {
                            return (((actor.order < 10) && (actor.gender <= 2) && `${actor.name}, `) || (actor.order === 10 && `${actor.name}.`))
                        })}</p>
                        </div>
                        <div className='released'>
                            <span><i>Released Date: {movie.release_date}.</i></span>
                        </div>
                  </div>
              </Text>
          </Content>
      </Wrapper>
  )
}

MovieInfo.prototype = {
    movie: PropTypes.object,
}

export default MovieInfo;
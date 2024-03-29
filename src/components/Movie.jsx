import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import PropTypes from "prop-types";
// Config 
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import Grid from "./Grid/Grid";
import BreadCrumb from './BreadCrumb/BreadCrumb';
import Spinner from "./Spinner/Spinner.jsx";
import MovieInfo from './MovieInfo/MovieInfo';
import MovieInfoBar from './MovieInfoBar/MovieInfoBar';
import Actor from './Actor/Actor';
import Footer from './Footer/Footer';

// Hook
import { useMovieFetch } from '../Hooks/useMovieFetch';
// Image
import NoImage from "../images/no_image.jpg";
const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) {
    return (
      <>
        <div>Something went Wrong <Link to="/">Home</Link></div>
      </>
    )
  };

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header="Actors">
        {movie.actor.map((actor) => {
          return <Actor key={actor.id} name={actor.name} character={actor.character} imageUrl={
            actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              : NoImage
          }
          />
        })}
      </Grid>
      <Footer />
    </>
  )
}

// Movie.prototype = {
//   movieId: PropTypes.number,
// }

export default Movie
import React from 'react';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImage from './HeroImage';
import Grid from './Grid/Grid';
import { Spinner } from './Spinner/Spinner.css';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';
import Footer from './Footer/Footer';

// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';
// Image
import NoImage from "../images/no_image.jpg";
import Thumb from './Thumb/Thumb';

const Home = () => {
  const {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch();
  if (error) return <div>{`Something Went Wrong ${error}`}</div>
  return (
    <>
      {(!searchTerm && state.results[0]) && <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview} />}
        <SearchBar setSearchTerm={setSearchTerm}/>


        <Grid header={searchTerm ? "Search Result:" : "Popular Movies"}>
          {state.results.map(movie => (
            <Thumb key={movie.id} clickable image={`${movie.poster_path ? IMAGE_BASE_URL+ POSTER_SIZE + movie.poster_path : NoImage}`} movieId={movie.id} />
          ))}
        </Grid>
        {loading && <Spinner/>}
        {state.page < state.total_pages && !loading && (
          <Button text="Load More" callback={() => setIsLoadingMore(true)}/>
        )}
        <Footer />

    </>
  )
}

export default Home
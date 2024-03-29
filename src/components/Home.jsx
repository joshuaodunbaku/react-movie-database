import React from 'react';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImage from './HeroImage';
import PlaceHolder from './HeroImage/PlaceHolder';
import Grid from './Grid/Grid';
import { Spinner } from './Spinner/Spinner.css';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';
import Footer from './Footer/Footer';

// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';
import useWindowDimension from '../Hooks/useWindowDimension';
// Image
import NoImage from "../images/no_image.jpg";
import Thumb from './Thumb/Thumb';

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();
  const { browserWidth } = useWindowDimension();
  if (error) return (
    <>
      <PlaceHolder />
      <div>Something Went Wrong</div>
    </>
  );
  return (
    <>
      {/* Hero Image */}
      {(!searchTerm && state.results[0])
        ? <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${(browserWidth > 768) ? state.results[0].backdrop_path : state.results[0].poster_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview} />
        : <PlaceHolder />}{/* There was an error on the Home page whenever the <Searchbar/> input field becomes active, the <SearchBar/> goes under the <Header/>. Tried everything I could think of, but to no resolve. Had to manipulate it this way */}

      <SearchBar setSearchTerm={setSearchTerm} />


      <Grid header={searchTerm ? "Search Result:" : "Popular Movies"}>
        {state.results.map(movie => (
          <Thumb title={movie.title} key={movie.id} clickable image={`${movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}`} movieId={movie.id} />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
      <Footer />
    </>
  )
}

export default Home;
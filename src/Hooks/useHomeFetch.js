import { useState, useEffect, useRef } from 'react';
// API
import API from "../API.js"

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export function useHomeFetch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);


  // Fetching from Database
  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState(prevState => ({
        ...movies,
        results: page > 1 ? [...prevState.results, ...movies.results] : [...movies.results]
      }));//Prob error
    } catch (error) {
      setError(true);
  }
    setLoading(false)
  }

  console.log(state);

  // Initial render and searc
  useEffect(() => {
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if(isLoadingMore) {
      setIsLoadingMore(false);
      return fetchMovies(state.page + 1, searchTerm)
    }
    return;
  }, [isLoadingMore, state.page, searchTerm]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
}
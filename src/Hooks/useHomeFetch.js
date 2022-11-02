import { useState, useEffect } from "react";
import { isPersistedState } from "../helpers.js";
// API
import API from "../API.js";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

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

      setState((prevState) => ({
        ...movies,
        results:
          page >= 1
            ? [...prevState.results, ...movies.results]
            : [...movies.results],
      })); //Prob error
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  console.log(state);

  // Initial render and searc
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");
      console.log(sessionState);
      if (sessionState) {
        console.log("Grabbing from the sessionStorage");
        setState(sessionState);
        return;
      }
    } else if (searchTerm === " ") {
      setError(true);
      return alert("Wrong Input");
    }
    console.log("Grabbing from API");
    setState(initialState);
    fetchMovies(1, searchTerm);
    return;
  }, [searchTerm]);

  // Load More
  useEffect(() => {
    if (isLoadingMore) {
      setIsLoadingMore(false);
      return fetchMovies(state.page + 1, searchTerm);
    }
    return;
  }, [isLoadingMore, state.page, searchTerm]);

  // Write to sessionStorage
  useEffect(() => {
    if (!searchTerm && state.results.length > 1)
      sessionStorage.setItem("homeState", JSON.stringify(state));
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
}

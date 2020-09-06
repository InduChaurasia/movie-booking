import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUpcomingMovies } from "../actions";
import ListMovies from "./MovieListing";

function UpcomingMovies() {
  const movies = useSelector((state) => state.upcomingMovieList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, []);

  return (
    <>
      <div className="row">
        <h3 className="col-sm-12 card-title text-center">Upcoming Movies</h3>
      </div>
      <hr />
      <ListMovies movieList={movies} movieType="upcoming movies" />
    </>
  );
}
export default UpcomingMovies;

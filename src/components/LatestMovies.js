import React, { useEffect } from "react";
import { useSelector,useDispatch} from "react-redux";
import { getLatestMovies } from "../actions";
import ListMovies from "./MovieListing";


function LatestMovies() {
  const movies = useSelector(state=> state.latestMovieList);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getLatestMovies())
  }, []);

  return (
    <>
      <div className="row">
        <h3 className="col-sm-12 card-title text-center">Latest Movies</h3>
      </div>
      <hr />
      <ListMovies movieList={movies} movieType="latest movies" />
    </>
  );
}

// const mapDispatchToProps = { getLatestMovies };
// const mapStateToProps = (state) => ({ movies: state.latestMovieList });
// LatestMovies = connect(mapStateToProps, mapDispatchToProps)(LatestMovies);

export default LatestMovies;

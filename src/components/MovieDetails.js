import React, { useEffect } from "react";
import { getMovieDetails } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../moviecard.css";

function MovieDetails(props) {
  let movie = useSelector((state) => state.movieDetail);
  let latestMovies = useSelector((state) => state.latestMovieList);
  let upcomingMovies = useSelector((state) => state.upcomingMovieList);
  let events = useSelector((state) => state.nearbyEvents);
  let today = new Date();
  let releaseDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const loadDetailsFromState = () => {
    let arr = getLoadedMoviesFromState();
    return filterMovie(arr);
  };

  const getLoadedMoviesFromState = () => {
    let arr = [];
    let mergedArr = arr.concat(
      latestMovies ? latestMovies : [],
      upcomingMovies ? upcomingMovies : [],
      events ? events : []
    );
    return mergedArr;
  };

  const filterMovie = (movies) => {
    let filteredMovies = movies.filter((m) => {
      return m._id == props.match.params.movieId;
    });

    let filteredMovie =
      filteredMovies && filteredMovies.length > 0 ? filteredMovies[0] : null;
    return filteredMovie;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    let arr = getLoadedMoviesFromState();
    if (!(arr && arr.length > 0)) {
      dispatch(getMovieDetails(props.match.params.movieId));
    }
  }, []);

  const getMovieDetailsView = (movie) => {
    if (movie) {
      return (
        <>
          <hr />

          <div className="row">
            <div className="col-sm-2"></div>

            <div className="col-sm-3 border border-secondary">
              <img src={movie.imageUrl} className="img-thumbnail" />
            </div>

            <div className="col-sm-4 border border-secondary">
             
              <br/><br/>
              <div className="col px-md-5">
                {movie.name} | <b> Releasing on </b>
                {releaseDate}
              </div>
              <hr/>
              <div className="col px-md-5">
                <b>Movie Duration :</b> 3 hrs | <b>Rating :</b> {movie.rate}
              </div>

              <hr/>
              <div className="col px-md-5">
                <b>Language :</b>  {movie.language}| <b>Type :</b>{movie.type}                
              </div>
              <br/>
            </div>
          </div>

          {props.match.params.movieType == "latest movies" && (
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-7 text-center border border-secondary">
                <Link className="btn btn-primary" to={`/book/${movie._id}`}>
                  Book Now
                </Link>
              </div>
            </div>
          )}
        </>
      );
    } else {
      return (
        <div className="card">
          loading movie {props.match.params.movieId} details.....
        </div>
      );
    }
  };

  if (getLoadedMoviesFromState().length > 0) {
    return getMovieDetailsView(loadDetailsFromState());
  } else {
    return getMovieDetailsView(movie);
  }
}

export default MovieDetails;

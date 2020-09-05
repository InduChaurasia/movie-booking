import React, { useState, useEffect } from "react";
import { getMovieDetails } from "../actions";
import { connect } from "react-redux";
import "../moviecard.css";

function MovieDetails(props) {
  let [movie] = useState();

  useEffect(() => {
    console.log("movie id......" + props.match.params.movieId);
    props.getMovieDetails(props.match.params.movieId);
  }, []);

  if (props.movie) {
    return (
      <>
        <div className="row">
          <h3 className="col-sm-12 card-title text-center">Movie Details</h3>
        </div>
        <hr/>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-3">
            <div className="card">
              <img
                className="card-img-top"
                src={props.movie.imageUrl}
                height="300"
                width="100"
              />
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">{props.movie.name}</h4>
              </div>
              <p className="card-text text-wrap">
                Language : {props.movie.language} <br /> Type :{" "}
                {props.movie.type} <br /> Rating : {props.movie.rate}
              </p>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="card">
        loading movie {props.match.params.movieId} details.....
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ movie: state.movieDetail });
const mapDispatchToProps = { getMovieDetails };

MovieDetails = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

export default MovieDetails;

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getLatestMovies } from "../actions";
import ListMovies from "./MovieListing";

function LatestMovies(props) {
  let [movies] = useState([]);
  useEffect(() => {
    props.getLatestMovies();
  }, []);

  return (
    <>
      <div className="row">
        <h3 className="col-sm-12 card-title text-center">Latest Movies</h3>
      </div>
      <hr />
      <ListMovies movieList={props.movies} movieType="latest movies" />{" "}
    </>
  );
}

const mapDispatchToProps = { getLatestMovies };
const mapStateToProps = (state) => ({ movies: state.latestMovieList });
LatestMovies = connect(mapStateToProps, mapDispatchToProps)(LatestMovies);

export default LatestMovies;

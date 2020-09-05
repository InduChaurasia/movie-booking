import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingMovies } from "../actions";
import ListMovies from "./MovieListing";

function UpcomingMovies(props) {
  let [movies] = useState([]);
  useEffect(() => {
    props.getUpcomingMovies();
  }, []);

  return (
    <>
      <div className="row">
        <h3 className="col-sm-12 card-title text-center">Upcoming Movies</h3>
      </div>
      <hr />
      <ListMovies movieList={props.movies} movieType="upcoming movies" />{" "}
    </>
  );
}

const mapStateToProps = (state) => ({ movies: state.upcomingMovieList });

const mapDispatchToProps = { getUpcomingMovies };
UpcomingMovies = connect(mapStateToProps, mapDispatchToProps)(UpcomingMovies);
export default UpcomingMovies;

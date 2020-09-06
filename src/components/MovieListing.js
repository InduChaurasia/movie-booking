import React from "react";
import { Link } from "react-router-dom";
import "../moviecard.css";

const ListMovies = (props) => {
  const createMovieItems = (props) => {
    return props.movieList.map((movie, i) => createMovieCard(props, movie, i));
  };

  const createMovieCard = (props, movie, index) => {
   
      return (
        <>
          <Link key={index} to={`/details/${movie._id}/${props.movieType}`}>
            <div className="card" key={index}>
              <img className="card-img-top" src={movie.imageUrl} /> <br/>
              {props.movieType == "latest movies" && <Link className="btn btn-primary" to={`/book/${movie._id}`}>Book Now</Link>}
            </div>            
          </Link>
        </>
      );
    
  };

  const createEmptyItems = (props) => {
    return (
      <div className="card">
        <p className="card-text">Loading {props.movieType}</p>
      </div>
    );
  };
  const movieItems = props.movieList
    ? createMovieItems(props)
    : createEmptyItems(props);

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="scrollcards">{movieItems}</div>
        </div>
      </div>
    </section>
  );
};
export default ListMovies;

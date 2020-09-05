import React from "react";
import { Link } from "react-router-dom";
import "../moviecard.css";

const ListMovies = (props) => {
  const createMovieItems = (props) => {
      return props.movieList.map((movie, i) => (
        <Link key={i} to={`/details/${movie._id}`}>
          <div className="card" key={i}>
            <img className="card-img-top" src={movie.imageUrl} />            
          </div>
        </Link>
      ));
    
  };

  const createEmptyItems = (props) => {
    return (
      <div className="card">
        <p className="card-text">Loading {props.movieType}</p>
      </div>
    );
  };

  console.log(props.movieList);
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

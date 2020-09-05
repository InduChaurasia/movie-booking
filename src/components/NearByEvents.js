import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getNearbyEvenat } from "../actions";
import ListMovies  from "./MovieListing";

function NearByEvents(props) {
  let [events] = useState([]);

  useEffect(() => {
    props.getNearbyEvenat();
  }, []);

  return <ListMovies movieList={props.events} movieType="nearby events" />;
}

const mapStateToProps = (state) => ({ events: state.nearbyEvents });
const mapDispatchToProps = { getNearbyEvenat };
NearByEvents = connect(mapStateToProps, mapDispatchToProps)(NearByEvents);

export default NearByEvents;

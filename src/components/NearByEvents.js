import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNearbyEvenat } from "../actions";
import ListMovies from "./MovieListing";

function NearByEvents() {
  const events = useSelector((state) => state.nearbyEvents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNearbyEvenat());
  }, []);

  return (
    <>
      <div className="row">
        <h3 className="col-sm-12 card-title text-center">Nearby Events</h3>
      </div>
      <hr />
      <ListMovies movieList={events} movieType="nearby events" />
    </>
  );
}
export default NearByEvents;

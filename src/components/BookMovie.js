import React, { useState } from "react";
import { connect } from "react-redux";

function BookMovie(props) {
  let [movieId] = useState(props.match.params.movieId);
  let [movieName] = useState(props.match.params.movieName);
  let [bookingDate, setBookingDate] = useState();
  let [showTiming, setShowTiming] = useState();
  let [noOfSeats, setNoOfSeats] = useState();
  let [isBooked, setBooked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooked(true);    
    console.log("handle submit ..." );
    console.log("booked ..." + isBooked);
    console.log("movieid : "+movieId);
    console.log("movieName : "+movieName);
  };

  const getBookingForm = () =>{
 
    return( <>
        <div className="row">
          <h3 className="col-sm-12 card-title text-center">Latest Movies</h3>
        </div>
        <hr />
        <form onSubmit={(event)=>handleSubmit(event)} className="col-lg-6 offset-lg-3">
          <div className="justify-content-center">
            <label>
              Booking Date :&nbsp;
              <input type="date" value={bookingDate} onChange={(event) => setBookingDate(event.value)} />
            </label>
            <br />
            <label>
              Show Timing :&nbsp;
              <select value={showTiming} onChange={(event) => setShowTiming(event.value)}>
                <option value="10:30AM">10:30AM</option>
                <option value="2:30PM">2:30PM</option>
                <option value="6:30PM">6:30PM</option>
                <option value="10:30PM">10:30Pm</option>
              </select>
            </label>
            <br />
            <label>
              No Of Seats :&nbsp;
              <input type="text" value={noOfSeats} onChange={(event) => setNoOfSeats(event.value)}/>
            </label>
            <br />
            <input type="submit" value="Book Ticket" />
          </div>
        </form>
      </>);


  }


  return getBookingForm();
}

const mapStateToProps = (state) => ({
  movieId: state.movieId,
  bookingDate: state.bookingDate,
  showTiming: state.showTiming,
  noOfSeats: state.noOfSeats,
  isBooked: state.isBooked
});

BookMovie = connect(mapStateToProps)(BookMovie);

export default BookMovie;

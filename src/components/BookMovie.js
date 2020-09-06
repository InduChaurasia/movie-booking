import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { setBookingDetails } from "../actions";
import { Form, Button } from "react-bootstrap";

function BookMovie(props) {
  let movieId = props.match.params.movieId;
  let [bookingDate, setBookingDate] = useState();
  let [showTiming, setShowTiming] = useState("10:30AM");
  let [noOfSeats, setNoOfSeats] = useState();
  let [isBooked, setBooked] = useState(false);
  let bookingDatails;
  const dispatch = useDispatch();

  useEffect(() => {
    bookingDatails = {
      bookingDate: bookingDate,
      showTiming: showTiming,
      noOfSeats: noOfSeats,
    };
    dispatch(setBookingDetails(bookingDatails));
  }, [isBooked]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooked(true);
  };

  const getBookingForm = () => {
    if (isBooked) {
      return <Redirect to={`/confirmation/${movieId}`} />;
    }
    return (
      <>
        <div className="row">
          <h3 className="col-sm-12 card-title text-center">Latest Movies</h3>
        </div>
        <hr />
        <Form
          onSubmit={(event) => handleSubmit(event)}
          className="col-lg-6 offset-lg-3"
        >
          <Form.Group controlId="bookingDate">
            <Form.Label>Booking Date</Form.Label>
            <Form.Control
              type="date"
              defaultValue="Mark"
              required
              value={bookingDate}
              onChange={(event) => setBookingDate(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="showTiming">
            <Form.Label> Show Timing</Form.Label>
            <Form.Control
              defaultValue="Mark"
              required
              as="select" defaultValue="10:30AM"
              value={showTiming}
              onChange={(event) => setShowTiming(event.target.value)}
            >
             
              <option value="10:30AM">10:30AM</option>
              <option value="2:30PM">2:30PM</option>
              <option value="6:30PM">6:30PM</option>
              <option value="10:30PM">10:30Pm</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="noOfSeats">
            <Form.Label> No Of Seats</Form.Label>
            <Form.Control
              type="number"
              defaultValue="Mark"
              required
              value={noOfSeats}
              onChange={(event) => setNoOfSeats(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Book Ticket
          </Button>
        </Form>
      </>
    );
  };

  const getConfirmationPage = () => {
    return (
      <>
        <div> booked ........</div>
      </>
    );
  };

  return getBookingForm();
}

// const mapStateToProps = (state) => ({
//   movieId: state.movieId,
//   bookingDate: state.bookingDate,
//   showTiming: state.showTiming,
//   noOfSeats: state.noOfSeats,
//   isBooked: state.isBooked,
// });

// BookMovie = connect(mapStateToProps)(BookMovie);

export default BookMovie;

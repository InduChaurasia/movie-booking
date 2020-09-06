import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import QRCode from "react-qr-code";

function BookingConfirmation(props) {
  let bookedTicket = useSelector((state) => state.bookedTicket);
  let latestMovies = useSelector((state) => state.latestMovieList);
  let movieId = props.match.params.movieId;
  let [qrCodeText, setQrCodeText] = useState(null);

  useEffect(() => {
    if (bookedTicket) {
      setQrCodeText(bookedTicket.showTiming+" "+bookedTicket.noOfSeats+" "+bookedTicket.bookingDate);
    }
  }, [bookedTicket]);

  const getSelectedMovie = (movies) => {
    if (movies) {
      let selectedMovie = movies.filter(function (movie) {
        return movie._id == movieId;
      });
      return selectedMovie[0].name;
    } else {
      return "";
    }
  };

  const getSeats = () => {
    var arr = [];
    for (let index = 1; index <= bookedTicket.noOfSeats; index++) {
      arr.push("G" + index);
    }
    return arr.toString();
  };

  return (
    <>
      {bookedTicket && qrCodeText && (
        <>
          <div className="row">
            <div className="col text-center">
              Congratulations you booking has been confirmed for{" "}
              <b> {getSelectedMovie(latestMovies)} </b>
            </div>
          </div>
          <hr />
          <div className="row border border-secondary">
            <div className="col-sm-6 text-center">
              <QRCode value={qrCodeText} />
            </div>

            <div className="col-sm-6">
              <br />
              <hr />
              <div className="col">
                Booking Date : {bookedTicket.bookingDate}
              </div>
              <div class="w-100"></div>
              <hr />
              <div className="col">Show timing : {bookedTicket.showTiming}</div>
              <div class="w-100"></div>
              <hr />
              <div className="col">
                <p className="text-break">No of Seats : {getSeats()}</p>
              </div>
              <hr />
            </div>
          </div>
        </>
      )}

      {!bookedTicket && (
        <div className="row text-center"> Something wen wrong......</div>
      )}
    </>
  );
}

export default BookingConfirmation;

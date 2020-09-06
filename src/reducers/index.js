const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'LATEST_MOVIES_RECEIVED':
          return { ...state, latestMovieList: action.movies}
      case 'UPCOMING_MOVIES_RECEIVED':
          return {...state, upcomingMovieList: action.movies}
      case 'NEARBY_EVENTS_RECEIVED' :
          return {...state, nearbyEvents: action.events}     
      case 'MOVIE_DETAILS_RECEIVED' :
          return {...state, movieDetail: action.detail}   
      case 'SET_BOOKING_DETAILS' :
          return {...state, bookedTicket:action.payload} 
      default: 
           return state;
    }

   };
   export default reducer;
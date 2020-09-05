export const getLatestMovies = () => ({
    type: 'GET_LATEST_MOVIES'
});

export const getUpcomingMovies = () => ({
    type: 'GET_UPCOMING_MOVIES'
});

export const getMovieDetails = (payload) => ({
    type: 'GET_MOVIE_DETAILS',
    payload
});

export const getNearbyEvenat = () => ({
    type: 'GET_NEARBY_EVENTS'
});


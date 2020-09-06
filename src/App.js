import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LatestMovies from './components/LatestMovies';
import UpcomingMovies from './components/UpcomingMovies';
import NearByEvents from './components/NearByEvents';
import MovieDetails from './components/MovieDetails';
import BookMovie from './components/BookMovie';
import BookingConfirmation from './components/BookingConfirmation';
import Page404 from './components/Page404';
import NavigationMenu from './components/NavigationMenu';


let App = () => (
  <div className="App">
          <Router>
            <div>
              <NavigationMenu/>
              <Switch>
                <Route exact  path="/"  component={LatestMovies} />
                <Route  path="/movies/latest" component={LatestMovies} />
                <Route  path="/movies/upcoming"  component={UpcomingMovies}/>
                <Route  path="/events" component={NearByEvents}/>
                <Route  path="/details/:movieId/:movieType" component={MovieDetails} />
                <Route  path="/book/:movieId" component={BookMovie} />
                <Route path="/confirmation/:movieId" component={BookingConfirmation}/>
                <Route component={Page404} />
              </Switch>
            </div>
          </Router>
        </div>
);

export default App;
# MurrayTracker

#### By [Brandon Fiebiger](https://github.com/brandonfiebiger), [Kurt Miller](https://github.com/kmiller9393) and [Jesse Mcfadden](https://github.com/JesseMcBrennan)

### Project

MurrayTracker is an application that utilizes The Movie Database API and displays all of Bill Murray's top movies. This web application was built using React, Redux, Router along with a PostgreSQL backend database. We used Waffle.io to outline the project and manage our team's workflow. Jest and Enzyme was used for testing.

#### Getting Started

Make sure you have PostgreSQL installed on your machine. If you don't, download it [here](https://www.postgresql.org/download/).

##### Clone the server repo:

`git clone https://github.com/turingschool-examples/movie-tracker`

##### Then:

`cd movie-tracker`

##### Then run:

`npm install && npm start`

##### To get the front-end up and running clone this repo:

`git clone https://github.com/kmiller9393/movie-tracker-client.git`

##### Then:

`cd movie-tracker-client`

##### Then run:

`npm install`

##### Then start the application:

`npm start`

#### User Interface

Upon page load, the user has access to the entire library of Murray films. By clicking a card, the user sees an overview of the film, date it was released, and rating. If the user chooses to 'favorite' the film and they are not logged in, they will be prompted to sign in. Once signed in, a user has the ability to favorite a movie, adding the favorite to the favorites page. After selecting 'favorites', the user sees all of their favorited movie. By clicking 'unfavorite', they remove the favorited movie from their favorites page.

### MurrayTracker in Action

<img src="https://github.com/kmiller9393/movie-tracker/blob/master/UI.gif">

#### Landing Page

<img src="https://github.com/kmiller9393/movie-tracker/blob/master/LandingPage.png">

#### Sign In Page

<img src="https://github.com/kmiller9393/movie-tracker/blob/master/SignInPage.png">

#### Favorites Page

<img src="https://github.com/kmiller9393/movie-tracker/blob/master/FavoritesPage.png">

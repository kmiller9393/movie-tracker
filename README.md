# MurrayTracker

#### By Brandon 'Bools' Fiebiger, Kurt 'Kurious Console Log' Miller, and Jesse Mcfadden

### Project

MurrayTracker is a graphical interface for the Movie-Tracker database that displays all of Bill Murray's fine work. This web application was built using React, Redux, Router along with a Postgres backend database. We used Waffle.io to outline the project and got manage work.

We used Enzyme and Jest to build out our testing suite. 

#### User Interaction

Upon pageload, the user has access to the entire library of Murray films. By clicking a card, the user sees an overview of the film, date it was released, and rating. If the user chooses to 'favorite' the film and they are not logged in, they will be prompted to sign in. Once signed in, a user has the ability to favorite a movie, adding the favorite to the favorites page. After selecting 'favorites', the user sees all of their favorited movied. By clicking 'unfavorite', they remove the favorited movie from their favorites page. 


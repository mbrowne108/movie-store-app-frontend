# Phase 3 Project - Front End

# Generic Video Rental Store App

This is an app to display and keep track of in-stock and rented videos at a generic store, definitely not inspired by any other historical chain video store. In it you can also add new movies to the collection.

## Purpose of the App

This is the culmination of a Flatiron School phase teaching Ruby, Active Record, and Sinatra. It also utilizes React knowledge from previous phases (React back end sold separately)

## Technologies used

As mentioned above, this is the culmination of my Flatiron School knowledge to date. In this project I use the following:

    1. CSS
    2. HTML/JSX
    3. React
    4. Ruby
    5. Active Record
    6. Sinatra

## Front End (React)
To start the backend server, run : ``npm start`` The server will be hosted on [http://localhost:3000](http://localhost:3000)

The front end consists of React components fetching data from our JSON API, using fetch requests to perform CRUD actions.

### READ
- #### GET: ``useEffect`` on the ``/movies`` and ``/genres`` tables reads all data from the API.

### UPDATE
- #### PATCH: Clicking on the [Rent] button under each movie updates that movie, specifically whether or not it is currently rented.

### CREATE
- #### POST: Filling out the [New Movie Form] posts a new movie to the database with title, genre, and rented automatically set to false.

### DELETE
- #### DELETE: licking on the [Delete] button under each movie deletes that movie.

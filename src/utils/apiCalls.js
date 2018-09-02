import { key } from './variables';

export const fetchMurrayMovies = async () => {
  const uncleanMurrayData = [];
  for (let i = 1; i < 5; i++) {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=' +
        key +
        '&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=' +
        i +
        '&with_people=1532'
    );
    const fetchedMurrayData = await response.json();
    uncleanMurrayData.push(fetchedMurrayData);
  }
  return uncleanMurrayData;
};

export const fetchUserData = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({ password, email }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('Invalid Email or Password');
  }
};

export const setUserData = async (name, email, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      body: JSON.stringify({ name, password, email }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await response.json();
  } catch (error) {
    throw new Error('Email Already Exists');
  }
};

export const addMovieToDatabase = async (user, movie) => {
  await fetch('http://localhost:3000/api/users/favorites/new', {
    method: 'POST',
    body: JSON.stringify({
      movie_id: movie.movie_id,
      user_id: user.id,
      title: movie.title,
      poster_path: movie.image,
      release_date: movie.release,
      vote_average: movie.vote_average,
      overview: movie.overview
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const deleteMovieFromDatabase = async (user, movie) => {
  const url = `http://localhost:3000/api/users/${user.id}/favorites/${
    movie.movie_id
  }`;
  await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({ user_id: user.id, movie_id: movie.movie_id }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const getUserFavorites = async id => {
  const url = `http://localhost:3000/api/users/${id}/favorites`;
  const response = await fetch(url);
  const result = await response.json();
  return result.data;
};

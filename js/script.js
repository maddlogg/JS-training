"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let lastMovie = prompt("Один из последних просмотренных фильмов", ""),
        movieScore = prompt("На сколько оцените его", "");

      if (
        lastMovie != null &&
        movieScore != null &&
        lastMovie != "" &&
        movieScore != "" &&
        lastMovie.length < 50
      ) {
        personalMovieDB.movies[lastMovie] = movieScore;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
      10;
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let favouriteGenres = prompt(
        `Введите ваши любимые жанры через запятую`
      ).toLowerCase();
      if (favouriteGenres != null && favouriteGenres != "") {
        personalMovieDB.genres = favouriteGenres.split(", ");
        personalMovieDB.genres.sort();
      } else {
        i--;
      }
    }
    personalMovieDB.genres.forEach((genre, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${genre}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB);

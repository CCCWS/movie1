import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "../App.css";

function Home() {
  const url =
    "https://yts.mx/api/v2/list_movies.json?&limit=50&sort_by=like_count&minimum_rating=7";
  const [loading, setLoading] = useState([true]);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (await fetch(url)).json();
    // const json = await response.json();
    setMovie(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  // useEffect(() => {
  //   fetch(
  //     "https://yts.mx/api/v2/list_movies.json?&limit=50&sort_by=like_count&minimum_rating=7"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMovie(json.data.movies);
  //       setLoading(false);
  //     });
  // }, []);

  function ratingAsc() {
    const movie2 = [...movie];
    let sortMovie = movie2.sort(function (a, b) {
      return b.rating - a.rating;
    });

    setMovie(sortMovie);
  }

  function ratingDesc() {
    const movie2 = [...movie];
    let sortMovie = movie2.sort(function (a, b) {
      return a.rating - b.rating;
    });
    setMovie(sortMovie);
  }

  function likeUser() {
    getMovie();
  }

  // useEffect(() => {
  //   console.log("test", movie);
  // }, [movie]);

  const tes1t = movie.map((data) => data.title);

  console.log(movie);
  return (
    <>
      {" "}
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <>
          <h1>MOVIE TOP {movie.length}</h1>
          <>
            <button onClick={likeUser}>좋아요 순 🔺</button>
            <button onClick={ratingAsc}>점수 높은순 🔺</button>
            <button onClick={ratingDesc}>점수 낮은순 🔻</button>
          </>
          <div className="movie">
            {movie.map((movie) => (
              <Movie
                id={movie.id}
                key={movie.id}
                image={movie.medium_cover_image}
                url={movie.url}
                title={movie.title}
                rating={movie.rating}
                genres={movie.genres}
                summary={movie.summary}
                year={movie.year}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Home;

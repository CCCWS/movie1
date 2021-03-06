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

  return (
    <>
      {" "}
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <>
          <h1>MOVIE TOP {movie.length}</h1>
          <>
            <button onClick={likeUser}>ėĸėė ė đē</button>
            <button onClick={ratingAsc}>ė ė ëėė đē</button>
            <button onClick={ratingDesc}>ė ė ëŽėė đģ</button>
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

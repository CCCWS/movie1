import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Detail.css";

function Detail() {
  const { id, title } = useParams(); //app.js에서 결로로 지정한 값"/movie/:id/:title"
  const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
  const getMovie = async () => {
    const json = await (await fetch(url)).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState([true]);

  // const test = movie.genres.map((data) => {
  //   console.log(data);
  // });

  useEffect(() => {
    getMovie();
  }, []);

  function Youtube() {
    return (
      <iframe
        width="500px"
        height="300px"
        src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
        title="YouTube video player"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <>
      <Link to="/">Go Home</Link>
      <h1>{title}</h1>
      <hr />
      <div className="infoBox">
        <Youtube />
        <div className="info">
          <div>평점 : {movie.rating}</div>
          <div>상영시간 : {movie.runtime}</div>
          <div>좋아요 : {movie.like_count}</div>
          <div>관람등급 : {movie.mpa_rating}</div>
        </div>
      </div>
      {loading ? (
        <h1>Loding</h1>
      ) : (
        <ul>
          {movie.genres.map((genres) => (
            <li className="movieGenres" key={genres}>
              {genres}
            </li>
          ))}
        </ul>
        /* 굳이 ol을  삼항연산자에 넣는 이유 : Loading가 false가 되는 시점은 json 데이터를 모두 받아왔다는 의미
            데이터가 있으므로 map을 데이터를 받아와 실행할 수 있지만
            밖에 있을경우 데이터를 받기전에 map이 동작하기 때문에 데이터가 없으므로 오류발생
            React는 렌더링이 화면에 커밋 된 후에야 모든 효과를 실행 */
      )}
      <h2>{movie.description_full}</h2>
    </>
  );
}

export default Detail;

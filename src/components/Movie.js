import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//화면 새로고침 없이 페이지 이동, App.js에서 적은 경로 입력
//<a>로 직접적인 파일경로를 적으면 화면 새로고침됨

function Movie({
  year,
  id,
  image,
  url,
  title,
  rating,
  genres,
  summary, //부모로부터 받아올 property
}) {
  // const test = .findIndex((i) => i.title == "Inception");
  return (
    <>
      <div className="movieDiv">
        <img src={image} alt="image" />
        <div>
          <Link className="title" to={`/movie1/${id}/${title}`}>
            {title}
          </Link>
          {/* <a className="movieTitle" href={url}>
          {title}
        </a> */}
          <br />
          {/* <div className="summary">{summary}</div> */}
          {year}
          <br />
          <ul>
            {genres.map((genres) => (
              <li className="genres" key={genres}>
                {genres}
              </li>
            ))}
          </ul>
        </div>

        {/* <p className="movieSummary">{summary}</p> */}
        <div className="rating">
          <div className="score">{rating}</div>
        </div>
      </div>
    </>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

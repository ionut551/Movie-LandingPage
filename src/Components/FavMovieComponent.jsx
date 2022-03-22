import "../CSS/FavMovieComponent.css";
import Cookies from "js-cookie";

export function FavMovieComponent(props) {
  function deletMovie() {
    Cookies.remove(props.title);

    let newMovieList = [];
    props.movieList.map((movie) => {
      if (movie.id !== props.id) {
        newMovieList.push(movie);
      }
    });
    props.setMovieList(newMovieList);
    console.log("delete a movie");
  }

  return (
    <>
      <div className="info-wrapper">
        <div className="info-wrapper-image">
          <img src={props.img} />
        </div>
        <button className="remove-button" onClick={() => deletMovie()}>
          x
        </button>
        <div className="info-wrapper-properties">
          <p className="info-wrapper-title-year">
            {props.title} ({props.year})
          </p>
          <p className="info-wrapper-genre">
            Genre: <span>{props.genre}</span>
          </p>
          <p className="info-wrapper-actors">
            Actors: <span>{props.actors}</span>
          </p>
          <p className="info-wrapper-runtime">
            Runtime: <span>{props.runtime}</span>
          </p>
          <p className="info-wrapper-ratings">
            IMDB rating: <span>{props.imdbRating}</span> / Metascore:{" "}
            <span>{props.metascore}</span>
          </p>
          <p className="info-wrapper-awards">
            Awards: <span>{props.awards}</span>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

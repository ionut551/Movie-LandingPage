import "../CSS/MovieInfo.css";
import React from "react";
import ReactDOM from "react-dom";
import { useRef } from "react";
import Cookies from "js-cookie";

export function MovieInfo(props) {
  const addButtonRef = useRef();

  if (props.display == "none") return null;

  function addMovie() {
    //create a cookie for it
    // Cookies.set('name', 'value')

    Cookies.set(props.info.Title, JSON.stringify(props.info));

    //add movie
    props.setFavMovies({
      image: props.info.Poster,
      title: props.info.Title,
      year: props.info.Year,
      genre: props.info.Genre,
      actors: props.info.Actors,
      runtime: props.info.Runtime,
      imdbRating: props.info.imdbRating,
      metascore: props.info.Metascore,
      about: props.info.About,
      awards: props.info.Awards,
      id: props.id,
      cookieName: props.info.Title,
    });
  }

  return ReactDOM.createPortal(
    <>
      <div className="container-overlay"></div>
      <button className="close-modal" onClick={() => props.setDisplay("none")}>
        X
      </button>
      <div className="container-info">
        <input
          ref={addButtonRef}
          type="button"
          onClick={() => {
            addMovie();
          }}
          className="container-addButton"
          value="+"
        />
        <div>
          <img className="container-info-old-image" src={props.info.Poster} />
          <p className="container-info-old-title-year">
            {props.info.Title} ({props.info.Year})
          </p>
        </div>
        <div className="container-info-new">
          <p>
            Genre: <span>{props.info.Genre}</span>
          </p>
          <p>
            Actors: <span>{props.info.Actors}</span>
          </p>
          <p>
            Runtime: <span>{props.info.Runtime}</span>
          </p>
          <p>
            IMDB rating: <span>{props.info.imdbRating}</span> / Metascore:{" "}
            <span>{props.info.Metascore}</span>
          </p>
          <p>
            About: <span>{props.info.Plot}</span>
          </p>
          <p>
            Awards: <span>{props.info.Awards}</span>
          </p>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

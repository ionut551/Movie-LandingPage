import "../CSS/Wishlist.css";
import { FavMovieComponent } from "./FavMovieComponent";
import { useState, useEffect } from "react";

export function Wishlist(props) {
  const [movieList, setMovieList] = useState([]);
  let isAdded = false;

  useEffect(() => {
    //check if we have a value in favMovies
    if (props.favMovies != []) {
      // check if we have a value in the array to compare
      // or save the first movie
      if (movieList == "") {
        setMovieList([props.favMovies]);
      } else {
        // if there is a value in the movie string
        // we check if it's the same as the one we want to add
        movieList.map((movie) => {
          if (props.favMovies.id === movie.id) {
            isAdded = true;
          }
        });
        // if we didn't find the movie in the array
        // we haven't changed the value of isadded and we can add in string
        if (!isAdded) {
          setMovieList([...movieList, props.favMovies]);
        }
      }
    }
  }, [props.favMovies]);

  if (props.openModal == "none") return null;

  return (
    <>
      <div className="wishlist-container-overlay"></div>
      <button
        className="close-wishlist-modal"
        onClick={() => props.setOpenModal("none")}
      >
        X
      </button>
      <div className="wishlist-container-info">
        <div className="wishlist-header">
          <p>Your Wishlist</p>
        </div>

        <div className="favMovie-wrapper">
          {props.favMovies != "" ? (
            movieList.map((movie) => {
              return (
                <FavMovieComponent
                  img={movie.image}
                  title={movie.title}
                  year={movie.year}
                  key={movie.id + movie.year}
                  imdbRating={movie.imdbRating}
                  metascore={movie.metascore}
                  runtime={movie.runtime}
                  genre={movie.genre}
                  awards={movie.awards}
                  id={movie.id}
                  setMovieList={setMovieList}
                  movieList={movieList}
                />
              );
            })
          ) : (
            <p>You have not selected a movie</p>
          )}
        </div>
      </div>
    </>
  );
}

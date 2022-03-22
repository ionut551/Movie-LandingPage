import "../CSS/CardWrapper.css";
import { MovieCard } from "./MovieCard";

export function CardWrapper(props) {
  return (
    <div className="display-card">
      {props.movies != undefined ? (
        props.movies.map((movie) => {
          return (
            <MovieCard
              img={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              key={`${movie.Title}+${movie.Year}`}
              id={movie.imdbID}
              setFavMovies={props.setFavMovies}
              favMovies={props.favMovies}
            />
          );
        })
      ) : (
        <p className="error">Not found</p>
      )}
    </div>
  );
}

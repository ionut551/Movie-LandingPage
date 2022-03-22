import "../CSS/MovieCard.css";
import { useState } from "react";
import { MovieInfo } from "./MovieInfo";

export function MovieCard(props) {
  const [details, setDetails] = useState("none");
  const [moreDetails, setMoreDetails] = useState("");

  async function moreInfo() {
    let result = await fetch(
      `https://www.omdbapi.com/?i=${props.id}&apikey=f01bff5d`
    );
    let data = await result.json();
    setDetails("block");
    setMoreDetails(data);
  }
  return (
    <div className="card">
      <img className="card-image" src={props.img} />
      <p>{props.title}</p>
      <p>{props.year}</p>
      <button className="card-moreDetails" onClick={() => moreInfo()}>
        More details...
      </button>

      <MovieInfo
        display={details}
        setDisplay={setDetails}
        info={moreDetails != "" ? moreDetails : { title: "title" }}
        setFavMovies={props.setFavMovies}
        favMovies={props.favMovies}
        id={props.id}
      />
    </div>
  );
}

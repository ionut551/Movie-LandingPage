import "../CSS/SearchBar.css";
import { fetchData } from "../function/fetchData";
import { useRef, useEffect, useState } from "react";
import { Wishlist } from "./Wishlist";

export function SearchBar(props) {
  const titletRef = useRef();
  const movieTypeRef = useRef();
  const seriesTypeRef = useRef();
  const buttonRef = useRef();
  let searchType = "";
  const [openModal, setOpenModal] = useState("none");

  useEffect(() => {
    titletRef.current.value = "war";
    searchType = "movie";
    getUserSearch();
  }, []);

  async function getUserSearch() {
    //stop the function if the user  has not entered a title
    if (titletRef.current.value === "" || titletRef.current.value === " ") {
      titletRef.current.style.border = "2px solid red";
      return;
    } else {
      titletRef.current.style.border = "none";
    }

    // stop the function if the user has not selected one of the two options
    if (searchType === "") {
      movieTypeRef.current.style.outline = "2px solid red";
      seriesTypeRef.current.style.outline = "2px solid red";
      return;
    } else {
      movieTypeRef.current.style.outline = "none";
      seriesTypeRef.current.style.outline = "none";
    }

    let search = titletRef.current.value;
    let url = `https://www.omdbapi.com/?s=${search}&type=${searchType}&apikey=f01bff5d`;
    let result = await fetchData(url);
    props.setMovies(result.Search);
  }

  return (
    <>
      <div className="container">
        <div className="container-options">
          <p className="container-title">Title:</p>
          <input
            className="container-input-search"
            ref={titletRef}
            type="text"
          ></input>
          <br />
          <p className="container-type">Type:</p>
          <input
            ref={movieTypeRef}
            className="container-radio-input"
            type="radio"
            onClick={(e) => {
              searchType = e.target.value;
            }}
            value="movie"
            name="userSearch"
          ></input>
          <label className="container-label">Movie</label>
          <input
            ref={seriesTypeRef}
            className="container-radio-input"
            type="radio"
            onClick={(e) => {
              searchType = e.target.value;
            }}
            value="series"
            name="userSearch"
          ></input>
          <label className="container-label">Series</label>
        </div>
        <div className="container-button">
          <button ref={buttonRef} onClick={() => getUserSearch()}>
            Search
          </button>
        </div>
        <div className="container-favButton">
          <button
            onClick={() => {
              setOpenModal("block");
            }}
          >
            Wishlist⭐
          </button>
        </div>
      </div>
      <Wishlist
        openModal={openModal}
        setOpenModal={setOpenModal}
        favMovies={props.favMovies}
      />
    </>
  );
}

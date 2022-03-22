import "./CSS/App.css";
import { useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import { CardWrapper } from "./Components/CardWrapper";

function App() {
  const [favMovies, setFavMovies] = useState([]);
  const [movies, setMovies] = useState();

  return (
    <>
      <div className="page">
        <SearchBar setMovies={setMovies} favMovies={favMovies} />
        <CardWrapper
          movies={movies}
          favMovies={favMovies}
          setFavMovies={setFavMovies}
        />
      </div>
    </>
  );
}

export default App;

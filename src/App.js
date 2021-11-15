import { useState, useEffect } from "react";

import "./App.css";

import NavBar from "./NavBar";
import MovieContent from "./MovieContent";
import BigSearch from "./BigSearch";
function App() {
  const [ishome, setishome] = useState(true);
  const [query, setquery] = useState("");
  const [moviedata, setmoviedata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);

  async function getMovieList() {
    let url = "https://www.omdbapi.com/?apikey=8a501eb9&s=" + query;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setmoviedata(data);
      });
  }
  useEffect(() => {
    console.log("you search for", query);
    getMovieList();
  }, [query]);
  return (
    <>
      <NavBar
        homenavbar={ishome}
        setIsHome={setishome}
        showWishlist={showWishlist}
        setShowWishlist={setShowWishlist}
        insertquery={(thequery) => setquery(thequery)}
        searchButtonClicked={() => {
          setishome(false);
          setLoading(true);
          setShowWishlist(false);
        }}
      />
      {showWishlist ? (
        <div>
          <h1>wishlist</h1>
          <button className="btn btn-primary" onClick={() => setShowWishlist(false)}>
            back
          </button>
          {wishlist.map((element) => {
            return <div>{element.Title}</div>;
          })}
        </div>
      ) : ishome ? (
        <BigSearch
          insertquery={(thequery) => setquery(thequery)}
          searchButtonClicked={() => {
            setishome(false);
            setLoading(true);
            setShowWishlist(false);
          }}
        />
      ) : loading ? (
        <div>loading</div>
      ) : (
        <MovieContent moviedata={moviedata} wishlist={wishlist} setWishlist={setWishlist} />
      )}
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
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

  async function getMovieList(query) {
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
    getMovieList(query);
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
      <div className="m-5">
        {showWishlist ? (
          <>
            <h1>wishlist</h1>
            <button className="btn btn-primary" onClick={() => setShowWishlist(false)}>
              back
            </button>
            {wishlist.map((element, idx) => {
              return (
                <div className="card w-50 m-5">
                  <div className="card-body d-flex w-75" key={idx}>
                    <div className="w-25">
                      <img src={element.Poster} className=" rounded img-fluid" alt="movie poster" />
                    </div>
                    <div className="px-4">
                      <h3>{element.Title}</h3>
                      <p>{element.Type}</p>
                      <p>{element.Year}</p>
                    </div>
                  </div>

                  <button
                    className="btn"
                    onClick={() => {
                      setWishlist(
                        wishlist.filter((movie) => {
                          return movie !== element;
                        })
                      );
                    }}
                  >
                    <BsHeartFill />
                  </button>
                </div>
              );
            })}
          </>
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
      </div>
    </>
  );
}

export default App;

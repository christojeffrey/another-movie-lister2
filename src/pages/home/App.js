import { useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import "./../../styles/App.css";

import NavBar from "../../components/NavBar";
import MovieContent from "../movies/MovieContent";
import BigSearch from "../../components/BigSearch";
import { Link } from "react-router-dom";

function App() {
  const [ishome, setishome] = useState(true);
  const [query, setquery] = useState("");
  const [moviedata, setmoviedata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState(JSON.parse(window.localStorage.getItem("wishlist")) || []);
  const [showWishlist, setShowWishlist] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

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
        <BigSearch
          insertquery={(thequery) => setquery(thequery)}
          searchButtonClicked={() => {
            setishome(false);
            setLoading(true);
            setShowWishlist(false);
          }}
        />
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";

const MovieContent = (props) => {
  console.log(props.moviedata);
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [movieDetailLoading, setMovieDetailLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);

  async function getMovieInfo(movieID) {
    let url = "https://www.omdbapi.com/?apikey=8a501eb9&i=" + movieID;
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("movie info");
        console.log(data);

        return data;
      });
  }
  useEffect(() => {
    setMovieDetailLoading(false);
  }, [movieDetail]);
  async function movieDetailContent(MovieID) {
    setShowMovieDetail(true);
    setMovieDetailLoading(true);
    setMovieDetail(await getMovieInfo(MovieID));
  }
  if (props.moviedata.Response === "False") {
    return <div>{props.moviedata.Error}</div>;
  } else {
    return(

      <div>
        <h1>Total Result(s) {props.moviedata.totalResults}</h1>

        {props.moviedata.Search.map((element, idx) => {
          return (
            <div className="card w-50 m-5">
              <div className="card-body d-flex w-75" key={idx} onClick={() => movieDetailContent(element.imdbID)}>
                <div className="w-25">
                  <img src={element.Poster} alt="movie poster" className=" rounded img-fluid" />
                </div>
                <div className="px-4">
                  <h3>{element.Title}</h3>
                  <p>{element.Type}</p>
                  <p>{element.Year}</p>
                </div>
              </div>
              {props.wishlist.includes(element) ? (
                <button
                className="btn"
                onClick={() => {
                  props.setWishlist(
                    props.wishlist.filter((movie) => {
                      return movie !== element;
                    })
                    );
                  }}
                  >
                  <BsHeartFill />
                </button>
              ) : (
                <button
                className="btn"
                onClick={() => {
                  props.setWishlist([...props.wishlist, element]);
                }}
                >
                  <BsHeart />
                </button>
              )}
            </div>
          );
        })}
      </div>
    )
    );
  }
};

export default MovieContent;

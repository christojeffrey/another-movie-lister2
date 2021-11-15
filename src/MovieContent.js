import { useState, useEffect } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";

const MovieContent = (props) => {
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [movieDetailLoading, setMovieDetailLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState([]);

  async function getMovieInfo(movieID) {
    let url = "https://www.omdbapi.com/?apikey=8a501eb9&i=" + movieID;
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("movie info");
        console.log(data);
        setMovieDetailLoading(false);
        return data;
      });
  }

  async function movieDetailContent(MovieID) {
    setShowMovieDetail(true);
    setMovieDetailLoading(true);
    setMovieDetail(await getMovieInfo(MovieID));
  }
  if (props.moviedata.Response === "False") {
    return <div>{props.moviedata.Error}</div>;
  } else {
    return showMovieDetail ? (
      movieDetailLoading ? (
        <div>movie detail is loading</div>
      ) : (
        <div>
          <h1>Movie Detail</h1>
          <button onClick={() => setShowMovieDetail(false)}>back</button>
          {movieDetail.Title}
        </div>
      )
    ) : (
      <div>
        <h1>search Result</h1>

        {props.moviedata.Search.map((element, idx) => {
          return (
            <div className="card w-75 m-5">
              <div className="card-body" key={idx} onClick={() => movieDetailContent(element.imdbID)}>
                <h3>{element.Title}</h3>
                <p>{element.Type}</p>
                <p>{element.Year}</p>
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
    );
  }
};

export default MovieContent;

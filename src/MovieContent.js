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
    return showMovieDetail ? (
      movieDetailLoading ? (
        <div>movie detail is loading</div>
      ) : (
        <div>
          <div className="d-flex">
            <button
              className="btn btn-info mx-3"
              onClick={() => {
                setShowMovieDetail(false);
                setMovieDetailLoading(true);
              }}
            >
              back
            </button>
            <h3>Movie Detail</h3>
          </div>
          <div className="m-5">
            {console.log("movie detail ", movieDetail)}
            <img src={movieDetail.Poster}></img>
            <h1>{movieDetail.Title}</h1>
            actors : {movieDetail.Actors} <br />
            award : {movieDetail.Awards}
            <br />
            box office : {movieDetail.BoxOffice}
            <br />
            country : {movieDetail.Country}
            <br />
            genre : {movieDetail.Genre}
            <br />
            language : {movieDetail.Language}
            <br />
            plot : {movieDetail.Plot}
            <br />
            runtime : {movieDetail.Runtime}
            <br />
            year : {movieDetail.Year}
            <br />
            Rated : {movieDetail.Rated}
            <br />
            {movieDetail.Ratings.map((element, idx) => {
              return (
                <div>
                  {element.Source} : {element.Value}
                </div>
              );
            })}
          </div>
        </div>
      )
    ) : (
      <div>
        <h1>Total Result(s) {props.moviedata.totalResults}</h1>

        {props.moviedata.Search.map((element, idx) => {
          return (
            <div className="card w-50 m-5">
              <div className="card-body d-flex w-75" key={idx} onClick={() => movieDetailContent(element.imdbID)}>
                <div className="w-25">
                  <img src={element.Poster} className=" rounded img-fluid" />
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
    );
  }
};

export default MovieContent;

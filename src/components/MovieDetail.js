const MovieDetailComponent = () => {
  return (
    <>
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
          <img src={movieDetail.Poster} alt="movie poster"></img>
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
    </>
  );
};

export default MovieDetailComponent;

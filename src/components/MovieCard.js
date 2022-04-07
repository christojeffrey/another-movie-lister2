const MovieCardComponent = () => {
  return (
    <>
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
    </>
  );
};

export default MovieCardComponent;

const Wishlist = () => {
  return (
    <>
      <h1>wishlist</h1>
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
    </>
  );
};

export default Wishlist;

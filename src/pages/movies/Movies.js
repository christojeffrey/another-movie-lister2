// halaman utama page movies
const Movies = ({ query }) => {
  return (
    <div>
      <h1>testing</h1>
      ini halaman utama page movies
      <MovieContent moviedata={moviedata} wishlist={wishlist} setWishlist={setWishlist} />
    </div>
  );
};

export default Movies;

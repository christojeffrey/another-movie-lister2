import { useState } from "react";
const NavBar = (props) => {
  console.log(props.homenavbar);
  let [queryword, setqueryword] = useState("");
  let [placeholder, setPlaceHolder] = useState("frog");

  return (
    <div className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      {props.homenavbar && !props.showWishlist ? (
        <h1>Another Movie Lister 2</h1>
      ) : (
        <>
          <button
            className="btn btn-info"
            onClick={() => {
              props.setIsHome(true);
              props.setShowWishlist(false);
            }}
          >
            click this to go to home
          </button>
          <h1>Another Movie Lister 2</h1>
          <form>
            <input placeholder={placeholder} type="text" value={queryword} onChange={(e) => setqueryword(e.target.value)}></input>
            <button
              type="submit"
              className="btn btn-info"
              onClick={(e) => {
                e.preventDefault();
                if (queryword === "") {
                  setPlaceHolder("tidak boleh kosong");
                } else {
                  console.log("query word ", queryword);
                  props.insertquery(queryword);
                  props.searchButtonClicked();
                }
              }}
            >
              search
            </button>
          </form>
        </>
      )}
      {props.showWishlist ? (
        <></>
      ) : (
        <button
          className="btn btn-info"
          onClick={() => {
            props.setShowWishlist(true);
          }}
        >
          show Wishlist
        </button>
      )}
    </div>
  );
};

export default NavBar;

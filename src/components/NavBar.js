import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const NavBar = (props) => {
  console.log(props.homenavbar);
  let [queryword, setqueryword] = useState("");
  let [placeholder, setPlaceHolder] = useState("frog");

  return (
    <nav className="navbar navbar-light px-3  fixed-top" style={{ backgroundColor: "#e3f2fd" }}>
      {props.homenavbar && !props.showWishlist ? (
        <h3>Another Movie Lister 2</h3>
      ) : (
        <>
          <button
            className="btn btn-lg nav-item"
            onClick={() => {
              props.setIsHome(true);
              props.setShowWishlist(false);
            }}
          >
            Home
          </button>
          <h3 className="mx-auto">Another Movie Lister 2</h3>
          <div className="d-flex justify-content-center ">
            <form className="form-inline">
              <div className="input-group">
                <input className="form-control" placeholder={placeholder} type="text" value={queryword} onChange={(e) => setqueryword(e.target.value)}></input>
                <div className="input-group-prepend">
                  <button
                    type="submit"
                    className="btn"
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
                    <BsSearch />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
      {props.showWishlist ? (
        <></>
      ) : (
        <button
          className="btn btn-lg nav-item"
          onClick={() => {
            props.setShowWishlist(true);
          }}
        >
          Wishlist
        </button>
      )}
    </nav>
  );
};

export default NavBar;

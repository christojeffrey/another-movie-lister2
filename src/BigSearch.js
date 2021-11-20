import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const BigSearch = (props) => {
  let [queryword, setqueryword] = useState("");
  let [placeholder, setPlaceHolder] = useState("jesus");
  return (
    <div className="d-flex flex-column align-items-center p-5">
      <h1 className="display-1 m-5">another movie lister 2</h1>
      <div className="w-25 m-5 d-flex justify-content-center">
        <form className="form-inline">
          <div className="input-group">
            <input className="form-control-lg" placeholder={placeholder} type="text" value={queryword} onChange={(e) => setqueryword(e.target.value)}></input>
            <div className="input-group-prepend">
              <button
                type="submit"
                className="btn btn-lg"
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
      <footer className="fixed-bottom m-4 text-center">
        using react, bootstrap, omdbapi. <a href="https://github.com/christojeffrey/another-movie-lister2">github repo</a>{" "}
      </footer>
    </div>
  );
};

export default BigSearch;

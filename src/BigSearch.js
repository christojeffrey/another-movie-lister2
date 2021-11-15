import { useState } from "react";

const BigSearch = (props) => {
  let [queryword, setqueryword] = useState("");
  let [placeholder, setPlaceHolder] = useState("jesus");
  return (
    <div>
      <h1>input search</h1>
      <form>
        <input placeholder={placeholder} type="text" value={queryword} onChange={(e) => setqueryword(e.target.value)}></input>
        <button
          className="btn btn-info"
          type="submit"
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
    </div>
  );
};

export default BigSearch;

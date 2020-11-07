import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              type="text"
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
              placeholder="Search..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

import React from "react";
import "./Antonym.css";

const Antonym = (props) =>{
  let search = props.search;
  let setSearchWord = props.setSearchWord;

  function handleClick(e) {
    e.preventDefault();
    setSearchWord(e.target.innerHTML);
    search(e.target.innerHTML);
  }

  if (props.antonym && props.antonym.length > 0) {
    return (
      <div className="Antonym">
        <span>Antonyms:</span>
        <ul>
          {props.antonym.map(function (antonym, index) {
            return (
              <li key={index}>
                <a href="/" onClick={handleClick}>
                  {antonym}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
export default  Antonym;

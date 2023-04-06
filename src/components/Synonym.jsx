import React from "react";
import "./Synonym.css";

const Synonym = (props) => {
  let search = props.search;
  let setSearchWord = props.setSearchWord;

  function handleClick(e) {
    e.preventDefault();
    setSearchWord(e.target.innerHTML);
    search(e.target.innerHTML);
  }

  if (props.synonym && props.synonym.length > 0) {
    return (
      <div className="Synonym">
        <span className="text-muted">Synonyms: 
        {props.synonym.map(function (synonym, index) {
            return (
              <span className="me-1 text-muted syn" key={index}> {synonym}</span>
        
            );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
export default Synonym;
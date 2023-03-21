import React from "react";
import Definition from "./Definition";
import "./Lexicon.css";

const Meaning = (props) => {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <Definition
              definition={definition}
              search={props.search}
              setSearchWord={props.setSearchhWord}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
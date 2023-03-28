import React from "react";
import Definition from "./Definition";
import "./Lexicon.css";

const Meaning = (props) => {
  return (
    <div className="Meaning border-top py-3">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <ul key={index}>
            <li>
              <Definition
                definition={definition}
                search={props.search}
                setSearchWord={props.setSearchhWord}
              />
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Meaning;
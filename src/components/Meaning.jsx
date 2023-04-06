import React from "react";
import Definition from "./Definition";
import "./Lexicon.css";
import '../index.css'

const Meaning = (props) => {
  return (
    <div className="Meaning py-3">
      <h3 className="fw-bold py-3 d-inline-block">{props.meaning.partOfSpeech}</h3>
      <hr className="d-inline-block w-xl-75 w-lg-75 w-md-75 w-75 ms-xl-5 ms-lg-5 ms-md-5 ms-2"></hr>

      <p className="text-muted">Meaning</p>
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
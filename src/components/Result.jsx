import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import './Lexicon.css'

const Result = (props) => {
  
  if (props.result) {
    return (
      <div className="Result border-bottom mb-1">
        <section>
          <h2 className="word">{props.result.word}</h2>

          {props.result.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning
                meaning={meaning}
                search={props.search}
                setSearchWord={props.setSearchWord}
              />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
export default Result;
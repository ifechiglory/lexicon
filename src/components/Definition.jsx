import React from "react";
import Synonym from "./Synonym";
import Antonym from "./Antonym";
import "./Definition.css";

const Definition = (props)=> {
  return (
    <div className="Definition">
      <div>{props.definition.definition}</div>
      <p>
        <em className="example">{props.definition.example}</em>
      </p>
      <Synonym
        synonym={props.definition.synonyms}
        search={props.search}
        setSearchWord={props.setSearchWord}
      />
      <Antonym
        antonym={props.definition.antonyms}
        search={props.search}
        setSearchWord={props.setSearchWord}
      />
    </div>
  );
}
export default Definition;
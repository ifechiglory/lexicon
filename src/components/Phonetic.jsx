import React from "react";
import { BsPlayCircle } from 'react-icons/bs'
import "./Lexicon.css";

const Phonetic = (props) => {

  let audio = new Audio(props.phonetic.audio);

  function start() {
    audio.play();
  }

  return (
    <div className="Phonetic">
      <button className="btn btn-* play">
          {props.phonetic.audio && (
          <BsPlayCircle className="playIcon" onClick={start} fontSize={30} color='#a65fdd'/>
        )}{" "}
      </button>

      {props.phonetic.text !== undefined && (
        <span className="text">{props.phonetic.text}</span>
      )}
    </div>
  );
}

export default Phonetic;
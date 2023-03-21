import React from "react";
import { RxSpeakerLoud } from 'react-icons/rx'
import "./Lexicon.css";

const Phonetic = (props) => {

  let audio = new Audio(props.phonetic.audio);

  function start() {
    audio.play();
  }

  return (
    <div className="Phonetic">
      <button className="btn btn-outline">{props.phonetic.audio && (
        <RxSpeakerLoud className="playIcon" onClick={start}/>
      )}{" "}
      </button>
      {props.phonetic.text !== undefined && (
        <p className="text">{props.phonetic.text}</p>
      )}
    </div>
  );
}

export default Phonetic;
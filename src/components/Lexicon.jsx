import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import {IoIosSearch} from 'react-icons/io'
import "./Lexicon.css";
import logo from '../assets/logo.png'

const Lexicon = (props) => {

  const [data, setData] = useState(null);
  const [searchWord, setSearchWord] = useState(props.searchWord);
 
  function search() {
    axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
    ).then((response) => {
      setData(response.data[0]);
    })
    .catch(() =>{
      alert(`Sorry, we can't find the definition of "${searchWord}" 
      Check your spelling and try again`);
    })
  }

  return(
    <div className="container-fluid p-0">
      <div className='row header'>
        <div className='col-xl-7 col-lg-7 col-md-5 col-sm-5 col-5 py-3'> 
         {/* <h1 className="logo">lexicon</h1> */}
         <img src={logo} className='img-fluid' alt="logo"></img>
        </div>

        <div className='col-xl-5 col-lg-5 col-md-7 col-sm-7 col-7 search'>
            <form onSubmit = {(e)=> {search(e.preventDefault());}}>
              <div className='input-group my-auto'>
                <input className='form-control p-3' placeholder='Search for a word' onChange={(e) => {setSearchWord(e.target.value);}}></input>
                <button className='btn btn-outline-secondary'  onClick={() => {search();}}><IoIosSearch/></button>
              </div>
          </form>
        </div>
      </div>

      <div className="row result px-5 pt-5">
        <div className="col-12">
          {searchWord && (
            <Result result ={data} search={search} setSearchWord={setSearchWord}/>         
          )}
        </div>
      </div>
    </div>
  )
}
export default Lexicon;
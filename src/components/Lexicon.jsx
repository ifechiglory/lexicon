import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import logo from '../assets/logo.png'
import {IoIosSearch} from 'react-icons/io'
import "./Lexicon.css";

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
      alert(`😮 Sorry, we can't find the definition of "${searchWord}" 
      Check your spelling and try again`);
    })
  }

  return(
    <div className="container-fluid">
      <div className='row'>
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 header-img pt-5'> 
          <img className='img-fluid text-center m-auto' alt='logo' src={logo}></img>
        </div>

        <div className='col-xl-8 col-lg-8 col-md-6 col-sm-12 search'>
            <form onSubmit = {(e)=> {search(e.preventDefault());}}>
              <div className='input-group w-75 mx-auto p-2'>
                <input className='form-control p-3' placeholder='Search for a word' onChange={(e) => {setSearchWord(e.target.value);}}></input>
                <button className='btn btn-outline-secondary'  onClick={() => {search();}}><IoIosSearch/></button>
              </div>
          </form>
          {searchWord && (
            <div className="results p-5">
              <Result result ={data} search={search} setSearchWord={setSearchWord}/>  
            </div>        
          )}
        </div>
      </div>
    </div>
  )
}
export default Lexicon;
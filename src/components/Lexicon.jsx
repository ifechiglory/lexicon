import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import {IoIosSearch} from 'react-icons/io'
import "./Lexicon.css";

const Lexicon = (props) => {

  const [data, setData] = useState(null);
  const [searchWord, setSearchWord] = useState(props.searchWord);

  function search() {
    
    const searchInput = document.getElementById('searchInput');
      if (searchInput.value === "") {
          
        alert('Please enter a word')
      
      } else {
      
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
    }

  return(
    <div className="container-fluid p-0">
      <div className='row search-bar px-3 w-xl-75 w-lg-75 w-md-75 w-100 mx-xl-auto mx-lg-auto mx-md-auto mx-auto'>
        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 mx-auto'>
            <form onSubmit = {(e)=> {search(e.preventDefault());}}>
              <div className='input-group my-auto'>
                <input className='form-control p-3 rounded-start' placeholder='Search for a word' id="searchInput" onChange={(e) => {setSearchWord(e.target.value);}}></input>
                <button className='btn btn-light rounded-end' id="searchBtn" onClick={() => {search();}}><IoIosSearch fontSize={20} color={'black'}/></button>
              </div>
          </form>
        </div>
      </div>

      {searchWord && (
        <div className="row result w-xl-75 w-lg-75 w-md-75 w-100 mx-xl-auto mx-lg-auto mx-md-auto mx-auto px-3 pt-5 adaptive">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 mx-auto">
            <Result result ={data} search={search} setSearchWord={setSearchWord}/>         
          </div>
        </div>
       )}
    </div>
  )
}
export default Lexicon;
import React, { createContext, useState } from 'react'
import './App.css'
import Lexicon from './components/Lexicon'
import { BiBook } from 'react-icons/bi'
import { Switch } from 'theme-ui'
import { BsMoon } from 'react-icons/bs'
import './components/Lexicon.css'

export const ThemeContext = createContext(null);  

function App() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }

  const [serif, setFont] = useState();

  function changeFont(e){
    const font = e.target.value; 
    setFont(() => document.getElementById('body').style.fontFamily = font);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className={`components adaptive`} id={theme}>

    <div className='row header px-xl-2 px-lg-2 px-md-2 px-sm-4 p-4 py-5 justify-content-evenly'>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-2 col-2'> 
         <BiBook fontSize={40}/>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8 d-flex flex-row">
          <select className="form-select form-select border-end me-2 text-center" aria-label="form-select-sm" 
          onChange={(e) => changeFont(e)} defaultValue={serif}>
            <option value="serif">Serif</option>
            <option value="sans">Sans Serif</option>
            <option value="monospace">Monospace</option>
          </select>
        
          <div className='switch'>
            <label className='me-2'>{theme === 'light' ? 'Day' : 'Night'}</label>
          <Switch 
            defaultChecked={theme === 'dark'} 
            onChange={toggleTheme}
            sx={{backgroundColor: '#a65fdd'}}
          />
          </div>
          <BsMoon fontSize={40}/>
        </div>
      </div>
      <Lexicon/>
    </div>
    </ThemeContext.Provider>
  )
}
export default App;

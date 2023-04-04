import React, { createContext, useState } from 'react'
import './App.css'
import Lexicon from './components/Lexicon'
import { BiBook } from 'react-icons/bi'
import { Switch } from 'theme-ui'
import { BsMoon } from 'react-icons/bs'

export const ThemeContext = createContext(null);  

function App() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className={`components`} id={theme}>

    <div className='row header px-xl-2 px-lg-2 px-md-2 px-sm-4 p-4 py-5'>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5'> 
         <BiBook fontSize={40}/>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-7 col-7 d-flex flex-row">
          <select className="form-select form-select-sm border-end me-2 text-center" aria-label="form-select-sm font-family" id="font" defaultValue={'Serif'}>
            <option value="Roboto Serif">Serif</option>
            <option value="Open Sans">Sans Serif</option>
            <option value="Roboto Mono">Monospace</option>
          </select>
        
          <div className='switch'>
            <label className='me-2'>{theme === 'light' ? 'Day' : 'Night'}</label>
          <Switch 
            defaultChecked={theme === 'dark'} 
            onChange={toggleTheme}
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

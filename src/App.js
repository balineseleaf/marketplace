import './App.css';

import Accordions from './components/Accordions/Accordions';
import Sliders from './components/Sliders/Sliders';
import { useState } from 'react';
import CheckboxButtons from './components/CheckboxButtons/CheckboxButtons';


function App() {

  return (
    <div className="marketplace">
      <div className='container'>
        <header className="header">
          <h1 className='header-logo'>Marketplace</h1>
          <nav className='header-navbar'>
            <div className='header-search'>
              <input className='header-input' placeholder='Search for a product, flower, etc' type="text" />
            </div>
            <CheckboxButtons />
          </nav>
        </header>
        <Sliders />
        {/* <section className='chips'>
          <span className='chips-number'>1034,5 Results</span>
          <ul className='chips-list'>
            <Stack direction="row" spacing={1}>
              {selectedValues.map((value, index) => (
                <Chip key={index} label={value} sx={{ backgroundColor: '#297019', color: "#ffffff", border: "none" }} variant="outlined" onDelete={handleDelete} />
              ))}
            </Stack>
          </ul>
        </section> */}
        <Accordions />
      </div>
    </div >
  );
}

export default App;

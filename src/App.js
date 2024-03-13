import './App.css';
import Accordions from './components/Accordions/Accordions';
import Sliders from './components/Sliders/Sliders';
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
        <Accordions />
      </div>
    </div >
  );
}

export default App;

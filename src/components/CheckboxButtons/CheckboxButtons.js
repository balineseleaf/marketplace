import './CheckboxButtons.css';
import plant from '../../images/plant.svg';
import { useState } from 'react';


const CheckboxButtons = () => {

  const [buttonStates, setButtonStates] = useState({
    buds: false,
    edible: false,
    nonEdible: false,
    concentrate: false
  });

  const handleCheckboxClick = (buttonName) => {
    setButtonStates({
      ...buttonStates,
      [buttonName]: !buttonStates[buttonName]
    });
  };


  return (
    <div className='header-buttons'>
      <label className={`header-button ${buttonStates.buds ? 'active' : 'inactive'}`} onClick={() => handleCheckboxClick('buds')}>
        <input type='checkbox' className='header-checkbox' checked={buttonStates.buds} onClick={(e) => e.stopPropagation()} readOnly />
        <img alt="plant" src={plant} className='header-button-image'></img>Buds
      </label>
      <label className={`header-button ${buttonStates.edible ? 'active' : 'inactive'}`} onClick={() => handleCheckboxClick('edible')}>
        <input type='checkbox' className='header-checkbox' checked={buttonStates.edible} onClick={(e) => e.stopPropagation()} readOnly />
        <img alt="plant" src={plant} className='header-button-image'></img>Edible
      </label>
      <label className={`header-button ${buttonStates.nonEdible ? 'active' : 'inactive'}`} onClick={() => handleCheckboxClick('nonEdible')}>
        <input type='checkbox' className='header-checkbox' checked={buttonStates.nonEdible} onClick={(e) => e.stopPropagation()} readOnly />
        <img alt="plant" src={plant} className='header-button-image'></img>Non Edible
      </label>
      <label className={`header-button ${buttonStates.concentrate ? 'active' : 'inactive'}`} onClick={() => handleCheckboxClick('concentrate')}>
        <input type='checkbox' className='header-checkbox' checked={buttonStates.concentrate} onClick={(e) => e.stopPropagation()} readOnly />
        <img alt="plant" src={plant} className='header-button-image'></img>Concentrate
      </label>
    </div>
  );
}

export default CheckboxButtons;
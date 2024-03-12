import './CheckboxClassification.css';
import { useState } from 'react';

const CheckboxClassification = ({ onCheckboxChange, onChipDelete }) => {

  const [checkedItems, setCheckedItems] = useState({
    indica100: false,
    sativa100: false,
    indica50: false,
    sativa50: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const label = event.target.parentElement.textContent.trim();
    setCheckedItems({
      ...checkedItems,
      [name]: checked
    });
    onCheckboxChange(name, checked, label);
  };

  const handleChipDelete = (label) => {
    const name = Object.keys(checkedItems).find(key => checkedItems[key] && label.includes(key));
    if (name) {
      onChipDelete(name, label);
      setCheckedItems(prevState => ({ ...prevState, [name]: false }));
    }
  };
  return (
    <ul className='accordion-items'>
      <li className='accordion-item'>
        <label className="accordion-check-label option" htmlFor="indica100">
          <input
            type="checkbox"
            name="indica100"
            id="indica100"
            checked={checkedItems.indica100}
            onChange={handleCheckboxChange}
            className='accordion-checkbox-input'
          />
          <span className='accordion-check-box'></span>
          100% Indica
        </label>
      </li>
      <li className='accordion-item'>
        <label className="accordion-check-label option" htmlFor="sativa100">
          <input
            type="checkbox"
            name="sativa100"
            id="sativa100"
            checked={checkedItems.sativa100}
            onChange={handleCheckboxChange}
            className='accordion-checkbox-input'
          />
          <span className='accordion-check-box'></span>
          100% Sativa
        </label>
      </li>
      <li className='accordion-item'>
        <label className="accordion-check-label option" htmlFor="indica50">
          <input
            type="checkbox"
            name="indica50"
            id="indica50"
            checked={checkedItems.indica50}
            onChange={handleCheckboxChange}
            className='accordion-checkbox-input'
          />
          <span className='accordion-check-box'></span>
          &gt;50% Indica
        </label>
      </li>
      <li className='accordion-item'>
        <label className="accordion-check-label option" htmlFor="sativa50">
          <input
            type="checkbox"
            name="sativa50"
            id="sativa50"
            checked={checkedItems.sativa50}
            onChange={handleCheckboxChange}
            className='accordion-checkbox-input'
          />
          <span className='accordion-check-box'></span>
          &gt;50% Sativa
        </label>
      </li>
    </ul>
  );
}

export default CheckboxClassification;
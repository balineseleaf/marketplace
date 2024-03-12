import './CheckboxProductionMethod.css';
import { useState } from 'react';
import checkbox from '../../images/Checkbox.svg';

const CheckboxProductionMethod = ({ onCheckboxChange }) => {
  const [checkedItems, setCheckedItems] = useState({
    indoor: false,
    outdoor: false,
    greenhouse: false,
    lightDeprivation: false,
    mixedLight: false,
    other: false
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

  return (
    <div>
      <ul className='accordion-items'>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="indoor">
            <input
              type="checkbox"
              name="indoor"
              id="indoor"
              checked={checkedItems.indoor}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Indoor
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="outdoor">
            <input
              type="checkbox"
              name="outdoor"
              id="outdoor"
              checked={checkedItems.outdoor}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Outdoor
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="greenhouse">
            <input
              type="checkbox"
              name="greenhouse"
              id="greenhouse"
              checked={checkedItems.greenhouse}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Greenhouse
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="lightDeprivation">
            <input
              type="checkbox"
              name="lightDeprivation"
              id="lightDeprivation"
              checked={checkedItems.lightDeprivation}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Light Deprivation
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="mixedLight">
            <input
              type="checkbox"
              name="mixedLight"
              id="mixedLight"
              checked={checkedItems.mixedLight}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Mixed Light
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="other">
            <input
              type="checkbox"
              name="other"
              id="other"
              checked={checkedItems.other}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Other
          </label>
        </li>
      </ul>
    </div>
  );
}
export default CheckboxProductionMethod;
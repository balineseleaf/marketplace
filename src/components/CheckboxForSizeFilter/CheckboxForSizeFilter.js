import './CheckboxForSizeFilter.css';
import { useState } from 'react';

const CheckboxForSizeFilter = ({ onCheckboxChange }) => {
  const [checkedItems, setCheckedItems] = useState({
    flower: false,
    preRollFlower: false,
    preRollInfused: false,
    preRollLeaf: false,
    shake: false,
    smalls: false,
    trim: false,
    keef: false,
    freshFrozen: false
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
          <label className="accordion-check-label option" htmlFor="flower">
            <input
              type="checkbox"
              name="flower"
              id="flower"
              checked={checkedItems.flower}
              onChange={handleCheckboxChange}
              style={{ marginLeft: "6px", padding: "2px" }}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Flower
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="preRollFlower">
            <input
              type="checkbox"
              name="preRollFlower"
              id="preRollFlower"
              checked={checkedItems.preRollFlower}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Pre-Roll Flower
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="preRollInfused">
            <input
              type="checkbox"
              name="preRollInfused"
              id="preRollInfused"
              checked={checkedItems.preRollInfused}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Pre-Roll Infused
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="preRollLeaf">
            <input
              type="checkbox"
              name="preRollLeaf"
              id="preRollLeaf"
              checked={checkedItems.preRollLeaf}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Pre-Roll Leaf
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="shake">
            <input
              type="checkbox"
              name="shake"
              id="shake"
              checked={checkedItems.shake}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Shake
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="smalls">
            <input
              type="checkbox"
              name="smalls"
              id="smalls"
              checked={checkedItems.smalls}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Smalls
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="trim">
            <input
              type="checkbox"
              name="trim"
              id="trim"
              checked={checkedItems.trim}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Trim
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="keef">
            <input
              type="checkbox"
              name="keef"
              id="keef"
              checked={checkedItems.keef}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Keef
          </label>
        </li>
        <li className='accordion-item'>
          <label className="accordion-check-label option" htmlFor="freshFrozen">
            <input
              type="checkbox"
              name="freshFrozen"
              id="freshFrozen"
              checked={checkedItems.freshFrozen}
              onChange={handleCheckboxChange}
              className='accordion-checkbox-input'
            />
            <span className='accordion-check-box'></span>
            Fresh Frozen
          </label>
        </li>
      </ul>
    </div >
  );
}


export default CheckboxForSizeFilter;
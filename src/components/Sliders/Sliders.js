import './Sliders.css';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import calendar from '../../images/Calendar.svg';
import uparrow from '../../images/UP.svg';
import downarrow from '../../images/Down.svg';
import THC from '../../images/THC.svg';
import CBD from '../../images/CBD.svg';
import ratedown from '../../images/VectorLow.svg';
import rateup from '../../images/Vector.svg';

const Sliders = () => {

  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const [value, setValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9999);

  const handleChange = (event, newValue) => {
    setValue(newValue[0]);
    setMaxValue(newValue[1]);
  };

  function valuePercentTHC(value) {
    return value;
  }
  function valuePercentCBD(value) {
    return value;
  }

  const [percentTHC, setPercentTHC] = useState(0, 100);

  const [percentCBD, setPercentCBD] = useState(0, 100);

  const handleChangeTHC = (event, newValue) => {
    setPercentTHC(newValue);
  };

  const handleChangeCBD = (event, newValue) => {
    setPercentCBD(newValue);
  };

  const valueLabelFormat = (value) => {
    return `${value} $`;
  };

  const valueLabelPercentFormat = (value) => {
    return `${value} %`;
  };

  const handleRadioMouseMove = (event) => {
    const rating = event.currentTarget;
    const stars = rating.querySelectorAll('input[type="radio"]');
    const labels = rating.querySelectorAll('label');

    const ratingRect = rating.getBoundingClientRect();
    const mouseX = event.clientX;
    const relativeX = mouseX - ratingRect.left;

    const percent = relativeX / ratingRect.width;

    stars.forEach((star, index) => {
      star.checked = percent >= index / stars.length;
    });

    labels.forEach((label, index) => {
      label.style.backgroundColor = percent >= index / labels.length ? '#84d52c' : '';
    });
  };

  const handleRadioMouseDown = (event) => {
    const rating = event.currentTarget;

    rating.addEventListener('mousemove', handleRadioMouseMove);

    const handleMouseUp = () => {
      rating.removeEventListener('mousemove', handleRadioMouseMove);
      rating.removeEventListener('mouseup', handleMouseUp);
    };

    rating.addEventListener('mouseup', handleMouseUp);
  };

  const handleRadioMouseEnter = (event) => {
    event.currentTarget.addEventListener('mousedown', handleRadioMouseDown);
  };

  const handleRadioMouseLeave = (event) => {
    event.currentTarget.removeEventListener('mousedown', handleRadioMouseDown);
    event.currentTarget.removeEventListener('mousemove', handleRadioMouseMove);
  };

  return (
    <section className='filter'>
      <div className='filter-range double-range'>
        <h3 className='filter-price-range-header'>Price Range</h3>
        <Slider
          value={[value, maxValue]}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={9999}
          valueLabelFormat={valueLabelFormat}
          className='slider'
          sx={{ color: '#84d52c', width: '220px', marginLeft: '7px' }}
        />
        <span className='filter-price-value min'>{value}$</span>
        <span className='filter-price-value max'>{maxValue}$</span>
      </div>
      <div className='filter-range percent-range'>
        <h3 className='filter-price-range-header'>THC, %</h3>
        <Slider
          value={percentTHC}
          valueLabelDisplay="auto"
          onChange={handleChangeTHC}
          getAriaValueText={valuePercentTHC}
          valueLabelFormat={valueLabelPercentFormat}
          className='slider'
          sx={{ color: '#84d52c', width: '220px' }}
        />
        <span className='filter-price-value max'>{percentTHC}%</span>
      </div>
      <div className='filter-range percent-range'>
        <h3 className='filter-price-range-header'>CBD, %</h3>
        <Slider
          valueLabelDisplay="auto"
          value={percentCBD}
          onChange={handleChangeCBD}
          valueLabelFormat={valueLabelPercentFormat}
          getAriaValueText={valuePercentCBD}
          className='slider'
          sx={{ color: '#84d52c', width: '220px' }} // Применяем зеленый цвет
        />
        <span className='filter-price-value max'>{percentCBD}%</span>
      </div>
      <div className='radio-rating' onMouseEnter={(event) => handleRadioMouseEnter(event)}
        onMouseLeave={(event) => handleRadioMouseLeave(event)}>
        <h3 className='rating-header'>Nose</h3>
        <div class="rating">
          <input type="radio" id="star10" name="rating" value="10" />
          <label for="star10"></label>
          <input type="radio" id="star9" name="rating" value="9" />
          <label for="star9"></label>
          <input type="radio" id="star8" name="rating" value="8" />
          <label for="star8"></label>
          <input type="radio" id="star7" name="rating" value="7" />
          <label for="star7"></label>
          <input type="radio" id="star6" name="rating" value="6" />
          <label for="star6"></label>
          <input type="radio" id="star5" name="rating" value="5" />
          <label for="star5"></label>
          <input type="radio" id="star4" name="rating" value="4" />
          <label for="star4"></label>
          <input type="radio" id="star3" name="rating" value="3" />
          <label for="star3"></label>
          <input type="radio" id="star2" name="rating" value="2" />
          <label for="star2"></label>
          <input type="radio" id="star1" name="rating" value="1" />
          <label for="star1"></label>
        </div>
        <span className='rating-text-left'>min</span>
        <span className='rating-text-right'>max</span>
      </div>
      <button id="category-button" onClick={toggleList} className='filter-category-button'></button>
      <div className={isListOpen ? 'sort-list open' : 'sort-list'}>
        <h3 className='sort-header'>Sort by:</h3>
        <ul className="sort-items">
          <li className='sort-item'>
            <img src={calendar} alt="calendar" className='sort-icon'></img>
            <button className="list-button">Date (New first)</button>
          </li>
          <li className='sort-item'>
            <img src={calendar} alt="calendar" className='sort-icon'></img>
            <button className="list-button">Date (Old first)</button>
          </li>
          <li className='sort-item'>
            <img src={downarrow} alt="calendar" className='sort-icon'></img>
            <button className="list-button price-sort">Price (High first)</button>
          </li>
          <li className='sort-item'>
            <img src={uparrow} alt="calendar" className='sort-icon'></img>
            <button className="list-button price-sort">Price (Low first)</button>
          </li>
          <li className='sort-item'>
            <img src={THC} alt="calendar" className='sort-icon'></img>
            <img src={rateup} alt="calendar" className='sort-icon-vector-up'></img>
            <button className="list-button">Total THC (High first)</button>
          </li>
          <li className='sort-item'>
            <img src={THC} alt="calendar" className='sort-icon'></img>
            <img src={ratedown} alt="calendar" className='sort-icon-vector-down'></img>
            <button className="list-button">Total THC (Low first)</button>
          </li>
          <li className='sort-item'>
            <img src={CBD} alt="calendar" className='sort-icon'></img>
            <img src={rateup} alt="calendar" className='sort-icon-vector-up'></img>
            <button className="list-button">Total CBD (High first)</button>
          </li>
          <li className='sort-item'>
            <img src={CBD} alt="calendar" className='sort-icon'></img>
            <img src={ratedown} alt="calendar" className='sort-icon-vector-down'></img>
            <button className="list-button">Total CBD (Low first)</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sliders;
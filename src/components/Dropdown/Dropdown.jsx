import React, { useState } from 'react';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ options, onChange, selectedQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  const handleOptionSelect = (option, event) => {
    onChange(option, event);
    setIsOpen(false);
  };




  return (
    <section className="select-container">
      <div className={`custom-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="selected-option" onClick={handleToggle}>
          {selectedQuery}
          <FontAwesomeIcon icon={faAngleDown} className="arrow-icon" />
        </div>
        <ul className="options-list">
          {options.map((option) => (
            <li
              key={option}
              className={`option-with-icon ${option}`}
              onClick={() => handleOptionSelect(option)}
            >
              <img
                src={`../../assets/${option}.png`}
                alt={`${option} icon`}
                className="option-icon"
              />
              {option}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Dropdown;

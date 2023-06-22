import React, { useState } from 'react';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ReactIcon from '../../assets/react.png';
import AngularIcon from '../../assets/angular.png';
import VueIcon from '../../assets/vue.png';

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
          {selectedQuery || 'Select News'}
          <FontAwesomeIcon icon={faAngleDown} className={`arrow-icon ${isOpen ? 'open' : ''}`} />
        </div>
        <ul className={`options-list ${isOpen ? 'open' : ''}`}>
          {selectedQuery === null && (
            <li className={`option-with-icon select-news`} onClick={(event) => handleOptionSelect(null, event)}>
              Select News
            </li>
          )}
          {options.map((option) => (
            <li
              key={option}
              className={`option-with-icon ${option}`}
              onClick={(event) => handleOptionSelect(option, event)}
            >
              {renderIcon(option)}
              {option}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const renderIcon = (option) => {
  switch (option) {
    case 'react':
      return <img src={ReactIcon} alt={`${option} icon`} className="option-icon" />;
    case 'angular':
      return <img src={AngularIcon} alt={`${option} icon`} className="option-icon" />;
    case 'vue':
      return <img src={VueIcon} alt={`${option} icon`} className="option-icon" />;
    default:
      return null;
  }
};

export default Dropdown;

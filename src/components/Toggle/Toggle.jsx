import React, {useState} from 'react'; 
import { ToggleContainer, ToggleOption, Option } from './Toggle.styles'

const Toggle = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  return (
    <ToggleContainer>
      <ToggleOption selected={selectedOption === 'option1'} onClick={() => handleToggle('option1')}>
        <Option>All</Option>
      </ToggleOption>
      <ToggleOption selected={selectedOption === 'option2'} onClick={() => handleToggle('option2')}>
        <Option>My Faves</Option>
      </ToggleOption>
    </ToggleContainer>
  );
};

export default Toggle;
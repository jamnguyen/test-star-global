import React from 'react';

const SpeedInput = ({ value, onChange }) => {

  const onClick = (e) => {
    // Prevent the box from moving when changing speed 
    e.stopPropagation();
  }

  return (
    <div className="speed-input" onClick={ onClick }>
      <label htmlFor="speed-input">Box Speed (seconds):</label>
      <input
        id="speed-input"
        value={ value }
        onChange={ (e) => { onChange(e.target.value) } }
        type="number"
        min={ 0 }
      />
    </div>
  );
}

export default SpeedInput;
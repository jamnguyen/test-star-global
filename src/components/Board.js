import React from 'react';
import Box from './Box';
import SpeedInput from './SpeedInput';

const BOX_SIZE = 50;

const Board = () => {

  const [ speed, setSpeed ] = React.useState(0.5);
  const [ boxes, setBoxes ] = React.useState([{ x: 50, y: 50 }]);

  const onClick = (e) => {
    // The position of the event should be the center of the box
    const pos = {
      x: e.clientX - (BOX_SIZE / 2),
      y: e.clientY - (BOX_SIZE / 2)
    }
    setBoxes(boxes.map(() => (pos)));
  }

  return (
    <div
      className="board"
      onClick={ onClick }
    >
      {
        boxes.map((item, index) => (
          <Box
            key={ `box-${index}` }
            position={ item }
            speed={ speed }
          />
        ))
      }
      <SpeedInput
        value={ speed }
        onChange={ setSpeed }
      />
    </div>
  );
}

export default Board;
import React from 'react';

const BackLink = ({ onButtonClick, ...props }) => {
  return (
    <div>
      <button onClick={onButtonClick}>Actually Nevermind!</button>
    </div>
  );
};

export default BackLink;

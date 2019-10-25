import React from 'react';

const Button = ({ onButtonClick, ...props }) => {
  return <button onClick={onButtonClick}>{props.children}</button>;
};

export default Button;

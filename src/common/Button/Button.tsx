import React from 'react';
import './styles/Button.scss';
export interface ButtonInterface {}

const Button: React.FC<ButtonInterface> = () => {
  return (
    <div className="cont-button">
      <button className="btn-bubble">
        <span>Bubble</span>
      </button>
    </div>
  );
};

export default Button;

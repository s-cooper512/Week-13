import React from 'react';

function ButtonComponent({ onClick, color, children }) {
  return (
    <button className={`button ${color}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonComponent;

import React from 'react';

interface Props {
  onClick: () => void;
  text: string;
}

const Button: React.FC<Props> = ({onClick, text}) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
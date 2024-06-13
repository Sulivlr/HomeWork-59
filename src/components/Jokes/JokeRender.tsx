import React from 'react';

interface Props {
  joke: string;
}

const JokeRender: React.FC<Props> = ({joke}) => {
  return (
    <div className="joke-display">
      <p>{joke}</p>
    </div>
  );
};

export default JokeRender;
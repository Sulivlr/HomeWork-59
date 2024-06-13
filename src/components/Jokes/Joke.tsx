import React, {useEffect, useState} from 'react';
import JokeRender from './JokeRender';
import Button from './button';

const Joke: React.FC = () => {

  const [joke, setJokes] = useState<string>('');

  const urlChuck = 'https://api.chucknorris.io/jokes/random';


    const ChuckJoke = async () => {
      const response = await fetch(urlChuck)

      if (response.ok) {
        const data = await response.json();
        setJokes(data.value)
      }

    };
  useEffect(() => {

    void ChuckJoke();
  }, []);

  return (
    <div className="Header">
      <h1> Chuck Norris and Programming Jokes</h1>
      <JokeRender joke={joke}/>
     <Button  onClick={ChuckJoke} text="Get Chuck Norris Joke"/>
    </div>
  );
};

export default Joke;
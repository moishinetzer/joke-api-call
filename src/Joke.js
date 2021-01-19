import {React, useState} from 'react';

export default function Joke({joke}) {

  return (
    <div>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <p style={{fontWeight: "bold"}}>{joke.type}</p>
    </div>
  );
}
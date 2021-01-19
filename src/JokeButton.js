import {React, useState} from 'react';

export default function JokeButton({setJokeUrl, category,jokeCount, setJokeCount}) {
  let url = "https://official-joke-api.appspot.com/jokes/" + category + "/random";

  return (
    <button
      onClick={() => {
        setJokeUrl(url);
        setJokeCount(jokeCount + 1);
      }}
    >
      {category}
    </button>
  );
}
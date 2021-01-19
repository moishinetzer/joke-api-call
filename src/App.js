import Joke from "./Joke";
import JokeButton from "./JokeButton"
import {useState, useEffect} from "react";
import axios from "axios";

function App() {

  const [jokeUrl, setJokeUrl] = useState("https://official-joke-api.appspot.com/jokes/general/random")
  const [joke, setJoke] = useState([]);
  const [jokeCount, setJokeCount] = useState(1);

  useEffect(() => {
    axios.get(jokeUrl)
      .then(res => {
        setJoke(res.data[0]);
        console.log(res.data)
        console.log(jokeUrl)
      })
  }, [jokeCount, jokeUrl])

  return (
    <>
      <h1 style={{marginLeft: "20%"}}>Yo API Calls</h1>
      <Joke joke={joke} />

      <JokeButton setJokeUrl={setJokeUrl} category={"general"}  jokeCount={jokeCount} setJokeCount={setJokeCount}/>
      <JokeButton setJokeUrl={setJokeUrl} category={"knock-knock"} jokeCount={jokeCount} setJokeCount={setJokeCount}/>
      <JokeButton setJokeUrl={setJokeUrl} category={"programming"} jokeCount={jokeCount} setJokeCount={setJokeCount}/>
    </>
  );
}

export default App;

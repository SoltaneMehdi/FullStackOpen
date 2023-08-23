import { useEffect, useState } from "react";

//separate conponent for Anecdote with most votes
const BestAnecdote = ({ anecdotes, points }) => {
  const maxPoints = Math.max(...points);
  const maxIndex = points.indexOf(maxPoints);
  return <p>{anecdotes[maxIndex]}</p>;
};

const App = () => {
  //helper function to get a random index
  const getRandomIndex = () => {
    return Math.floor(Math.random() * anecdotes.length);
  };
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setpoints] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [bestAnec, setBestAnec] = useState(null);
  // effect that gets the random index the first render(runs only once)
  useEffect(() => {
    const newSelected = getRandomIndex();
    console.log("new selected ", newSelected);
    setSelected(newSelected);
  }, []);

  const handleClick = () => {
    let newSelected;
    //to not repeat the same anecdote twice
    do {
      newSelected = getRandomIndex();
      console.log("new selected ", newSelected);
    } while (selected === newSelected);

    setSelected(newSelected);
  };
  const handleVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    console.log(newPoints);
    setpoints(newPoints);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>new anecdote</button>
      <h1>Anecdote with most votes</h1>

      {/* verifies if there are any votes yet */}
      {points.every((p) => p === 0) ? (
        <p>no votes yet</p>
      ) : (
        <BestAnecdote anecdotes={anecdotes} points={points} />
      )}
    </div>
  );
};

export default App;

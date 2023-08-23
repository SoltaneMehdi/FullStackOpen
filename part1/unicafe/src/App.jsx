import { useEffect, useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StaticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = (props) => {
  const { good, neutral, bad, all, average, percentage } = props.stats;
  console.log(good, neutral, bad, all, average, percentage);
  return (
    <div>
      <table>
        <tbody>
          <StaticLine text="good" value={good} />
          <StaticLine text="neutral" value={neutral} />
          <StaticLine text="bad" value={bad} />
          <StaticLine text="all" value={all} />
          <StaticLine text="average" value={average} />
          <StaticLine text="percentage" value={percentage} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    all && setAverage((good - bad) / all);
    all && setPercentage((good * 100) / all);
  });

  const handleClickGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const handleClickBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <span>
        <Button handleClick={handleClickGood} text="good" />
        <Button handleClick={handleClickNeutral} text="neutral" />
        <Button handleClick={handleClickBad} text="bad" />
      </span>
      <h2>statistics</h2>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>no feedback given</p>
      ) : (
        <Statistics stats={{ good, neutral, bad, all, average, percentage }} />
      )}
    </div>
  );
};

export default App;

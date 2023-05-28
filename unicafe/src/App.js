import { useState } from 'react'

const Button = (props) => {
  return(
  <button onClick={props.handClicks}>{props.text}</button>
  )
}

const StatisticsLine = (props) => {
  return(
    <tr>
      <th>{props.text}</th><td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad, all, average, positive} = props;
  if (all == 0) {
    return(
      <p> No feedback given</p>
    )
  }else{
    return(
      <>
      <h1>statistics</h1>
      <table>
        <StatisticsLine text={"good"} value={good}/>
        <StatisticsLine text={"neutral"} value={neutral}/>
        <StatisticsLine text={"bad"} value={bad}/>
        <StatisticsLine text={"all"} value={all}/>
        <StatisticsLine text={"average"} value={average}/>
        <StatisticsLine text={"positive"} value={positive}/>
      </table>
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const handleGoodClicks = () => {
    setGood(good + 1); console.log(good);
    setAll(all + 1); console.log("all before avg", all);
    setAverage((good + 1 + neutral * 0  + bad * -1)/(all +1));console.log("all after avg", all);
    setPositive((good +1)/(all + 1))
  }

  const handleNeutralClicks = () => {
    setNeutral(neutral + 1); console.log(neutral);
    setAll(all + 1); console.log(all);
    setAverage((good + (neutral +1) * 0  + bad * -1)/(all +1));
    setPositive(good/(all + 1));
  }

  const handleBadClicks = () => {
    setBad(bad + 1); console.log(bad);
    setAll(all + 1); console.log(all);
    setAverage((good + neutral * 0  + (bad + 1) * -1)/(all +1));
    setPositive(good/(all + 1));
  }
  //does these buttons need to be turned into components?
  //all should be separated into its own function, or state? setAll?
  return (
    <div>
      <h1>give feedback</h1>
      <Button handClicks={handleGoodClicks} text={"good"}/>
      <Button handClicks={handleNeutralClicks} text={"neutral"}/>
      <Button handClicks={handleBadClicks} text={"Bad"}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App;
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import { useState } from 'react';

const Button = ({handleClicks, text}) => {
  return(
    <button onClick={handleClicks}>{text}</button>
  );
};

const Anecdote = ({anecdotes, votes}) => {
    return(
      <>
      <p>{anecdotes}</p>
      <p>has {parseInt(votes)} votes</p>
      </> 
    );
};
const App = () => {
  const anecdotes = [
    'Index 0: If it hurts, do it more often.',
    'Index 1: Adding manpower to a late software project makes it later!',
    'Index 2: The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Index 3: Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Index 4: Premature optimization is the root of all evil.',
    'Index 5: Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Index 6: Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'Index 7: The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);

  let initalVotes = new Uint32Array(10); //all elements initialized to 0's 
  const [votes, setVotes] = useState(initalVotes);
  
  const [mostVotes, setMostVotes] = useState(0);
  const [voteLeader, setVoteLeader] = useState(0);

  const submitVote = () => {
    console.log("Starting vote submission process.")
    //always use a new array to change state of an array
    let newVotes = [...votes]
    console.log("assigning a new array: newVotesArr ")
    newVotes[selected] += 1;
    console.log("newVotes[selected] += 1 adds a vote to the selected array element:", selected)
    
    setVotes(newVotes);
    console.log("newVotes", newVotes);

    newVotes.forEach(
      vote => {
        if (vote > mostVotes) {
          setMostVotes(vote);
          console.log("setMostVotes(vote)", vote);
          setVoteLeader(newVotes.indexOf(vote));
          console.log("setVoteLeader(newVotes.indexOf(vote));", newVotes.indexOf(vote));
        }
      }
    );
    console.log("Out of foreach loop")
    console.log("mostVotes", mostVotes);
    console.log("voteLeader", voteLeader);
  };

  const getNextAncedote = () => {
    console.log("starting anectdote selection")
    let result = 0;
    const min = Math.ceil(0);
    const max = Math.floor(8);
    result = Math.floor(Math.random() * (max - min) + min);
    setSelected(result);
    console.log("next ancedote", result);
  }

  return(
    <div>
      <h1>Anecdote of the day</h1>
      <Button text={"vote"} handleClicks={submitVote}/>
      <Button text={"next ancedote"} handleClicks={getNextAncedote}/>
      <Anecdote anecdotes={anecdotes[selected]} votes={votes[selected]}/>
      <h1>Anecdote With Most Votes</h1>
      <Anecdote anecdotes={anecdotes[voteLeader]} votes={mostVotes} />
    </div>
  )
};

export default App;

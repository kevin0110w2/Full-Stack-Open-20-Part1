import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({ header, anecdote, votes }) => {
  console.log(votes)
  return (
    <div>
      <h1>{header}</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  })

  const handleVote = (index) => {
    const newVotes = {
      ...votes
    }
    newVotes[index] = newVotes[index] + 1

    return (
      setVotes(newVotes)
    )
  }

  const highestNo = () => {
    let highest = 0;

    for (const [key, value] of Object.entries(votes)) {

      if (value > votes[highest]) {

        highest = key;

      }
    }
    return highest;
  }

  return (
    <>
      <Anecdote
        header="Anecdote of the day"
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
      />

      <Button
        handleClick={() => { handleVote(selected) }}
        text="vote"
      />
      <Button
        handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}
        text="next anecdote"
      />


      <Anecdote
        header="Anecdote with most votes"
        anecdote={anecdotes[highestNo()]}
        votes={votes[highestNo()]}
      />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
          </tbody>
        </table>
      </div >
    )
  }
}

const Statistic = ({ text, value }) => {
  console.log(value.value)
  if (text === 'positive') {
    return (
      <>
        <tr>
          <td>{text}</td>
          <td>{value}%</td>
        </tr>
      </>
    )
  } else {
    return (
      <>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </>
    )
  }
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    console.log("Good")
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    console.log("Neutral")
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    console.log("Bad")
    setBad(bad + 1)
    setAll(all + 1)
  }

  const averageNum = function (good, bad, all) {
    if (all.all === 0) {
      console.log(all.all)
      return 0
    } else {
      const goodNo = good.good * 1
      const negNo = bad.bad * (-1)
      const ave = (goodNo + negNo) / all.all
      console.log(goodNo)
      console.log(negNo)
      console.log(all.all)
      return ave.toFixed(2)
    }
  }

  const positivePercent = function (good, all) {
    if (all.all === 0) {
      console.log(all.all)
      return 0
    } else {
      const percent = (good.good) / (all.all) * 100
      return percent.toFixed(2)
    }
  }

  return (
    <>
      <Header />
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={averageNum({ good }, { bad }, { all })}
        positive={positivePercent({ good }, { all })}
      />
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
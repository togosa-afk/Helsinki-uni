import { useState } from "react"


const Feedback = () => (
  <h1>give feedback</h1>
)


const Statistics = () => (
  <h2>Statstics</h2>
)

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}


//? component has text and value

const Reviwe = (props) => {
  return (
    <p>{props.text} : {props.value} </p>
  )
}

//* all component

const All = ({all}) => {
  if(all.length === 0 ){
    return (
      <p>No reviwes yet </p>
    )
  }
  return (
    <p>All reviwes is {all.length} </p>
  )
}

//* average component 

const Average = ({all, value, good }) => {
  const average = value / all.length
  const percentage = (good/10)*100

  if(all.length === 0 ){
    return(
      <p>No rate yet </p>
    )
  }
  return (
    <div>
    <p>average is : {average} </p>
    <p> positive is : {percentage} % </p>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])
  const [value , setValue] = useState(0)


  const handelGood = () => {
    setAll(all.concat('G'))
    setGood(good + 1 )
    setValue(value + 1)
  }

  const handelNeutral = () => {
    setAll(all.concat('N'))
    setNeutral(neutral + 1)
  }

  const handelBad = () => {
    setAll(all.concat('B'))
    setBad(bad + 1)
    setValue(value - 1)
  }

  return (
    <>
      <Feedback/>
      <Button onClick={handelGood} text="good" />
      <Button onClick={handelNeutral} text="neutral" />
      <Button onClick={handelBad} text="bad" />
      <Statistics/>
      <Reviwe text="Good" value={good}  />
      <Reviwe text="Neutral" value={neutral}  />
      <Reviwe text="Bad" value={bad}  />
      <Reviwe text="Rate" value={value}  />
      <Average all={all} value={value} good={good}  />
      <All all= {all} />
    </>  
  )
}
export default App;
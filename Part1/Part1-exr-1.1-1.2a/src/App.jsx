import { useState } from "react"


const Feedback = () => (
  <h1>give feedback</h1>
)

//! Status copmponent
const StatisticLine = ({text , value}) => {
  return (
    <>
    {/* <p>{text} : {value} {exp} </p> */}
    {/*
     * ** extra trains from 1.11 to 1.14 **
    */}
    <tr>
      <td>{text} </td>
      <td>{value} </td>
    </tr>

    </>
  )
}

//! Statistics component

const Statistics = ({all, good, bad, neutral }) => {
  const average =  ((good*1)+(neutral*0)+(bad*(-1))) / all.length
    const percentage =(good/all.length)*100
  
    if(all.length === 0 ){
      return(
        <p>No rate yet </p>
      )
    }
  
return(
  <>
    <h2>Statstics</h2>
    {/* <Status text='good' value={good}  />
    <Status text='neutral' value={neutral} />
    <Status text='bad' value={bad} />
    <Status text='all' value={all.length} />
    <Status text='average is' value={average} />
    <Status text='positive is' value={percentage} exp="%"  />
    <Status text='All reviwes is' value={all.length} /> */}

    <table>
    <StatisticLine text='good' value={good}  />
    <StatisticLine text='neutral' value={neutral} />
    <StatisticLine text='bad' value={bad} />
    <StatisticLine text='all' value={all.length} />
    <StatisticLine text='average is' value={average} />
    <StatisticLine text='positive is' value={percentage} exp="%"  />
    <StatisticLine text='All reviwes is' value={all.length}/>
    </table>
  </> 
)
}


//! Button component

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])
  const value = good - bad ;


  const handelGood = () => {
    setAll(all.concat('G'))
    setGood(good + 1 )
  }

  const handelNeutral = () => {
    setAll(all.concat('N'))
    setNeutral(neutral + 1)
  }

  const handelBad = () => {
    setAll(all.concat('B'))
    setBad(bad + 1)
  }

  return (
    <>
      <Feedback/>
      <Button onClick={handelGood} text="good" />
      <Button onClick={handelNeutral} text="neutral" />
      <Button onClick={handelBad} text="bad" />
      <Statistics all={all} bad={bad} good={good} neutral={neutral} />
    </>  
  )
}
export default App;
import { useState } from "react"

// //components
// const Display = ({counter}) => {
//   return(
//     <>
//       <div> {counter} </div>
//     </>
//   )
// }

// const Button = ({event , text }) => {
//   return (
//     <>
//       <button onClick={event}> {text} </button>
//     </>
//   )
// }


// function App () {

//   const [counter,setCounter] = useState(0)

//   console.log('reset' , counter)
//   // many wayes to handle counter 
//   //1st
//   const increasByOne = ()=> setCounter(counter + 1 )
//   const returnZero = () => setCounter(0)
//   const decreasBYOne = () => setCounter(counter -1 )
//   return (
//     <>
//       <Display counter={counter} />
//       <Button text={'increase'} event={increasByOne}  />
//       <Button text={'decrease'} event={decreasBYOne}  />
//       <Button text={'set zero'} event={returnZero}  />

//     </>
//   )
// }

// const History = ({allClicks}) => {
//   if (allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {allClicks.join(' ')}
//     </div>
//   )
// }
//! Passing Event Handlers to Child Components
const Button  = (props) => (
    <button onClick={props.onClick}>{props.text}</button>
)

function App() {

  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  // const [allClicks, setAll] = useState([])

  // const handelLeftclick = () => {
  //   setAll(allClicks.concat('L'))
  //   const updatedLeft = left + 1
  //   setLeft(updatedLeft)
  //   setTotal(updatedLeft+right)
  // }
  // const handelRightclick = () => {
  //   setAll(allClicks.concat('R'))
  //   const updatedRight = right + 1
  //   setRight(updatedRight)
  //   setTotal(left+updatedRight)
  // }
  // const [click, setClick] = useState({
  //   left: 0, right: 0
  // })
  // const [allCicks, setAll] = useState([])
  // const [total, setTotal] = useState(0)
  // const handelLeftclick = () => {
  //   const newClick = {
  //     ...click,
  //     left: click.left + 1
  //   }
  //   setClick(newClick)
  // }
  // const handelRightclick = () => {
  //   const newClick = {
  //     ...click,
  //     right: click.right + 1
  //   }
  //   setClick(newClick)
  // }
  // const handelLeftclick= () =>setClick({...click,left : click.left +1 })

  // const handelRightclick = () =>setClick({...click , right: click.right + 1})

  const  [value, setValue] = useState(10)
  // const handelClick = () => {
  //   setValue(0)
  // }
  //! function return function 

  const setToValue = (newValue) => {
      console.log('new Value' , newValue)
      setValue(newValue)
    }

 //! Passing Event Handlers to Child Components


 //! Do Not Define Components Within Components
  
  return (
    <>
      {/* {left}
      <Button onClick={handelLeftclick} text='left'/>
      <Button onClick={handelRightclick} text='right'/>
      {right}
      <History allClicks={allClicks} /> */}
      {/* <div>
        {value}
        <button onClick={setToVAlue(100)}>handred</button>
        <button onClick={setToVAlue(0)}>reset to zero</button>
        <button onClick={setToVAlue(value+1)}>increment</button>
      </div> */}
      {value}
      <Button onClick={() => setToValue(1000)} text="Thusend" />
      <Button onClick={() => setToValue(0)} text="zero" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </>
  )
}

export default App
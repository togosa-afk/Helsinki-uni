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



function App (){
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  return(
    <>
      {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
      {right}
    </>
  )
}

export default App
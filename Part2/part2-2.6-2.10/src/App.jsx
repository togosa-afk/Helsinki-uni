import { useState } from 'react'
import Names from './components/names.jsx'
import Filter from './components/filter.jsx'
import PersonForm from './components/personform.jsx'



const NamesList = ({persons}) => {
  return(
    <ul>
      {persons.map(person =>  
        <Names key={person.id} persons={person} />
      )}
    </ul>
  )
}


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [number , setNumber] = useState('')


  const addName = (event) => {
    event.preventDefault()
    const isDublicate = persons.some(p => p.name === newName) 
    if(isDublicate){
      alert(`${newName} is found in the phonebook`)
      setNewName('')
      return
    }
    const nameObj = {
      name : newName ,
      number : number,
      id : String(persons.length+1)
    }
    setPersons(persons.concat(nameObj))
    setNewName('')
    setNumber('')
    console.log(`button clicked ${event.target} `)
  }

  const handelPesonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handelNumberChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
  }
  


  return (
    <div>
      <h2>filter</h2>
      <Filter persons={persons} />
      <h2>Phonebook</h2>

      <PersonForm 
        addName={addName}
        newName={newName}
        handelPesonChange={handelPesonChange}
        number={number}
        handelNumberChange={handelNumberChange}
      />

      <h2>Numbers</h2>
      <NamesList persons={persons} />
    </div>
  )
}

export default App
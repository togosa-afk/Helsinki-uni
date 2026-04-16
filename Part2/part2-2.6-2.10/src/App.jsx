import { useEffect, useState } from 'react'
import Names from './components/names.jsx'
import Filter from './components/filter.jsx'
import PersonForm from './components/personform.jsx'
import personService from './service/persons.js'



const NamesList = ({ persons, handelDelete }) => {
  return (
    <ul>
      {persons.map(person =>
        <Names key={person.id} persons={person} onClick={() => handelDelete(person.id)} />
      )}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')

  const hook = () => {
    personService.getAll().then(response => setPersons(response))
  }

  useEffect(hook, [])


  const addName = (event) => {
    const isFound = persons.some(p => p.name === newName)
    const existPersond = persons.find(p => p.name === newName)


    if (isFound) {
      window.confirm(`update ${newName} wuth new number ?`)
      const changedNumber = { ...existPersond, number: number }

      personService.updateURL(existPersond.id, changedNumber).then(returnedPerson => {
        setPersons(persons.map(p => p.id === existPersond.id ? returnedPerson : p))
      })

      setNewName('')
      return
    }

    const nameObj = {
      name: newName,
      number: number
    }

    // add new person 
    personService.create(nameObj).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNumber('')
    })

    // if (isFound) {
    //   if (window.confirm(`update ${newName}?`)) {
    //     personService.updateURL(id, nameObj).then(() => {
    //       setPersons(persons.map(p => p.id === id ? nameObj : p))
    //     })
    //   }
    // }
  }

  const handelPesonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handelNumberChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
  }


  // delete function {
  // first take the id for the person then 
  // send request to the server to delete it 
  // the re-render the secreen 
  //}

  const handelDelete = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deleteURL(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
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
      <NamesList persons={persons} handelDelete={handelDelete} />
    </div>
  )
}

export default App
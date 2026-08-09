import { useEffect, useState } from 'react'
import Names from './components/names.jsx'
import Filter from './components/filter.jsx'
import PersonForm from './components/personform.jsx'
import personService from './service/persons.js'
import './index.css'
import Notification from './components/Notification.jsx'


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
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)


  const hook = () => {
    personService.getAll().then(response => setPersons(response))
  }

  useEffect(hook, [])


  const addName = (event) => {
    event.preventDefault()
    const isFound = persons.some(p => p.name === newName)
    const existPersond = persons.find(p => p.name === newName)


    if (isFound) {
      window.confirm(`update ${newName} wuth new number ?`)
      const changedNumber = { ...existPersond, number: number }

      personService.updateURL(existPersond.id, changedNumber).then(returnedPerson => {
        setPersons(persons.map(p => p.id === existPersond.id ? returnedPerson : p))
      }).catch(() => {
        setErrorMessage(`name ${existPersond.name} not found `)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
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
      setSuccessMessage(`name ${nameObj.name} added successfully`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
      setNewName('')
      setNumber('')
    }).catch(error => {
        let message = 'حدث خطأ غير متوقع'

        if (error.response && error.response.data && error.response.data.error) {
          // لو السيرفر بعث رسالة فالي ديشن (الوضع الطبيعي)
          message = error.response.data.error
        } else {
          // لو السيرفر طافي أو الرابط غلط
          message = error.message
        }

        setErrorMessage(message)
        setTimeout(() => setErrorMessage(null), 5000)
      })
  }

  const handelPesonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handelNumberChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
  }


  const handelDelete = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deleteURL(id).then(() => {setPersons(persons.filter(p => p.id !== id))})
      .then(() => {
        setSuccessMessage(`Note '${person.name}' was deleted successfully`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      }).catch(() => {
        setErrorMessage(`name ${person.name} was deleted or`)
        setPersons(persons.filter(p => p.id !== id))
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
  }


  return (
    <div>
      <Notification message={errorMessage} type="error" />
      <Notification message={successMessage} type="success" />
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
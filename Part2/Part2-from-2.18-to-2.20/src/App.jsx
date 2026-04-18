import { useState, useEffect } from 'react'
import Filter from './components/filter.jsx'
import InputBox from './components/inputbox.jsx'
import countryService from './services/countries.js'

function App() {
  
  const [country , setCountry] = useState([])
  const hook = () => {
    countryService.getAll().then(response => {
      setCountry(response)
    })
  }
  useEffect(hook, [])

  return (
    <>
      <Filter country={country}/>
    </>
  )
}

export default App

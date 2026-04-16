import { useState } from 'react'
import Names from './names.jsx'

const Filter = ({persons}) => {

    console.log(`person filter ${persons}`)
    const [filterName, setFilterName] = useState('')

    const personsToShow = persons.filter(person => 
        person.name.toLowerCase().includes(filterName.toLowerCase())
    )

    const handleFilterChange = (event) => {
        setFilterName(event.target.value)
    }

    return(
        <>
        <h3>filtered names</h3>
        <p>filter shown with <input type="text" value={filterName} onChange={handleFilterChange} /></p>
        <ul>
            {personsToShow.map(person =>  
            <Names key={person.id} persons={person} />
            )}
        </ul>
        </>
    )

}

export default Filter
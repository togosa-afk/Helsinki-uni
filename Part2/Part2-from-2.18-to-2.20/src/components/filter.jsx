import { useState, useEffect } from 'react' 
import axios from 'axios'

const Filter = ({ country }) => {
    const [countryFilter, setCountryFilter] = useState('')
    const [weather, setWeather] = useState(null) 

    const countryToShow = country.filter(c => 
        c.name.common.toLowerCase().includes(countryFilter.toLowerCase())
    )

    useEffect(() => {
        if (countryToShow.length === 1) {
            const capital = countryToShow[0].capital[0]
            const api_key = import.meta.env.VITE_SOME_KEY
            
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
                .then(response => {
                    setWeather(response.data)
                })
                .catch(error => console.log('Weather error:', error))
        } else {
            setWeather(null) 
        }
    }, [countryFilter]) 

    const handleNameCountryChange = (event) => setCountryFilter(event.target.value)
    const handleShowClick = (countryName) => setCountryFilter(countryName)


    if (countryToShow.length > 10) {
        return (
            <div>
                Find countries <input value={countryFilter} onChange={handleNameCountryChange} />
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }

    if (countryToShow.length === 1) {
        const c = countryToShow[0]
        return (
            <div>
                Find countries <input value={countryFilter} onChange={handleNameCountryChange} />
                <h2>{c.name.common}</h2>
                <div>capital {c.capital[0]}</div>
                <div>area {c.area}</div>
                <h4>languages:</h4>
                <ul>
                    {Object.values(c.languages).map(lang => <li key={lang}>{lang}</li>)}
                </ul>
                <img src={c.flags.png} alt="flag" width="150" />
                
                {weather && (
                    <div>
                        <h3>Weather in {c.capital[0]}</h3>
                        <p>temperature {weather.main.temp} Celsius</p>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" />
                        <p>wind {weather.wind.speed} m/s</p>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div>
            Find countries <input value={countryFilter} onChange={handleNameCountryChange} />
            <ul>
                {countryToShow.map(c => (
                    <li key={c.cca3}>
                        {c.name.common} 
                        <button onClick={() => handleShowClick(c.name.common)}>show</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Filter
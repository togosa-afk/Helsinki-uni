
// component to show country name
const CountryList = ({country}) => {
    console.log(country)
  return (
    <ul>
      {country.map(c => (
        <li key={c.cca3}>{c.name.common}</li>
      ))}
    </ul>
  )
}
export default CountryList
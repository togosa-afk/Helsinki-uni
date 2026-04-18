

const InputBox = ({nameCountrySearch , handleNameCountryChange}) => {
    return (
        <div>
            <label htmlFor="nameCountry">Find countries</label>
            <input id="nameCountry" placeholder='Enter country name' type="text" value={nameCountrySearch} onChange={handleNameCountryChange} />
        </div>
    )
}

export default InputBox
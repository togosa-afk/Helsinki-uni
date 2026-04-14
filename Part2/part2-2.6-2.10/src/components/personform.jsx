


const PersonForm = (props) => {
    return(
      <form onSubmit={props.addName}>
        <div>
          name: <input value={props.newName} onChange={props.handelPesonChange} required/>
        </div>
        <div>
          number: <input value={props.number} onChange={props.handelNumberChange} required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm
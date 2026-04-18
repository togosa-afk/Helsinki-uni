

const Note = ({note , toggleImportance , handelDelete}) => {
  const lable = note.important ? 'make not important' : 'make important'
    return(
      <>
      <li>{note.content}</li>
      <button onClick={toggleImportance}>{lable}</button>
      <button onClick={handelDelete}>delete</button>
      </>
    )
} 

export default Note
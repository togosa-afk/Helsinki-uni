

const Course = ({ name, exercises }) => {
  console.log(`name is : ${name} , and ex ${exercises}`)
  return (
    <li> {name} {exercises}</li>


  )
}

export default Course
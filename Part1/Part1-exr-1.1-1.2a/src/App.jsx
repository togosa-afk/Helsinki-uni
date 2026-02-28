
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Course = (props) => {
  return(
    <div>
      <p> The name of the part is : {props.parts} and the number of exercises is : {props.exercises}</p>
    </div>
  )
}


const Total = (props) =>{
  return(
    <div>
      <p>The total number of exercises is : {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Full Stack application development'
  const parts = [
    {name:"Part 0-Fundamentals of how web applications work", exercises:6},
    {name:"Part 1-React Basics", exercises:14},
    {name:"Part 2-Communication with the server", exercises:20},//from here I have not completed the parts below
    {name:"Part 3-Server programming with NodeJS's Express library", exercises:22},
    {name:"Part 4-Express application testing, user management", exercises:23},
    {name:"Part 5-Testing a React application", exercises:23},
    {name:"Part 6-Advanced space management", exercises:24},
    {name:"Part 7-React router, custom hooks, style libraries and webpack", exercises:21},
    {name:"Part 8-GraphQL", exercises:26},
    {name:"Part 9TypeScript", exercises:30},
    {name:"Part 10-React Native", exercises: 27},
    {name:"Part 11CI/CD", exercises: 21},
    {name:"Part 12-Container technology", exercises: 22},
    {name:"Part 13Using a relational database", exercises: 25}//I have not completed this part
  ]
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises + parts[3].exercises + parts[4].exercises + parts[5].exercises + parts[6].exercises + parts[7].exercises + parts[8].exercises + parts[9].exercises + parts[10].exercises + parts[11].exercises + parts[12].exercises;
  return (
    <>
    <Header course={course}/>
    <Course parts={parts[0].name} exercises={parts[0].exercises} />
    <Course parts={parts[1].name} exercises={parts[1].exercises} />
    <Course parts={parts[2].name} exercises={parts[2].exercises} />
    <Course parts={parts[3].name} exercises={parts[3].exercises} />
    <Course parts={parts[4].name} exercises={parts[4].exercises} />
    <Course parts={parts[5].name} exercises={parts[5].exercises} />
    <Course parts={parts[6].name} exercises={parts[6].exercises} />
    <Course parts={parts[7].name} exercises={parts[7].exercises} />
    <Course parts={parts[8].name} exercises={parts[8].exercises} />
    <Course parts={parts[9].name} exercises={parts[9].exercises} />
    <Course parts={parts[10].name} exercises={parts[10].exercises} />
    <Course parts={parts[11].name} exercises={parts[11].exercises} />
    <Course parts={parts[12].name} exercises={parts[12].exercises} />
    <Total total={total}/>
    </>
  )
}
export default App;


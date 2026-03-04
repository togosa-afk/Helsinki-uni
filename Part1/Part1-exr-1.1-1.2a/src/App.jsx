

// Header component
const Header = ({courseObj}) => {
  console.log("header props" + courseObj.name)
  return (
    <h1>{courseObj.name}</h1>
  )
}

// Course componenet
const Course = ({courseObj}) => {
  //console.log("course props.parts : " + props.courseObj.parts[0].name)
  const parts = courseObj.parts;
  //parts.map(part => <p key={part.name}>name of part is :  {part.name} and name of exercise is : {part.exercises} </p>)
  return(
    <>
    {  
      parts.map(part => <p key={part.name}>name of part is :  {part.name} and name of exercise is : {part.exercises} </p>)
    }
    </>
  )
}

// total component
const Total = ({total}) =>{
  console.log("Total props : " + total)
  return(
    <div>
      <p>The total number of exercises is : {total}</p>
    </div>
  )
}

const App = () => {
  const courseObj = {
    parts:[
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
    ],
    name : 'Full Stack application development' 
  }
  const total = courseObj.parts[0].exercises + courseObj.parts[1].exercises + courseObj.parts[2].exercises + courseObj.parts[3].exercises + courseObj.parts[4].exercises + courseObj.parts[5].exercises + courseObj.parts[6].exercises + courseObj.parts[7].exercises + courseObj.parts[8].exercises + courseObj.parts[9].exercises + courseObj.parts[10].exercises + courseObj.parts[11].exercises + courseObj.parts[12].exercises
  return (
    <>
    <Header courseObj={courseObj}/>
    <Course courseObj={courseObj} />
    <Total total={total}/>
    </>
  )
}
export default App;
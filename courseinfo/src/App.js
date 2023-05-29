const Header = ({name}) => {
  console.log("name", name)
  return (

    <h1>{name}</h1>
  )
}

const Content = ({parts}) => {
  console.log("Inside Content", parts);
  return(
    <div>
      <Part name={parts[0].name} exercise={parts[0].exercises}/>
      <Part name={parts[1].name} exercise={parts[1].exercises}/>
      <Part name={parts[2].name} exercise={parts[2].exercises}/>
  </div>
  )
}

const Part = ({name, exercise}) => {
  return(
    <p>{name} {exercise}</p>
  )
}

const Total = (props) => {
  console.log("Inside Total props:", props.parts);
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
      {
        name:'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
    
  return(
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App

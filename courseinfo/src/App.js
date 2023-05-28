const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  console.log("Inside Content");
  console.log(props);
  {/*console.log("props0" + props.course.parts[0])
  const course = props.course;
console.log("course" + course)*/}
  return(
    <div>
      {/*<Part  name={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Part  name={course.parts[1].name} exercises={course.parts[1].exercises}/>
  <Part  name={course.parts[2].name} exercises={course.parts[2].exercises}/>*/}
  </div>
  )
}

const Part = (props) => {
  console.log("Inside Part");
  console.log(props);
  
  return(
    <p>
    {/*{props.name} {props.exercises}*/}
  </p>
  )
}

const Total = (props) => {
  console.log("Inside Total");
  console.log(props);
  const {
    name,
    parts [
      {name, course},
      {name, course},
      {name, course}
    ]
  } = props.course
  console.log("name" + name);
  console.log("parts" + parts);
  return (
    <p>{}</p>
  );
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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App

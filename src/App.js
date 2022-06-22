

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = (parts) => {
  return (
    <div>
      {
        parts.parts.map(
          (element) => 
          <Part key={element.id} part={element} />
        )
      }
    </div>
  )
} 

const Part = (props) => {
  const { part } = props

  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = (props) => {
  const total = props.exercises.reduce((s, p) => s + p) 
  
  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  )
}
        

const App = () => {
  const courses = [
    {
    id: 1,
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    part: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  return (
    <div>
      <Header course={courses[0].name} />
      <Content parts={courses[0].part} />
      <Total  exercises={courses[0].part.map(x => x['exercises'])} />
      <Header course={courses[1].name} />
      <Content parts={courses[1].part} />
      <Total exercises={courses[1].part.map(x => x['exercises'])} />
    </div>
  )
}

export default App;



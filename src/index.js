import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => <h1>{course.name}</h1>
const Part = ({n, x}) => <p>{n} - {x}</p>
const Contents = ({course}) => {
  return (
    <div>
      <Part n={ course.parts[0].name} x={course.parts[0].exercises } />
      <Part n={ course.parts[1].name} x={course.parts[1].exercises } />
      <Part n={ course.parts[2].name} x={course.parts[2].exercises } />
    </div>
  )
}
const Total = ({course}) => <p>Total {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} exercises.</p>

const App = () => {
  const course = {
    name: 'Superadvanced Web And Mobile Programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8
      },
      {
        name: 'Using props',
        exercises: 10
      },
      {
        name: 'Component states',
        exercises: 12
      }
    ]
  }
  return (
    <div>
      <Header course={course}/>
      <hr/>
      <Contents course={course}/>
      <hr/>
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));

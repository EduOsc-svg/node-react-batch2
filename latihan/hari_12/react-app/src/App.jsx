
import Welcome from './components/Welcome'
import './App.css'

function App() {

  return (
    <>
    people = [
      { id: 1, name: 'Alice', color: 'red' },
      { id: 2, name: 'Bob', color: 'blue' },
      { id: 3, name: 'Charlie', color: 'green' }
    ]
      {people.map(person => (
        <Welcome key={person.id} name={person.name} color={person.color} />
      ))}
    </>
  )
}

export default App

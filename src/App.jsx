import './App.css'
import PersonList from './components/PersonList'
import PersonAdd from './components/PersonAdd'
import PersonRemove from './components/PersonRemove';
function App() {


  return (
    <>
      <PersonAdd/>
      <PersonList/>
      <PersonRemove/>
    </>
  )
}

export default App

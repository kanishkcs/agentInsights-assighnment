import { useState } from 'react'
import Welcome from './component/Welcome'
import { HashRouter as Router , Routes ,Route } from 'react-router-dom'
import Quiz from './component/Quiz'
import 'animate.css';
import ShowResult from './component/ShowResult';

function App() {
  const [name,setName] = useState("")
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Welcome setName={setName}/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/result/:id' element={<ShowResult name={name}/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

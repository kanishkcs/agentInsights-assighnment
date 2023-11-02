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
        <Route path='/' element={<Quiz/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/result' element={<ShowResult/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

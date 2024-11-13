import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Welcome/>} />
        <Route path='/quiz' element={<Quiz/>} />
      </Routes>
    </Router>
  )
}

export default App
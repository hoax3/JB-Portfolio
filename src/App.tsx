import './App.css'
import { About } from './components/About'
import { Intro } from './components/Intro'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { NotFound } from './components/NotFound'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<Intro />} />
      <Route path='about' element={<About />} />
      <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App

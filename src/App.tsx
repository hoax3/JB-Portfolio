import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, Intro, Navbar, NotFound} from './components/Layout'
import './App.css'

const App: React.FC = () => {

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

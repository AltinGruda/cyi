import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PublicRooms from './pages/PublicRooms'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<PublicRooms />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

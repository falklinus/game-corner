import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tetris from './pages/Tetris'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tetris' element={<Tetris />} />
    </Routes>
  )
}

export default App

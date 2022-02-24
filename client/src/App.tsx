import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from 'layouts'
import { Login, Register, Tetris, Brickbreaker, Browse } from 'pages'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/games' element={<Browse />} />
        <Route path='/games/tetris' element={<Tetris />} />
        <Route path='/games/brickbreaker' element={<Brickbreaker />} />
      </Routes>
    </Router>
  )
}

export default App

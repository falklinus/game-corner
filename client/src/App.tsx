import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from 'layouts'
import { Login, Register, Tetris, Ballbreaker } from 'pages'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/games/tetris' element={<Tetris />} />
        <Route path='/games/ballbreaker' element={<Ballbreaker />} />
      </Routes>
    </Router>
  )
}

export default App

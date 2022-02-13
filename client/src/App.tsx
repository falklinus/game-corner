import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from 'layouts'
import { Tetris } from 'pages'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/games/tetris' element={<Tetris />} />
      </Routes>
    </Router>
  )
}

export default App

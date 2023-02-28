import { Route, Routes } from 'react-router-dom'
import MemoTest from './screens/MemoTest'
import WordPerMinute from './screens/WordPerMinute'
import Pokemon from './screens/Pokemon'
import TicTacToe from './screens/TicTacToe'

function App () {
  return (
    <Routes>
      <Route path='/memotest' element={<MemoTest />} />
      <Route path='/wpm' element={<WordPerMinute />} />
      <Route path='/pokemon' element={<Pokemon />} />
      <Route path='/tictactoe' element={<TicTacToe />} />
    </Routes>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import MemoTest from './screens/MemoTest'
import WordPerMinute from './screens/WordPerMinute'
import Pokemon from './screens/Pokemon'

function App () {
  return (
    <Routes>
      <Route path='/memotest' element={<MemoTest />} />
      <Route path='/wpm' element={<WordPerMinute />} />
      <Route path='/pokemon' element={<Pokemon />} />
    </Routes>
  )
}

export default App

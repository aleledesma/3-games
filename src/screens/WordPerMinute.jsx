import { useState, useEffect } from 'react'

const WORDS = [
  'abruptly',
  'absurd',
  'abyss',
  'affix',
  'askew',
  'avenue',
  'awkward',
  'axiom',
  'azure',
  'bagpipes'
]
const WordPerMinute = () => {
  const [word, setWord] = useState(WORDS[Math.random() * WORDS.length | 0])
  const [points, setPoints] = useState(0)
  const [buffer, setBuffer] = useState('')
  const [time, setTime] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (buffer === word) {
      setPoints(points + 1)
      setWord(WORDS[Math.random() * WORDS.length | 0])
    }
    setBuffer('')
  }

  const handlePlay = () => {
    setTime(60)
    setPoints(0)
  }

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => { setTime(time - 1) }, 1000)
      return () => clearTimeout(timer)
    }
  }, [time])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '15px' }}>
            <span>points: {points}</span>
            <span>time: {time}</span>
      </div>
      {time === 0
        ? (
        <button onClick={() => handlePlay()} style={{ width: '100%', padding: '8px', fontWeight: 'bold', fontSize: '1rem' }}>{points === 0 ? 'Play' : 'Play Again'}</button>
          )
        : (
        <div>
          <h1>{word}</h1>
          <form onSubmit={handleSubmit}>
            <input onChange={(e) => setBuffer(e.target.value)} autoFocus type="text" value={buffer} style={{ width: '300px', height: '34px', fontSize: '1.5rem', padding: '5px' }} />
          </form>
        </div>
          )}
    </div>
  )
}

export default WordPerMinute

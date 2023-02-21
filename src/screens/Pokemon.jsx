import { useState } from 'react'

const POKEMONS = [
  'Bulbasaur',
  'Ivysaur',
  'Venusaur',
  'Charmander',
  'Charmeleon',
  'Charizard',
  'Squirtle',
  'Wartortle',
  'Blastoise',
  'Caterpie',
  'Metapod',
  'Butterfree',
  'Weedle',
  'Kakuna',
  'Beedrill',
  'Pidgey',
  'Pidgeotto',
  'Pidgeot',
  'Rattata',
  'Raticate',
  'Spearow',
  'Fearow',
  'Ekans',
  'Arbok',
  'Pikachu',
  'Raichu',
  'Sandshrew'
]

const MATCH = Math.floor(Math.random() * POKEMONS.length)

const Pokemon = () => {
  const [win, setWin] = useState(false)
  const [buffer, setBuffer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (buffer.toLocaleLowerCase() === POKEMONS[MATCH].toLocaleLowerCase()) {
      setWin(true)
    }
    setBuffer('')
  }

  return (
  <div>
    <img
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${MATCH + 1}.png`}
    style={{
      width: '350px',
      height: '350px',
      imageRendering: 'pixelated',
      filter: win ? 'none' : 'brightness(0) invert(1)',
      margin: '0 auto',
      display: 'block'
    }}
    />
    {win
      ? (
      <div>
        <h1 style={{ textAlign: 'center' }}>You Win!</h1>
        <button onClick={() => location.reload()} style={{ width: '100%', fontSize: '25px', padding: '5px', cursor: 'pointer' }}>
          Play Again
        </button>
      </div>
        )
      : (
      <form onSubmit={handleSubmit}>
      <input
      onChange={(e) => setBuffer(e.target.value)}
      value={buffer}
      autoFocus
      type="text"
      placeholder="Guess the Pokemon"
      style={{ width: '350px', height: '44px', fontSize: '24px', padding: '10px' }}
      />
    </form>
        )}
  </div>)
}

export default Pokemon

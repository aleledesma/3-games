import { useEffect, useState } from 'react'
import './MemoTest.css'

const IMAGES = [
  'https://icongr.am/devicon/android-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/ie10-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/react-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/vuejs-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/webpack-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/yarn-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/c-original.svg?size=128&color=currentColor'
]
  .flatMap(image => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5)

const MemoTest = () => {
  const [selected, setSelected] = useState([])
  const [guessed, setGuessed] = useState([])
  const [win, setWin] = useState(false)

  useEffect(() => {
    if (selected.length === 2) {
      const [a, b] = selected
      if (a.split('|')[1] === b.split('|')[1]) {
        setGuessed(guessed => guessed.concat(selected))
      }
      setTimeout(() => setSelected([]), 1000)
      clearTimeout()
    }
  }, [selected])

  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      setWin(true)
    }
  }, [guessed])

  return (
    <>
      <h1>{win ? 'YOU WIN!' : 'MEMO-TEST'}</h1>
      <ul>
        {IMAGES.map((image) => {
          const [, URL] = image.split('|')
          return (
            <li
            onClick={() => (selected.length < 2 && !selected.includes(image)) && setSelected(selected => selected.concat(image))}
            key={image}
            >
          {guessed.includes(image) || selected.includes(image)
            ? (
            <img src={URL} />
              )
            : (
            <img src='https://icongr.am/fontawesome/eye.svg?size=128&color=e7cbcb' />
              )}
        </li>
          )
        })}
      </ul>
    </>

  )
}

export default MemoTest

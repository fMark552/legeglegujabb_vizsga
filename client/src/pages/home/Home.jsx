import { useContext, useState } from 'react'
import './Home.scss'
import Posts from '../../components/posts/Posts.jsx'

const Home = () => {
  const [characterCount, setCharacterCount] = useState(0)

  const [newThought, setNewThought] = useState({
    text: '',
  })

  const handleChange = (e) => {
    setNewThought((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    const inputText = e.target.value
    const textWithoutSpaces = inputText.replace(/\s/g, '')
    setCharacterCount(textWithoutSpaces.length)
  }

  return (
    <div>
      <div className="your_feed_title">
        <h1>Your feed</h1>
      </div>

      <div className="new_post">
        <textarea
          rows="8"
          maxLength="300"
          type="text"
          placeholder="Your thoughts..."
          onChange={handleChange}
        />
        <div className="word_counter">
          <p className="word_count">
            <span id="character_counter">{characterCount}</span>/300
          </p>
        </div>
        <button>Publish</button>
      </div>
      <Posts />
    </div>
  )
}

export default Home

import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Registration.scss'

const Registration = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  })

  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:2000/api/auth/register', inputs)
    } catch (err) {
      setErr(err.response.data)
    }
  }
  // console.log(inputs)
  console.log(err)
  return (
    <div>
      <div className="registration">
        <div className="card">
          <div className="left">
            <h1>Register to Tweedle</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
            </form>
            {err && err}
            <button onClick={handleClick}>Registration</button>
            <p>
              If you already have an account, you can login{' '}
              <span>
                {' '}
                <Link to="/login">here</Link>
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration

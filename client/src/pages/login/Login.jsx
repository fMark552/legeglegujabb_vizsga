import { Link, useNavigate } from 'react-router-dom'
import './Login.scss'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })
  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const { login } = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate('/')
    } catch (err) {
      setErr(err.response.data)
    }
  }

  return (
    <div>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Login to Tweedle</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </form>
            {err && err}
            <button onClick={handleLogin}>Login</button>
            <p>
              If you dont't have an account, you can register{' '}
              <span>
                {' '}
                <Link className="regHere" to="/registration">
                  here
                </Link>
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

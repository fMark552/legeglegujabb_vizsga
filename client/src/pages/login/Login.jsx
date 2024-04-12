import { Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Login to Tweedle</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
            </form>
            <button>Login</button>
            <p>
              If you dont't have an account, you can register{' '}
              <span>
                {' '}
                <Link to="/registration">here</Link>
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

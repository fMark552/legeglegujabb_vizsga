import { Link } from 'react-router-dom'
import './Registration.scss'

const Registration = () => {
  return (
    <div>
      <div className="registration">
        <div className="card">
          <div className="left">
            <h1>Register to Tweedle</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="text" placeholder="Name" />
            </form>
            <button>Registration</button>
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

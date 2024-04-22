import './Sidebar.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div className="container sidebar">
        <div className="images">
          <div className="image">
            <Link to={`/profile/1`}>
              <img
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                alt="profile_pic"
                className="profilePic"
              />
            </Link>
          </div>
        </div>
        <div className="menu">
          <h3>Friend list</h3>
          <hr />
          <div className="item">
            <p>John</p>
            <button>Unfollow</button>
          </div>
          <div className="item">
            <p>Jane</p>
            <button>Unfollow</button>
          </div>
          <div className="item">
            <p>Jack</p>
            <button>Unfollow</button>
          </div>
          <button>See all friends</button>
          <h3>Your stats</h3>
          <hr />
          <div className="stats">
            <div>
              <FavoriteBorderOutlinedIcon />
              <p>39</p>
            </div>
            <div>
              <HeartBrokenOutlinedIcon />
              <p>15</p>
            </div>
            <div>
              <TextsmsOutlinedIcon />
              <p>58</p>
            </div>
            <div>
              <PersonAddAltOutlinedIcon />
              <p>23</p>
            </div>
            <div>
              <CreateOutlinedIcon />
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

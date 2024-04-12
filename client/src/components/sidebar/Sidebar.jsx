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
      <div className="mobile_sidebar">
        <button>Profile</button>
        <button>Friends</button>
        <button>Stats</button>
      </div>

      <div className="container sidebar">
        <div className="images">
          <div className="image">
            <Link to={`/profile/1`}>
              <img
                src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
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
            <p>User1</p>
            <button>Unfollow</button>
          </div>
          <div className="item">
            <p>User2</p>
            <button>Unfollow</button>
          </div>
          <div className="item">
            <p>User3</p>
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

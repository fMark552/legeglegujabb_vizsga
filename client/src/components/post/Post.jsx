import './Post.scss'
import { Link } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import Comments from '../comment/Comments'
import { useState } from 'react'

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false)

  const liked = false

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.img} alt="profile_pic" />
            <Link to={`/profile/${post.userId}`}>
              <span>{post.name}</span>
            </Link>
          </div>
          <div className="details">
            <span className="date">5 min ago</span>
          </div>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="image" />
        </div>
        <div className="actions">
          <div className="item">
            {liked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            31
          </div>
          <div className="item">
            {liked ? <HeartBrokenIcon /> : <HeartBrokenOutlinedIcon />}
            13
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            56
          </div>
        </div>
        <hr />
        {commentOpen && <Comments />}
      </div>
    </div>
  )
}

export default Post

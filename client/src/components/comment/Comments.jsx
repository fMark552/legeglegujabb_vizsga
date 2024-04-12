import { useContext } from 'react'
import './Comments.scss'
import { AuthContext } from '../../context/authContext'

const Comments = () => {
  const { currentUser } = useContext(AuthContext)

  const comments = [
    {
      id: 1,
      desc: 'fake comment',
      name: 'Markkkk',
      profilePicture:
        'https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png',
    },
  ]

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="your profile picture" />
        <input type="text" placeholder="Write a comment..." />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="profile picture" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">2 hour ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments

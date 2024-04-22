import './Home.scss'
import Posts from '../../components/posts/Posts.jsx'
import Share from '../../components/share/Share.jsx'
import { Link } from 'react-router-dom'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

const Home = (req, res) => {
  return (
    <div>
      <div className="your_feed_title">
        <h1>Your feed</h1>
      </div>
      <Share />
      <div className="post">
        <img
          src="https://th.bing.com/th/id/R.c2d9c8dd2b831d079dfefb0a707458ec?rik=mdJgtXLFkOXVxg&pid=ImgRaw&r=0"
          alt="Profile Picture"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />
        <Link to={`/profile/1`}>
          <strong>Mark</strong>
        </Link>
        <button className="followButton">
          <PersonAddAlt1Icon />
        </button>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div>
          <button>Comment</button>
        </div>
      </div>
      <div className="post">
        <img
          src="https://th.bing.com/th/id/R.8ebcae52020758bfb51550f6c30f285a?rik=egPqt6R0ObI2%2fQ&pid=ImgRaw&r=0"
          alt="Profile Picture"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />
        <Link to={`/profile/1`}>
          <strong>Jane</strong>
        </Link>
        <button className="followButton">
          <PersonAddAlt1Icon />
        </button>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div>
          <button>Comment</button>
        </div>
      </div>
      <div className="post">
        <img
          src="https://th.bing.com/th/id/R.8c012738dc65a6c1abf2817ac8f1c8f5?rik=SPT%2fyv%2f9JLPTDA&pid=ImgRaw&r=0"
          alt="Profile Picture"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />
        <Link to={`/profile/1`}>
          <strong>John</strong>
        </Link>
        <button className="followButton">
          <PersonAddAlt1Icon />
        </button>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <div>
          <button>Comment</button>
        </div>
      </div>
      <div className="post">
        <img
          src="https://th.bing.com/th/id/R.e19fd48147f55df2980634bb36366687?rik=5LwMdvkiiuc9Hw&pid=ImgRaw&r=0"
          alt="Profile Picture"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />
        <Link to={`/profile/1`}>
          <strong>Victoria</strong>
        </Link>
        <button className="followButton">
          <PersonAddAlt1Icon />
        </button>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <div>
          <button>Comment</button>
        </div>
      </div>
      <Posts />
    </div>
  )
}

export default Home

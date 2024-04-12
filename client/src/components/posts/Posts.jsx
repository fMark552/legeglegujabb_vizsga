import Post from '../post/Post'
import './Posts.scss'

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: 'Márk',
      userId: 1,
      profilePic:
        'https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500',
    },
    {
      id: 2,
      name: 'fMark',
      userId: 1,
      profilePic:
        'https://th.bing.com/th/id/R.e2f9693d042c9f451c91556bc2bdd7bb?rik=1dSPsAQguEWEvw&pid=ImgRaw&r=0',
      desc: 'uihiejf3737374584',
    },
    {
      id: 3,
      name: 'Aha',
      userId: 1,
      desc: 'aha aha aha',
    },
  ]

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts

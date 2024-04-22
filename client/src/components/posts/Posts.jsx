import Post from '../post/Post'
import './Posts.scss'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get('/posts?userId=' + userId).then((res) => res.data),
  })

  return (
    <div className="posts">
      {data && data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  )
}

export default Posts

import './Profile.scss'
import Posts from '../../components/posts/Posts'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import Update from '../../components/update/Update'
import { useState } from 'react'

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false)
  const { currentUser } = useContext(AuthContext)

  const userId = parseInt(useLocation().pathname.split('/')[2])

  const { isLoading, error, data } = useQuery(['user'], () =>
    makeRequest.get('/users/find/' + userId).then((res) => {
      return res.data
    })
  )

  const { isLoading: rIsLoading, data: relationshipData } = useQuery(
    ['relationship'],
    () =>
      makeRequest.get('/relationships?followedUserId=' + userId).then((res) => {
        return res.data
      })
  )

  // const queryClient = useQueryClient()

  // const mutation = useMutation(
  //   (following) => {
  //     if (following)
  //       return makeRequest.delete('/relationships?userId=' + userId)
  //     return makeRequest.post('/relationships', { userId })
  //   },
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries(['relationship'])
  //     },
  //   }
  // )

  // const handleFollow = () => {
  //   mutation.mutate(relationshipData.includes(currentUser.id))
  // }

  return (
    <div className="profile">
      {isLoading ? (
        'loading'
      ) : (
        <>
          <div className="images">
            <img src={'/upload/' + data.coverPic} alt="" className="cover" />
            <img
              src={'/upload/' + data.profilePic}
              alt=""
              className="profilePic"
            />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="center">
                <span>{data.name}</span>
                {rIsLoading ? (
                  'loading'
                ) : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)}>update</button>
                ) : (
                  <button>
                    {relationshipData.includes(currentUser.id)
                      ? 'Following'
                      : 'Follow'}
                  </button>
                )}
              </div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  )
}

export default Profile

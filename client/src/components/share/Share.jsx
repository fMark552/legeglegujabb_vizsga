import './Share.scss'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'

const Share = () => {
  const [file, setFile] = useState(null)
  const [desc, setDesc] = useState('')

  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await makeRequest.post('/upload', formData)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  const { currentUser } = useContext(AuthContext)

  const queryClient = useQueryClient()
  // const query = useQuery({ queryKey, queryFn })

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return makeRequest.post('/posts', newPost)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    },
  })

  const handleClick = async (e) => {
    e.preventDefault()
    let imgUrl = ''
    if (file) imgUrl = await upload()
    mutation.mutate({ desc, img: imgUrl })
    setDesc('')
    setFile(null)
  }

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={'/upload/' + currentUser.profilePic} alt="" />
            <input
              className="new_thought"
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>

        <div className="bottom">
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <span>
                  <AddPhotoAlternateIcon />
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Share

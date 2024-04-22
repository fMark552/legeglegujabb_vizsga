import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import commentRoutes from './routes/comments.js'
import likeRoutes from './routes/likes.js'
import relationshipRoutes from './routes/relationships.js'
import cookieParser from 'cookie-parser'
import { ALogin, getABlog, getAComment, getAUser, postABlog, postAComment } from './controllers/Android.js'

const app = express()
const port = 2000

app.use((req, res, next) => {
  res.header('Access-Controll-Allow-Credentials', true)
  next()
})
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/likes', likeRoutes)
app.use('/api/relationships', relationshipRoutes)

//Android
app.get('/comments/:id',getAComment)
app.get('/pakkBlog',getABlog)
app.get('/users/:username',getAUser)

app.post('/login',ALogin)

app.post('/postblog',postABlog)
app.post('/postcomment',postAComment)

app.listen(port, () => {
  console.log(`Port number: ${port}`)
})

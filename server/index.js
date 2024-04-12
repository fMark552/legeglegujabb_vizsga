import Express from 'express'
const app = Express()

import authRoutes from '/routes/auth.js'
import userRoutes from '/routes/users.js'
import postRoutes from '/routes/posts.js'
import commentRoutes from '/routes/comments.js'
import likeRoutes from './routes/likes.js'

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/comment', commentRoutes)
app.use('/api/likes', likeRoutes)
app.use('/api/posts', postRoutes)

app.use()

app.listen(2000, () => {
  console.log('A szerver a 2000-porton fut.')
})

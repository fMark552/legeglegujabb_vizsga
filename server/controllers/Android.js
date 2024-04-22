import { db } from '../connect.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const postABlog = (req, res) => {
    const q = 'INSERT INTO posts (`desc`, `userId`, `createdAt`) VALUES (?, ?, ?);'
    db.query(
      q,
      [req.body.desc, req.body.userId, req.body.createdAt],
      (err, data) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json('Post has been created!')
      }
    )
}

export const getABlog=(req, res)=>{
    const q ='SELECT posts.id, posts.desc AS text, posts.createdAt AS timestamp, users.username AS users FROM posts INNER JOIN users ON posts.userId=users.id;';
    db.query(q, (err, data) => {
      if (err) return res.send(err)
      return res.json(data)
    })
          
}

export const getAComment = (req, res) => {
    const blogId = req.params.id;
    const q='SELECT comments.id AS commentid, comments.desc AS commentText, comments.createdAt AS timestamp, users.username, posts.id AS blogid FROM comments INNER JOIN users ON comments.userId=users.id INNER JOIN posts ON comments.postId=posts.id WHERE posts.id = ?;';
    db.query(q,[blogId],(err,data)=>{
      if(err) return res.send(err);
      return res.json(data);
    })
  }
  
  export const postAComment=(req,res)=>{
    const q='INSERT INTO comments (`desc`, `createdAt`, `userId`, `postId`) VALUES (?, ?, ?, ?);';
    db.query(q,[req.body.desc,req.body.createdAt,req.body.userId,req.body.postId],(err,data)=>{
      if(err) return res.status(500).json(err);
      return res.status(200).json('Comment has been created!')
    })
}

  export const getAUser = (req, res) => {
    const username=req.params.username;
    const q="SELECT users.id, users.username, users.password, users.email FROM users WHERE users.username=?;";
    db.query(q,[username],(err,data)=>{
      if(err) return res.send(err);
      return res.json(data);
    })
}

export const ALogin = (req, res) => {
    const q = 'SELECT * FROM users WHERE username = ?'
  
    db.query(q, [req.body.username], (err, data) => {
      if (err) return res.status(500).json(err)
      if (data.length === 0)
        return res.status(404).json('Username was not found!')
  
      const passwordCheck = bcrypt.compareSync(
        req.body.password,
        data[0].password
      )
  
      if (!passwordCheck)
        return res.status(400).json('Wrong username or password!')
  
      const token = jwt.sign({ id: data[0].id }, 'Key')
  
      const { password, ...others } = data[0]
  
      res
        .cookie('Tolkien', token, {
          httpOnly: true,
        })
        .status(200)
        .json(others)
    })
}
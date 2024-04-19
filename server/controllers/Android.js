import { db } from '../Database.js'
import jwt from 'jsonwebtoken'

export const postABlog = (req, res) => {
    const q = 'INSERT INTO blog (text, userId, timestamp) VALUES (?, ?, ?);'
    db.query(
      q,
      [req.body.text, req.body.userId, req.body.timestamp],
      (err, data) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json('Post has been created!')
      }
    )
}

export const getABlog=(req, res)=>{
    const q ='SELECT blog.id, blog.text, blog.timestamp, users.username AS user FROM blog INNER JOIN users ON blog.userId=users.id;';
    db.query(q, (err, data) => {
      if (err) return res.send(err)
      return res.json(data)
    })
          
}

export const getAComment = (req, res) => {
    const blogId = req.params.id;
    const q='SELECT comments.id AS commentid, comments.commentText, comments.timestamp, users.username, blog.id AS blogid FROM comments INNER JOIN users ON comments.commentUserId=users.id INNER JOIN blog ON comments.commentBlogId=blog.id WHERE blog.id = ?;';
    db.query(q,[blogId],(err,data)=>{
      if(err) return res.send(err);
      return res.json(data);
    })
  }
  
  export const postAComment=(req,res)=>{
    const q='INSERT INTO comments (commentText, timestamp, commentUserId, commentBlogId) VALUES (?, ?, ?, ?);';
    db.query(q,[req.body.commentText,req.body.timestamp,req.body.commentUserId,req.body.commentBlogId],(err,data)=>{
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
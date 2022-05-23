import React from 'react'
import { Card } from 'react-bootstrap'
import Postcss from './Post.css'
function Post() {
  return (
    <div className='blogPostContainer'>
        <Card>
            <div className="blogHeader">
                <span className='blogCategory'>Features</span>
                <h1 className='postTitle'>Lorem ipsum dolor sit amet.</h1>
                <span className='postedBy'>Posted on July 21,2016 bySora Blogging Tips</span>
            </div>
            <div className="postimage">
                <img src="/image/pizzahot.jpg" alt="Post Image" />
            </div>
        </Card>
    </div>
  )
}

export default Post

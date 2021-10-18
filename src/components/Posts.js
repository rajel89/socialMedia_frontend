import React from 'react';

const Posts = ({posts, postReply, setPostList}) => {

    return (
        <ul className="ul">
            {posts.map((post, index) => {
            return(
            <li key={index}>
                 {post._id} 
                Username: {post.name}<br></br>
                  {post.text}<br></br>
                  {post.datePosted}   
                Likes: {post.likes}&nbsp;&nbsp;
                &nbsp;&nbsp;<button onClick = {() => postReply(post._id)}>Reply</button>
                <ul>
                    {post.replies.map((reply, index) => <li key={index}>{reply.replyText}</li>)}
                </ul>
                <br></br>
            </li>
            )
        })}    
        </ul>
    )
}
// basic concept for nesting objects into arrays, etc
// userArray.map((user,index)=> <ul key={index}>{user.posts.map((post,index)=><li key={index}> {post.text}</li>)}</ul>)



export default Posts;
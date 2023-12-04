import { useEffect, useState } from "react"
import PostItem from "./PostItem/PostItem"

const LatestPosts = () => {
  const [posts, setPosts] = useState([])
  const deletePost = async (id) => {
    await fetch(`http://localhost:3001/posts/${id}`, {
      method: 'DELETE'
    })
    setPosts(posts.filter(post => post._id !== id))
  }

  async function getPosts() {
    const postsResponse = await fetch('http://localhost:3001/posts/')
    const posts = await postsResponse.json()
    setPosts(posts)
  }

  async function updatePost(id, title, description) {
    const response = await fetch(`http://localhost:3001/posts/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description: description
      })
    })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <h2>Últimos posts</h2>
      {posts.map(post => <PostItem
        id={post._id}
        title={post.title}
        description={post.description}
        createdAt={post.createdAt}
        author={{
          _id: "asdfasdf",
          name: "Fer"
        }}
        deletePost={deletePost}
        updatePost={updatePost}
      />)}
    </div>
  )
}

export default LatestPosts
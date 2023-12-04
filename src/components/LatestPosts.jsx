import { useEffect, useState } from "react"
import PostItem from "./PostItem/PostItem"



const LatestPosts = () => {
  async function getPosts() {
    const postsResponse = await fetch('http://localhost:3001/posts/')
    const posts = await postsResponse.json()
    setPosts(posts)
  }

  const [posts, setPosts] = useState([])
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
      />)}
    </div>
  )
}

export default LatestPosts
const PostItem = ({ title, author, createdAt, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <span>{author.name}</span>
      <span>Publicado el {createdAt}</span>
      <div>
        {description}
      </div>
    </div>
  )
}

export default PostItem
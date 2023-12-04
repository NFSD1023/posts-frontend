import './PostItem.css'

const PostItem = ({ title, author, createdAt, description }) => {
  return (
    <div className='post-item'>
      <h3>{title}</h3>
      <div className='post-meta'>
        <span>{author.name}</span>
        <span>Publicado el {createdAt}</span>
      </div>
      <div>
        {description}
      </div>
    </div>
  )
}

export default PostItem
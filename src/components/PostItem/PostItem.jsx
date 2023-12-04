import { useState } from 'react'
import './PostItem.css'

const PostItem = ({
  title,
  author,
  createdAt,
  description,
  id,
  deletePost,
  updatePost
}) => {
  const [editMode, setEditMode] = useState(false)
  const [titleEdited, setTitleEdited] = useState('')
  const [descriptionEdited, setDescriptionEdited] = useState('')

  const onTitleEdited = (e) => {
    setTitleEdited(e.target.value)
  }

  const onDescriptionEdited = (e) => {
    setDescriptionEdited(e.target.value)
  }

  return (
    <div className='post-item'>
      {editMode ?
        <input
          type='text'
          placeholder={title}
          value={titleEdited}
          onChange={onTitleEdited} /> :
        <h3>{title}</h3>}
      <div className='post-meta'>
        <span>{author.name}</span>
        <span>Publicado el {createdAt}</span>
      </div>
      <div>
        {editMode ?
          <input
            type='text'
            placeholder={description}
            value={descriptionEdited}
            onChange={onDescriptionEdited} /> :
          description
        }

      </div>
      <div className='post-actions'>
        <button
          className='post-delete'
          onClick={() => deletePost(id)}>
          Delete
        </button>
        <button
          className='post-edit'
          onClick={() => setEditMode(!editMode)}>
          {editMode ? 'Cancelar' : 'Editar'}
        </button>
        <button
          onClick={() => updatePost(id, titleEdited, descriptionEdited)}>
          Guardar
        </button>
      </div>
    </div>
  )
}

export default PostItem
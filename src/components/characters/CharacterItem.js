import React from 'react'

export const CharacterItem = ({ item }) => {
  const { full_path, name ,description,tags} = item
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={full_path} alt='' />
        </div>
        <div className='card-back'>
          <h1>{name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {description.name}
            </li>
            <li>
              <strong>Description:</strong> {name}
            </li>
            <li>
              <strong>tags:</strong> {tags}
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

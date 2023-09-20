import { useState, useRef } from 'react'
import type { ImageType } from '../utils/utils.ts'

interface Props {
  image: ImageType
  title: string
}
const ProjectImages = ({ image, title }: Props) => {
  const dialogRef = useRef(null)

  const handleClick = () => {
    dialogRef.current.showModal()
  }

  const handleCloseModal = () => {
    dialogRef.current.close()
  }

  return (
    <div>
      <img
        src={image.cover}
        alt={title}
        onClick={handleClick}
        className='cursor-pointer rounded-xl'
      />
      <dialog ref={dialogRef}>
        <h1>{title}</h1>
        <img src={image.cover} alt={title} />
        <button onClick={handleCloseModal}>Close</button>
      </dialog>
    </div>
  )
}

export default ProjectImages

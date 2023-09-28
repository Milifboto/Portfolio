import { useRef } from 'react'
import type { ImageType, TechnologiesType } from '../utils/utilsProyects.ts'

interface Props {
  image: ImageType
  title: string
  github: string
  url: string
  technologies: TechnologiesType[]
  description: string
}
const ProjectImages = ({
  image,
  title,
  github,
  url,
  technologies,
  description,
}: Props) => {
  const dialogRef: React.MutableRefObject<HTMLDialogElement | null> =
    useRef(null)

  const handleClick = () => {
    if (dialogRef.current !== null) {
      dialogRef.current.showModal()
    }
  }

  const handleCloseModal = () => {
    if (dialogRef.current !== null) {
      dialogRef.current.close()
    }
  }

  return (
    <div>
      <img
        src={image.cover}
        alt={title}
        onClick={handleClick}
        className='cursor-pointer aspect-auto transition-transform duration-300 rounded-xl hover:scale-105 w-auto h-auto'
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

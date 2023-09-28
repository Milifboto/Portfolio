interface Props {
  id: number
  title: string
  subtitle: string
  image: string
  url: string
}

const CertifImages = ({ id, title, subtitle, image, url }: Props) => {
  return (
    <div>
      <img
        src={image}
        alt={title}
        className='cursor-pointer aspect-auto transition-transform duration-300 rounded-xl hover:scale-105 w-[500px] h-[250px]'
      />
    </div>
  )
}

export default CertifImages

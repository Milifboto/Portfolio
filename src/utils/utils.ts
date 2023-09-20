export interface ProjectsType {
  id: number
  title: string
  subtitle: string
  image: ImageType
  video?: string
  github: string
  url: string
  description: string
  technologies: TechnologiesType[]
}

export interface ImageType {
  cover: string
  secondImage: string
  thirdImage: string
}

export type TechnologiesType = {
  name: string
  svg: string
}

export const projects: ProjectsType[] = [
  {
    id: 1,
    title: 'Bookbuster',
    subtitle: 'Web app',
    image: {
      cover: '../../assets/bbt.png',
      secondImage: '',
      thirdImage: '',
    },
    video: '',
    github: 'https://github.com/bookbuster-ar/web-app-front',
    url: 'https://bookbuster-ar.vercel.app/',
    description: 'https://github.com/bookbuster-ar/web-app-backend',
    technologies: [
      {
        name: 'Javascript',
        svg: '',
      },
      {
        name: 'Node.js',
        svg: '',
      },
      {
        name: 'Express',
        svg: '',
      },
      {
        name: 'PostgreSQL',
        svg: '',
      },
      {
        name: 'React',
        svg: '',
      },
      {
        name: 'Redux Toolkit',
        svg: '',
      },
      {
        name: 'Tailwind',
        svg: '',
      },
      {
        name: 'Firebase',
        svg: '',
      },
      {
        name: 'Cloudinary',
        svg: '',
      },
      {
        name: 'Nodemailer',
        svg: '',
      },
      {
        name: 'Mercado Pago',
        svg: '',
      },
      {
        name: 'Sequelize',
        svg: '',
      },
      {
        name: 'GitHub',
        svg: '',
      },
    ],
  },
  {
    id: 2,
    title: 'Rick And Morty WIKI',
    subtitle: 'Web app using Typescript',
    image: {
      cover: '',
      secondImage: '',
      thirdImage: '',
    },
    video: '',
    github: 'https://github.com/Milifboto/RickAndMortyWiki',
    url: '',
    description: '',
    technologies: [
      {
        name: 'Typescript',
        svg: '',
      },
      {
        name: 'Node.js',
        svg: '',
      },
      {
        name: 'React',
        svg: '',
      },
      {
        name: 'Redux Toolkit',
        svg: '',
      },
      {
        name: 'Tailwind',
        svg: '',
      },
      {
        name: 'Playwright',
        svg: '',
      },
    ],
  },
  {
    id: 3,
    title: 'Woofys',
    subtitle: 'Web app',
    image: {
      cover: '',
      secondImage: '',
      thirdImage: '',
    },
    video: '',
    github: 'https://github.com/Milifboto/PIDogs',
    url: '',
    description: '',
    technologies: [
      {
        name: 'Javascript',
        svg: '',
      },
      {
        name: 'Node.js',
        svg: '',
      },
      {
        name: 'Express',
        svg: '',
      },
      {
        name: 'PostgreSQL',
        svg: '',
      },
      {
        name: 'React',
        svg: '',
      },
      {
        name: 'Redux',
        svg: '',
      },
      {
        name: 'Sequelize',
        svg: '',
      },
    ],
  },
]

export interface CertificatesType {
  id: number
  title: string
  subtitle: string
  image: string
  url: string
}

export const certifications: CertificatesType[] = [
  {
    id: 1,
    title: 'Full Stack Developer',
    subtitle: 'Henry Bootcamp',
    image: '../../assets/certificates/Henry.png',
    url: 'https://certificates.soyhenry.com/new-cert?id=c6880480e6e6079019e382e50d1006e5848674665179d1953cdf77eae662fee3',
  },
  {
    id: 2,
    title: 'EF SET English Certificate 79/100 (C2 Proficient)',
    subtitle: 'EF Standard English Test',
    image: '../../assets/certificates/EF.png',
    url: 'https://www.efset.org/cert/CEwhYr',
  },
  {
    id: 3,
    title: 'Teaching Assistant',
    subtitle: 'Henry Bootcamp',
    image: '../../assets/certificates/TeachingAssistant.png',
    url: 'https://certificates.soyhenry.com/new-cert?id=464d05aed7831f881756dff83ca8879accc2ea3ddc5c4c7bfa5e48a4b071eeb7',
  },
  {
    id: 4,
    title: 'UX Writing Certificate',
    subtitle: 'Universidad Tecnológica Nacional',
    image: '../../assets/certificates/UX.png',
    url: 'https://media.licdn.com/dms/document/media/D4E2DAQEmw-WfWTddpA/profile-treasury-document-pdf-analyzed/0/1693519796430?e=1696464000&v=beta&t=pG2gse4D4TAWkS3A59TgPp9yLYoxkL3jISliDQWNxMU',
  },
]

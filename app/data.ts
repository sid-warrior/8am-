type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}



type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Valora Crypto Marketplace',
    description:
      'Valora Crypto Marketplace: Your trusted gateway to the crypto economy. ',
     
    link: 'https://crypto-valora.netlify.app/',
    image:
      'https://ik.imagekit.io/n71le1pbu/valor-marketplace.mp4?updatedAt=1761650173019',
    id: 'project1',
  },
  {
    name: 'Tailwind button Library',
    description: 'Minimal and aesthetic ,ready to use button just copy paste and ready.',
    link: 'https://button-ready.vercel.app/',
    image:
      'https://ik.imagekit.io/n71le1pbu/button.mp4?updatedAt=1761650611177',
    id: 'project2',
  },
  
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelancing',
    title: 'Graphic Designer',
    start: '2025',
    end: 'Present',
    id: 'work1',
  },
  
  {
    company: 'Panjab University',
    title: 'Bachelor of Computer Applications',
    start: '2022',
    end: '2025',
    id: 'work3',
  },
]



export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/sid-warrior',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/Siddanttt',
  },
  {
    label: 'Youtube',
    link: '/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/5iddddddd?igsh=MWZob2N2c2V2OW14ag==',
  },
]

export const EMAIL = 'saltburn696@gmail.com'

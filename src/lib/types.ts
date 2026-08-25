export type Project = {
  name: string
  img: string
  summary: string
  description: string
  source: string
  website: string | null;
  stack?: string[]
}

export type Experience = {
  role: string
  company: string
  location: string
  type: string
  startDate: string
  endDate: string
  description: string
  responsibilities: string[]
  stack?: string[]
}

export type Education = {
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
  description: string
}

export type Research = {
  title: string
  year: number
  lang: string;
  authors: Array<{ name: string; link: string }>
  event: string
  pdf: string
  image: string
  abs: string
  stack?: string[]
}

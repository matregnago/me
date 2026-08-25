export type Status = "active" | "completed" | "in-progress"

export type Project = {
  name: string
  img: string
  summary: string
  description: string
  source: string
  status: Status
  stack?: Array<{ name: string; color: string }>
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
  stack?: Array<{ name: string; color: string }>
}

export type Education = {
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
  description: string
  status: Status
}

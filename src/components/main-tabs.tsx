import type { Education, Experience, Project } from "@/lib/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ExperienceEntry } from "./experience"
import { ProjectEntry } from "./project"
import { EducationEntry } from "./education"
import { PencilLine } from "lucide-react"

export const MainTabs = () => {
  const experiences: Experience[] = [
    {
      role: "Software Engineer",
      company: "Monsta",
      type: "Full Time",
      description: "test teste",
      location: "Bento Gonçalves",
      startDate: "Abr 2025",
      endDate: "Present",
      responsibilities: ["resp1", "resp2"],
      stack: [
        { name: "React", color: "#61DAFB" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Vite", color: "#9c36d7" },
        { name: "Tailwind CSS", color: "#06b6d4" },
        { name: "Hono", color: "#E36002" },
        { name: "Node.js", color: "#84bf08" },
        { name: "MongoDB", color: "#08ee69" },
        { name: "RabbitMQ", color: "#FF6600" },
        { name: "Python", color: "#3776AB" },
        { name: "Ollama", color: "#080808" },
        { name: "Docker", color: "#2496ED" },
        { name: "Jenkins", color: "#d13e38" },
      ],
    },
    {
      role: "Software Engineer",
      company: "Monsta",
      type: "Full Time",
      description: "test teste",
      location: "Bento Gonçalves",
      startDate: "Abr 2025",
      endDate: "Present",
      responsibilities: ["resp1", "resp2"],
      stack: [
        { name: "React", color: "#61DAFB" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Vite", color: "#9c36d7" },
        { name: "Tailwind CSS", color: "#06b6d4" },
        { name: "Hono", color: "#E36002" },
        { name: "Node.js", color: "#84bf08" },
        { name: "MongoDB", color: "#08ee69" },
        { name: "RabbitMQ", color: "#FF6600" },
        { name: "Python", color: "#3776AB" },
        { name: "Ollama", color: "#080808" },
        { name: "Docker", color: "#2496ED" },
        { name: "Jenkins", color: "#d13e38" },
      ],
    },
  ]
  const projects: Project[] = [
    {
      name: "vLLM Benchmark aaaa",
      summary: "teste de benchmark",
      description:
        "documentacao documentacao documentacao documentacao documentacao documentacao documentacao documentacao",
      status: "complete",
      img: "https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
      source: "https://github.com/matregnago",
    },
  ]

  const educations: Education[] = [
    {
      degree: "Masters",
      field: "Computer Science",
      school: "UFRGS",
      description: "Advisor: Schnorr",
      startDate: "mar 2026",
      endDate: "Present",
      status: "in-progress"
    }
  ]
  return (
    <section>
      <Tabs defaultValue="projects">
        <TabsList variant="line">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>
        <TabsContent className="py-2" value="projects">
          {projects.map((project, idx) => (
            <ProjectEntry project={project} key={idx} />
          ))}
        </TabsContent>

        <TabsContent className="py-2" value="experience">
          {experiences.map((exp, idx) => (
            <ExperienceEntry
              experience={exp}
              isLast={idx === experiences.length - 1}
              key={idx}
            />
          ))}
        </TabsContent>

        <TabsContent value="education">
          {educations.map((education, idx) => (
            <EducationEntry education={education} key={idx} />
          ))}
        </TabsContent>

        <TabsContent value="blog">
          <div className="h-64 flex flex-col items-center justify-center gap-2">

            <PencilLine className="size-14 border p-2 bg-card rounded-lg" />
            <p className="text-base">Nothing to see here.</p>
          </div>

        </TabsContent>
      </Tabs>
    </section>
  )
}

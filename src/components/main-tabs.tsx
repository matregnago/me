import type { Experience } from "@/lib/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ExperienceEntry } from "./experience"

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

  return (
    <section>
      <Tabs defaultValue="projects">
        <TabsList variant="line">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          i dont have any good projects lol
        </TabsContent>

        <TabsContent className="py-2" value="experience">
          {experiences.map((exp, idx) => (
            <ExperienceEntry experience={exp} isLast={idx === experiences.length -1} key={idx} />
          ))}
        </TabsContent>

        <TabsContent value="education">some random schools kekw</TabsContent>

        <TabsContent value="skills">none kekw</TabsContent>
        <TabsContent value="blog">maybe one day</TabsContent>
      </Tabs>
    </section>
  )
}

import { Tabs, TabsContent, TabsList } from "./ui/tabs"
import { ExperienceEntry } from "./experience"
import { ProjectEntry } from "./project"
import { EducationEntry } from "./education"
import {
  BriefcaseBusiness,
  FolderOpen,
  GraduationCap,
  PencilLine,
} from "lucide-react"
import { CustomTabsTrigger as TabsTrigger } from "./tab-trigger"
import projectsData from "../../data/projects.json"
import experienceData from "../../data/experience.json"
import educationData from "../../data/education.json"
import type { Education, Experience, Project } from "@/lib/types"

export const MainTabs = () => {
  const { projects } = projectsData as { projects: Project[] }
  const { experience } = experienceData as { experience: Experience[] }
  const { education } = educationData as { education: Education[] }

  return (
    <section>
      <Tabs defaultValue="projects">
        <TabsList variant="line">
          <TabsTrigger value="projects" label="Projects" icon={FolderOpen} />
          <TabsTrigger
            value="experience"
            label="Experience"
            icon={BriefcaseBusiness}
          />
          <TabsTrigger
            value="education"
            label="Education"
            icon={GraduationCap}
          />
          <TabsTrigger value="blog" label="Blog" icon={PencilLine} />
        </TabsList>
        <TabsContent className="grid grid-cols-2 gap-4 py-3" value="projects">
          {projects.map((project, idx) => (
            <ProjectEntry project={project} key={idx} />
          ))}
        </TabsContent>

        <TabsContent className="py-3" value="experience">
          {experience.map((exp, idx) => (
            <ExperienceEntry
              experience={exp}
              isLast={idx === experience.length - 1}
              key={idx}
            />
          ))}
        </TabsContent>

        <TabsContent value="education" className="flex flex-col gap-3 py-3">
          {education.map((ed, idx) => (
            <EducationEntry education={ed} key={idx} />
          ))}
        </TabsContent>

        <TabsContent value="blog">
          <div className="flex h-64 flex-col items-center justify-center gap-2">
            <PencilLine className="size-14 rounded-lg border bg-card p-2" />
            <p className="text-base">Nothing to see here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

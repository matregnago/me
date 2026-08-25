import { Tabs, TabsContent, TabsList } from "./ui/tabs"
import { ExperienceEntry } from "./experience"
import { ProjectEntry } from "./project"
import { EducationEntry } from "./education"
import {
  BriefcaseBusiness,
  Download,
  FlaskConical,
  FolderOpen,
  GraduationCap,
  PencilLine,
} from "lucide-react"
import { CustomTabsTrigger as TabsTrigger } from "./tab-trigger"
import projectsData from "../../data/projects.json"
import experienceData from "../../data/experience.json"
import educationData from "../../data/education.json"
import researchData from "../../data/research.json"
import type { Education, Experience, Project, Research } from "@/lib/types"
import { ResearchEntry } from "./research"

export const MainTabs = () => {
  const { projects } = projectsData as { projects: Project[] }
  const { experience } = experienceData as { experience: Experience[] }
  const { education } = educationData as { education: Education[] }
  const { research } = researchData as { research: Research[] }

  return (
    <section>
      <Tabs defaultValue="projects">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mt-1 sm:mt-0">
          <div className="overflow-x-scroll overflow-y-hidden">
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
            <TabsTrigger
              value="research"
              label="Research"
              icon={FlaskConical}
            />
          {/*<TabsTrigger value="blog" label="Blog" icon={PencilLine} />*/}
          </TabsList>
          </div>
          <a
            href="/CV_Matheus_Tregnago.pdf"
            target="_blank"
            className={"-order-1 sm:order-1 w-28 download-button flex flex-row gap-1 items-center"}
          >
            <Download className="size-3" />
            <p className="text-xs">Download CV</p>
          </a>
        </div>
        <TabsContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3" value="projects">
          {projects.map((project, idx) => (
            <ProjectEntry project={project} key={idx} />
          ))}
        </TabsContent>

        <TabsContent className="pt-3" value="experience">
          {experience.map((exp, idx) => (
            <ExperienceEntry
              experience={exp}
              isLast={idx === experience.length - 1}
              key={idx}
            />
          ))}
        </TabsContent>

        <TabsContent value="education" className="flex flex-col gap-3 pt-3">
          {education.map((ed, idx) => (
            <EducationEntry education={ed} key={idx} />
          ))}
        </TabsContent>


        <TabsContent value="research" className="flex flex-col gap-3 pt-3">
          {research.map((rs, idx) => (
            <ResearchEntry research={rs} key={idx} />
          ))}
        </TabsContent>


        <TabsContent value="blog">
          <div className="flex h-64 flex-col items-center justify-center gap-2">
            <PencilLine className="size-14 rounded-lg border bg-card p-3" />
            <p className="text-base">Nothing to see here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

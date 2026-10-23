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

interface MainTabsProps {
  selectedTab?: string
}

export const MainTabs = ({ selectedTab }: MainTabsProps) => {
  const { projects } = projectsData as { projects: Project[] }
  const { experience } = experienceData as { experience: Experience[] }
  const { education } = educationData as { education: Education[] }
  const { research } = researchData as { research: Research[] }
  return (
    <section>
      <Tabs defaultValue={selectedTab || "projects"}>
        <div className="mt-1 flex flex-col gap-3 sm:mt-0 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <div className="w-full sm:w-auto">
            <TabsList variant="line" className="w-full sm:w-fit">
              <TabsTrigger
                value="projects"
                label="Projects"
                icon={FolderOpen}
              />
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
            href="/CV_Matheus_Tregnago_en.pdf"
            target="_blank"
            className={
              "download-button -order-1 flex w-28 flex-row items-center gap-1 sm:order-1"
            }
          >
            <Download className="size-3" />
            <p className="text-xs">Download CV</p>
          </a>
        </div>
        <TabsContent
          className="grid grid-cols-1 gap-4 pt-3 sm:grid-cols-2"
          value="projects"
        >
          <h2 className="font-heading text-xl font-medium text-foreground sm:hidden">
            Projects
          </h2>
          {projects.map((project, idx) => (
            <ProjectEntry project={project} key={idx} />
          ))}
        </TabsContent>

        <TabsContent className="pt-3" value="experience">
          <h2 className="mb-4 font-heading text-xl font-medium text-foreground sm:hidden">
            Experience
          </h2>
          {experience.map((exp, idx) => (
            <ExperienceEntry
              experience={exp}
              isLast={idx === experience.length - 1}
              key={idx}
            />
          ))}
        </TabsContent>

        <TabsContent value="education" className="flex flex-col gap-3 pt-3">
          <h2 className="font-heading text-xl font-medium text-foreground sm:hidden">
            Education
          </h2>
          {education.map((ed, idx) => (
            <EducationEntry education={ed} key={idx} />
          ))}
        </TabsContent>
        <TabsContent value="research" className="flex flex-col gap-3 pt-3">
          <h2 className="font-heading text-xl font-medium text-foreground sm:hidden">
            Research
          </h2>
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export const MainTabs = () => {
  return (
    <section>
      <Tabs defaultValue="projects">
        <TabsList variant="line">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="experience">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          i dont have any good projects lol
        </TabsContent>

        <TabsContent value="experience">
          insane experience
        </TabsContent>

        <TabsContent value="education">
          some random schools kekw
        </TabsContent>

        <TabsContent value="skills">
          none kekw
        </TabsContent>
        <TabsContent value="blog">
          maybe one day
        </TabsContent>
      </Tabs>
    </section>
  )
}

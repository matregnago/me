import { ModeToggle } from "./theme-toggle"

export const Header = () => {
  return (
    <section>
      <header className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-medium text-primary">
              Hi, I'm Matheus
            </h1>
            <p className="max-w-2xl font-sans text-base font-normal text-muted-foreground">
              I'm a Software Engineer and Master's student at{" "}
                <a
                  href="https://www.inf.ufrgs.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline-offset-4 hover:underline"
                >
                  UFRGS
                </a>
                , currently doing research with the{" "}
                <a
                  href="https://www.inf.ufrgs.br/gppd/site/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline-offset-4 hover:underline"
                >
                  High-Performance Computing Group (GPPD)
                </a>
                . I like building software, digging into how systems work, and working on
                problems involving backend development, distributed systems, and
                high-performance computing.
            </p>
          </div>
          <ModeToggle />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <p>github:</p>
            <a
              className="underline-offset-4 transition-colors hover:underline"
              href="https://github.com/matregnago"
            >
              <strong>@matregnago</strong>
            </a>
          </div>
          <div className="flex gap-1">
            <p>email:</p>
            <a
              className="underline-offset-4 transition-colors hover:underline"
              href="mailto:me@matregnago.com"
            >
              <strong>me [at] matregnago (dot) com</strong>
            </a>
          </div>
        </div>
      </header>
    </section>
  )
}

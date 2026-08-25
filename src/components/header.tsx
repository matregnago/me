import { ModeToggle } from "./theme-toggle"

export const Header = () => {
  return (
    <section>
      <header className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-medium text-primary">Hi, I'm Matheus</h1>
            <p className="text-base font-normal text-muted-foreground max-w-2xl font-sans">
              I'm a Software Engineer and a Masters student at UFRGS at the
              High-Performance Computing Group (GPPD). I combine domain
              knowledge with deep engineering experience to build software
              applications (i'll change this later. this is trash lol)
            </p>
          </div>
          <ModeToggle />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <p>github:</p>
            <a className="hover:underline" href="https://github.com/matregnago">
              <strong>@matregnago</strong>
            </a>
          </div>
          <div className="flex gap-1">
            <p>email:</p>
            <a className="hover:underline" href="mailto:me@matregnago.com">
              <strong>me [at] matregnago (dot) com</strong>
            </a>
          </div>
        </div>
      </header>
    </section>
  )
}

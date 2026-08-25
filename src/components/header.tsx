export const Header = () => {
  return (
    <section>
      <header className="flex flex-col gap-3 text-justify leading-relaxed">
        <h1 className="text-3xl">Hi, I'm Matheus</h1>
        <p className="text-base text-muted-foreground">
          I'm a Software Engineer and a Masters student at UFRGS at the
          High-Performance Computing Group (GPPD). I combine domain knowledge
          with deep engineering experience to build software applications (i'll
          change this later. this is trash lol)
        </p>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <p>github:</p>
            <a className="hover:underline"  href="https://github.com/matregnago">
              <strong>@matregnago</strong>
            </a>
          </div>
          <div className="flex gap-1">
            <p>email:</p>
            <a className="hover:underline" href="https://github.com/matregnago">
              <strong>me [at] matregnago (dot) com</strong>
            </a>
          </div>
        </div>
      </header>
    </section>
  )
}

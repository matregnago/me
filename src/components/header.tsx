export const Header = () => {
  return (
    <section>
      <header className="flex flex-col gap-3 leading-relaxed text-justify">
        <h1 className="text-3xl">Hi, I'm Matheus Tregnago</h1>
        <p className="text-base">
          I'm a Software Engineer and a Masters student at UFRGS at the
          High-Performance Computing Group (GPPD). I combine domain knowledge
          with deep engineering experience to build software applications (i'll
          change this later. this is trash lol)
        </p>
        <div className="flex flex-col text-lg">
          <a href="https://github.com/matregnago">
            github: <strong>@matregnago</strong>
          </a>
          <a>email: me [at] matregnago (dot) com </a>
        </div>
      </header>
    </section>
  )
}

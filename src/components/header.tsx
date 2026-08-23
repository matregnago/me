export const Header = () => {
  return (
    <section>
      <header className="flex flex-col gap-3 leading-relaxed text-justify">
        <h1 className="text-2xl">Hi, I'm Matheus Tregnago</h1>
        <p className="">
          I'm a Software Engineer and a Masters student at UFRGS at the
          High-Performance Computing Group (GPPD). I combine domain knowledge
          with deep engineering experience to build software applications (i'll
          change this later. this is trash lol)
        </p>
        <div className="flex flex-col">
          <a href="https://github.com/matregnago">
            github: <strong>@matregnago</strong>
          </a>
          <a>email: matregnago [at] inf (dot) ufrgs (dot) com </a>
        </div>
      </header>
    </section>
  )
}

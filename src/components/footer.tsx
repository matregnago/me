export const Footer = () => {
  return (
    <footer className="flex flex-row border-t pt-3 text-sm text-muted-foreground gap-1">
      <div className="flex gap-1">
        <p>github:</p>
        <a className="hover:underline" href="https://github.com/matregnago">
          <strong>@matregnago</strong>
        </a>
      </div>
      <div className="flex gap-1">
        <p>·</p>
        <p>email:</p>
        <a className="hover:underline" href="https://github.com/matregnago">
          <strong>me [at] matregnago (dot) com</strong>
        </a>
      </div>
    </footer>
  )
}

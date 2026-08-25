export const Footer = () => {
  return (
    <footer className="border-t py-6 text-xs text-muted-foreground mt-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Matheus Tregnago
        </p>

        <p>
          Design inspired by{" "}
          <a
            href="https://zed.dev"
            target="_blank"
            className="text-foreground underline-offset-4 transition-colors hover:underline"
          >
            Zed
          </a>
          {" "}and{" "}
          <a
            href="https://github.com/hiviexd"
            target="_blank"
            className="text-foreground underline-offset-4 transition-colors hover:underline"
          >
            Hiviexd
          </a>
        </p>
      </div>
    </footer>
  );
};

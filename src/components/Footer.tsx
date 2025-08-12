import { SocialIcons } from './SocialIcons'

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-screen-content container-px py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <img src="/kidsyu_logo.png" width={36} height={36} alt="Kidsyu logo" className="rounded" />
              <span className="font-display text-lg font-extrabold">Kidsyu</span>
            </div>
            <p className="mt-4 text-sm text-card-foreground/70">
              Kidsyu creates high-quality, meaningful, and unique animated songs and rhymes for children using world-class technology.
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="/#parents" className="hover:underline">Parents Corner</a></li>
                <li><a href="/#watch" className="hover:underline">Watch Everywhere</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Use</a></li>
                <li><a href="#" className="hover:underline">COPPA Notice</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs text-card-foreground/60">© {new Date().getFullYear()} Kidsyu. All rights reserved.</p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}


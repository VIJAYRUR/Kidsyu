import { Link, NavLink } from 'react-router-dom'
import { SocialIcons } from './SocialIcons'

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/60 border-b border-border">
      <div className="mx-auto max-w-screen-content container-px flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/kidsyu_logo-removebg-preview.png"
            width={56}
            height={56}
            alt="Kidsyu logo"
            className="h-14 w-14 rounded-md"
          />
          <span className="font-display text-xl font-extrabold tracking-tight">Kidsyu</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" className={({isActive})=> isActive ? 'text-card-foreground' : 'text-card-foreground/70 hover:text-card-foreground'}>Home</NavLink>
          <Link to="/#parents" className="text-card-foreground/70 hover:text-card-foreground">Parents</Link>
          <Link to="/#watch" className="text-card-foreground/70 hover:text-card-foreground">Watch</Link>
          <NavLink to="/contact" className={({isActive})=> isActive ? 'text-card-foreground' : 'text-card-foreground/70 hover:text-card-foreground'}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <SocialIcons />
        </div>
      </div>
    </header>
  )
}


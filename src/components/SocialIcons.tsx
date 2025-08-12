import { Instagram, Youtube } from 'lucide-react'

export function SocialIcons({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <div className="flex items-center gap-3 text-card-foreground/80">
      <a
        href="https://youtube.com/@igottabubu?si=nozlhVV5c4mQIAuB"
        aria-label="Kidsyu on YouTube"
        target="_blank"
        rel="noreferrer"
        className="hover:text-card-foreground"
      >
        <Youtube className={className} />
      </a>
      <a
        href="https://www.instagram.com/kidsyuyt/"
        aria-label="Kidsyu on Instagram"
        target="_blank"
        rel="noreferrer"
        className="hover:text-card-foreground"
      >
        <Instagram className={className} />
      </a>
    </div>
  )
}


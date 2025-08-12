import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Youtube, Instagram, ShieldCheck, Subtitles, Baby, Lock, BookOpen, Clock } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-screen-content container-px py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Songs, Rhymes, and Smiles — Crafted with World‑Class Animation
              </h1>
              <p className="mt-5 text-lg text-card-foreground/80">
                Kidsyu is on a mission to become a world leader in children's entertainment—using cutting‑edge technologies to create high‑quality, meaningful, and unique video content for kids.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <a href="https://www.youtube.com/@kidsyu" target="_blank" rel="noreferrer" aria-label="Watch Kidsyu on YouTube">
                    <Youtube className="mr-2 h-5 w-5" /> Watch on YouTube
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="https://www.instagram.com/kidsyu" target="_blank" rel="noreferrer" aria-label="Follow Kidsyu on Instagram">
                    <Instagram className="mr-2 h-5 w-5" /> Follow on Instagram
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <img
                src="/Rocket_BgRemove.png"
                alt="Kidsyu rocket"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parents Corner */}
      <section id="parents" className="bg-muted/40">
        <div className="mx-auto max-w-screen-content container-px py-14 lg:py-20">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Our Promises to Parents</h2>
          <p className="mt-3 text-card-foreground/80 max-w-2xl">
            We take your child's safety and experience seriously. Here are our commitments to you:
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature icon={<ShieldCheck className="h-6 w-6" />} title="Ad-safe content and links" description="Our platforms are curated to minimize exposure to inappropriate ads and external links." />
            <Feature icon={<Baby className="h-6 w-6" />} title="Family-friendly language" description="All scripts, songs, and captions use gentle, age-appropriate language." />
            <Feature icon={<Subtitles className="h-6 w-6" />} title="Clear captions for accessibility" description="We provide easy-to-read captions so every child can sing along and enjoy." />
            <Feature icon={<Lock className="h-6 w-6" />} title="No personal data from kids" description="We avoid collecting children’s personal information and keep analytics aggregated and de‑identified." />
            <Feature icon={<BookOpen className="h-6 w-6" />} title="Learning-first design" description="Episodes focus on early literacy, numbers, and social–emotional skills with playful storytelling." />
            <Feature icon={<Clock className="h-6 w-6" />} title="Healthy screen‑time pacing" description="Short, purposeful segments with natural breaks for movement, rest, and sing‑along moments." />
          </div>
          <div className="mt-8 rounded-lg border border-border bg-card p-6 text-sm text-card-foreground/80">
            <p className="font-semibold">COPPA Compliance</p>
            <p className="mt-2">We follow the Children’s Online Privacy Protection Act (COPPA) guidelines to protect your child’s privacy online.</p>
            <p className="mt-2">For questions or concerns, please use our <Link to="/contact" className="text-brand underline">Contact</Link> page.</p>
          </div>
        </div>
      </section>

      {/* Watch Everywhere */}
      <section id="watch">
        <div className="mx-auto max-w-screen-content container-px py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Watch Everywhere</h2>
              <p className="mt-4 text-card-foreground/80">
                Our content is free and easy to access. Start watching on
                <a href="https://www.youtube.com/@kidsyu" target="_blank" rel="noreferrer" className="text-brand underline ml-1">YouTube</a>
                and
                <a href="https://www.instagram.com/kidsyu" target="_blank" rel="noreferrer" className="text-brand underline ml-1">Instagram</a>.
                As we grow, Kidsyu will reach more mediums so families can enjoy our shows anywhere.
              </p>
              <ul className="mt-6 grid gap-2 text-card-foreground/80 list-disc pl-5">
                <li>Curated, ad-safe viewing paths with clear age guidance.</li>
                <li>Captions and on-screen lyrics to sing along.</li>
                <li>High‑quality animation crafted with care and modern tools.</li>
                <li>Roadmap: smart TVs and mobile apps so you can watch on any screen.</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 aurora rounded-3xl" />
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow">
                <p className="text-center text-sm text-muted-foreground">Expanding to more platforms as we grow!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand/10">
        <div className="mx-auto max-w-screen-content container-px py-12 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold">Made with care. Designed for joy.</h3>
          <p className="mt-2 text-card-foreground/80">Follow us for new songs, bright stories, and happy learning moments.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild size="lg"><a href="https://www.youtube.com/@kidsyu" target="_blank" rel="noreferrer"><Youtube className="mr-2 h-5 w-5"/> Subscribe</a></Button>
            <Button asChild size="lg" variant="secondary"><a href="https://www.instagram.com/kidsyu" target="_blank" rel="noreferrer"><Instagram className="mr-2 h-5 w-5"/> Follow</a></Button>
          </div>
        </div>
      </section>
    </main>
  )
}


function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/15 text-brand">{icon}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-card-foreground/80">{description}</p>
    </div>
  )
}


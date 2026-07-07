import Head from 'next/head'

const projects = [
  {
    name: 'Way of Light',
    tagline: 'A puzzle game about light.',
    repo: 'way-of-light',
    url: 'https://way-of-light.vercel.app',
    progress: 0.01,
    color: '#fbbf24',
    desc: 'Puzzle game about bending light. Conceived and halted in under 10 minutes — formerly a new record.',
  },
  {
    name: 'E-Commerce Platform',
    tagline: '5 minutes. Dead.',
    repo: 'ecommerce-platform',
    url: 'https://ecommerce-platform-two-hazel.vercel.app',
    progress: 0,
    color: '#6366f1',
    desc: 'New record holder. Conceived and killed in 5 minutes. 0 lines of code written.',
  },
  {
    name: 'Integračná Platforma',
    tagline: 'Because we needed another one.',
    repo: 'integracna-platforma',
    url: 'https://integracna-platforma.vercel.app',
    progress: 0,
    color: '#a855f7',
    desc: 'Integration platform. "predame to alesovi ?" — MatusBoha, visionary.',
  },
  {
    name: 'Soči Memorial',
    tagline: 'A Valheim base memorial.',
    repo: 'soci-memorial',
    url: 'https://soci-memorial.vercel.app',
    progress: 0,
    color: '#d97706',
    desc: 'Memorial page for the abandoned Soči base. Candle flicker, ghost town vibes.',
  },
  {
    name: 'EoW Boss Guide',
    tagline: 'Eater of Worlds — Terraria guide.',
    repo: 'eow-guide',
    url: 'https://eow-guide-repo.vercel.app',
    progress: 10,
    color: '#a855f7',
    desc: 'Pre-boss preparation guide. Stage, gear, weapons, arena & strategy. King Slime included.',
  },
  {
    name: 'Hermes — vypni verbose',
    tagline: 'How to shut Hermes up.',
    repo: 'eow-guide',
    url: 'https://eow-guide-repo.vercel.app/hermes-verbose.html',
    progress: 10,
    color: '#3b82f6',
    desc: 'Config guide: tool_progress, approvals, reasoning, quiet mode & flags.',
  },
  {
    name: 'Psycho Profily',
    tagline: 'StackMind personality profiles.',
    repo: 'psycho-profily',
    url: 'https://psycho-profily-repo.vercel.app',
    progress: 8,
    color: '#ec4899',
    desc: 'Psychologické profily Knoty, Kimi, Matúš & Matej. Real data, no 90%+ inflation.',
  },
  {
    name: 'Aurelium',
    tagline: 'Something extraordinary is being forged.',
    repo: 'aurelium',
    url: 'https://aurelium-zeta.vercel.app',
    progress: 5,
    color: '#a78bfa',
    desc: "Independent game studio landing page with hype meters, changelog, and founder's note.",
  },
  {
    name: 'Brainfog Studio',
    tagline: '🐝 Bees, honey, everything.',
    repo: 'brainfog-studio',
    url: 'https://brainfog-studio.vercel.app',
    progress: 3,
    color: '#f59e0b',
    desc: 'Creative studio landing page. Honey theme. Contact: beewithus@brainfog.cz.',
  },
  {
    name: 'Neverelease',
    tagline: 'Something is brewing.',
    repo: 'neverelease',
    url: 'https://neverelease.vercel.app',
    progress: 1,
    color: '#6366f1',
    desc: 'Mysterious coming soon page. Dark theme. No one knows what it is.',
  },
  {
    name: 'StackMind Signatures',
    tagline: 'Email signatures done right.',
    repo: 'stackmind-signatures',
    url: 'https://stackmind-signatures.vercel.app',
    progress: 4,
    color: '#22c55e',
    desc: 'Email signature hub. Centralized management for corporate signatures.',
  },
  {
    name: 'Cockbrothers',
    tagline: 'Brand Kit Generator.',
    repo: 'cockbrothers',
    url: 'https://cockbrothers.vercel.app',
    progress: 2,
    color: '#ef4444',
    desc: 'Brand kit generator with logo automation and design system.',
  },
  {
    name: 'Cockring Brothers',
    tagline: 'Brand design & development.',
    repo: 'cockring-brothers',
    url: null,
    progress: 2,
    color: '#ec4899',
    desc: 'Brand design & development studio. Premium identity creation.',
  },
  {
    name: 'Softcorn',
    tagline: 'Digital Studio. We build.',
    repo: 'softcorn',
    url: 'https://softcorn.vercel.app',
    progress: 3,
    color: '#f97316',
    desc: 'Digital studio landing page. Modern design, clean layout.',
  },
  {
    name: 'Hex Labs',
    tagline: 'Build. Ship. Repeat.',
    repo: 'hex-labs',
    url: null,
    progress: 1,
    color: '#06b6d4',
    desc: 'Digital studio landing page. Build, ship, repeat philosophy.',
  },
  {
    name: 'Cog Labs',
    tagline: 'Advanced Software Studio.',
    repo: 'cog-labs',
    url: null,
    progress: 2,
    color: '#8b5cf6',
    desc: 'Advanced software studio with admin panel and contact form.',
  },
  {
    name: 'Banners of Aurelium',
    tagline: 'A hex-based strategy game.',
    repo: 'banners-of-aurelium',
    url: null,
    progress: 0.01,
    color: '#71717a',
    desc: 'Unreal / Unity game project. Development halted. Hype at 0.01%.',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Stack Mind — Portfolio</title>
        <meta name="description" content="Stack Mind — portfolio of projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #0b0a0c;
          color: #d4d0d6;
          line-height: 1.6;
          min-height: 100vh;
        }
        ::selection { background: #22c55e33; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { opacity: 0; animation: fadeUp 0.6s ease-out forwards; }
      `}</style>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.logo}>STACK MIND</h1>
          <p style={styles.tagline}>Portfolio of Projects</p>
          <div style={styles.divider} />
          <p style={styles.subtext}>
            A collection of ideas. Some launched, most abandoned.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>
            {projects.map((p, i) => (
              <div key={i} className="fade-in" style={{...styles.card, animationDelay: `${i * 0.08}s`}}>
                <div style={styles.cardHeader}>
                  <div style={{...styles.logoBadge, background: `${p.color}22`, borderColor: `${p.color}44`}}>
                    <span style={{color: p.color, fontSize: '1.2rem'}}>{p.name[0]}</span>
                  </div>
                  <div style={styles.cardTitleGroup}>
                    <h3 style={styles.cardName}>{p.name}</h3>
                    <p style={styles.cardTagline}>{p.tagline}</p>
                  </div>
                </div>
                <p style={styles.cardDesc}>{p.desc}</p>
                {/* Progress bar */}
                <div style={styles.progressContainer}>
                  <div style={styles.progressLabel}>
                    <span>Progress</span>
                    <span style={{color: p.color}}>{p.progress}%</span>
                  </div>
                  <div style={styles.progressTrack}>
                    <div style={{
                      ...styles.progressFill,
                      width: `${Math.min(p.progress, 100)}%`,
                      background: p.progress > 0 ? `linear-gradient(90deg, ${p.color}66, ${p.color})` : 'transparent',
                    }} />
                  </div>
                </div>
                {/* Links */}
                <div style={styles.links}>
                  <a href={`https://github.com/Knoty92/${p.repo}`} target="_blank" style={styles.link}>
                    <span style={styles.linkDot}/> Repo
                  </a>
                  {p.url && (
                    <a href={p.url} target="_blank" style={styles.link}>
                      <span style={styles.linkDot}/> Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Powered by <a href="https://stackmind.cz" style={styles.footerLink}>stackmind.cz</a>
        </p>
        <p style={{...styles.footerText, marginTop: '0.3rem', fontSize: '0.7rem'}}>
          © 2026 Stack Mind. Some ideas deserve landing pages.
        </p>
      </footer>
    </>
  )
}

const styles = {
  hero: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0b0a0c 0%, #0a1a0e 30%, #0f0c1a 60%, #0b0a0c 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    textAlign: 'center',
    zIndex: 1,
  },
  logo: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 200,
    letterSpacing: '0.3em',
    color: '#ffffff',
    marginBottom: '0.5rem',
  },
  tagline: {
    fontSize: '0.85rem',
    fontWeight: 300,
    letterSpacing: '0.4em',
    textTransform: 'uppercase',
    color: '#22c55e',
    marginTop: '0.5rem',
  },
  divider: {
    width: '60px',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #22c55e66, transparent)',
    margin: '1.5rem auto',
  },
  subtext: {
    fontSize: '0.85rem',
    color: '#666',
    letterSpacing: '0.05em',
  },
  section: {
    padding: '4rem 1rem',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    padding: '1.5rem',
    background: '#151318',
    border: '1px solid #1f1d22',
    borderRadius: '10px',
    transition: 'transform 0.2s, border-color 0.2s',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  logoBadge: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitleGroup: {
    flex: 1,
  },
  cardName: {
    fontSize: '1rem',
    fontWeight: 500,
    color: '#e0dce6',
  },
  cardTagline: {
    fontSize: '0.75rem',
    color: '#888',
    marginTop: '0.15rem',
  },
  cardDesc: {
    fontSize: '0.85rem',
    color: '#a8a0b0',
    lineHeight: '1.6',
    marginBottom: '1rem',
    flex: 1,
  },
  progressContainer: {
    marginBottom: '1rem',
  },
  progressLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: '#666',
    marginBottom: '0.35rem',
  },
  progressTrack: {
    height: '6px',
    background: '#1f1d22',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 1s ease-out',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#22c55e',
    textDecoration: 'none',
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    opacity: 0.7,
    transition: 'opacity 0.2s',
  },
  linkDot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: '#22c55e',
    display: 'inline-block',
  },
  footer: {
    padding: '2rem',
    textAlign: 'center',
    borderTop: '1px solid #1a181d',
  },
  footerText: {
    fontSize: '0.75rem',
    color: '#555',
    letterSpacing: '0.1em',
  },
  footerLink: {
    color: '#22c55e',
    textDecoration: 'none',
  },
}
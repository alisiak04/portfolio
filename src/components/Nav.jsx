const LINKS = [
  { href: '#about', label: 'about', accent: 'accent-keyword' },
  { href: '#experience', label: 'experience', accent: 'accent-func' },
  { href: '#projects', label: 'projects', accent: 'accent-type' },
  { href: '#achievements', label: 'achievements', accent: 'accent-string' },
]

export default function Nav() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(10px)',
        background: 'rgba(15, 16, 22, 0.75)',
        borderBottom: '1px solid var(--line-soft)',
      }}
    >
      <div
        className="container mono"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 56,
          fontSize: 14,
        }}
      >
        <a href="#top" style={{ color: 'var(--ink)', fontWeight: 600 }}>
          <span className="accent-tag">&lt;</span>
          alisia
          <span className="accent-tag">/&gt;</span>
        </a>

        <nav style={{ display: 'flex', gap: 24 }}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={l.accent}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

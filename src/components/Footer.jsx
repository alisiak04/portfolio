export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line-soft)', padding: '40px 0' }}>
      <div
        className="container mono"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          fontSize: 13,
          color: 'var(--ink-faint)',
        }}
      >
        <span>
          <span className="accent-comment">// built with</span> React
        </span>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="mailto:alisiakazimierek2104@gmail.com" className="accent-keyword">
            email
          </a>
          <a
            href="https://www.linkedin.com/in/alisiakazimierek"
            target="_blank"
            rel="noreferrer"
            className="accent-keyword"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  )
}

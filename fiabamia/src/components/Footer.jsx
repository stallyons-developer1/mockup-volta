import { FOOTER, NAV } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brandcol">
          <a className="footer__brand" href="#top" onClick={(e) => { e.preventDefault(); window.__lenis?.scrollTo(0, { duration: 1.6 }) }}>
            {NAV.brand[0]}<em>{NAV.brand[1]}</em>
          </a>
          <p className="footer__tag">A fairy tale never read before, written tonight for the one you love.</p>
        </div>

        <div className="footer__cols">
          {FOOTER.cols.map((c) => (
            <div className="footer__col" key={c.h}>
              <span className="label footer__colhead">{c.h}</span>
              <ul>{c.items.map((i) => <li key={i}><a href="#top" onClick={(e) => e.preventDefault()}>{i}</a></li>)}</ul>
            </div>
          ))}
          <div className="footer__col">
            <span className="label footer__colhead">{FOOTER.write.h}</span>
            <a className="footer__email" href={`mailto:${FOOTER.write.email}`}>{FOOTER.write.email}</a>
            <p className="footer__note">{FOOTER.write.note}</p>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span className="label">{FOOTER.copyright}</span>
        <span className="label footer__dreams">✦ And now… sweet dreams</span>
      </div>
    </footer>
  )
}

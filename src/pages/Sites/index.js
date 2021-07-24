import "./styles.css"

export default function Sites() {
  return (
    <div className="Sites">
      <h1>My websites: </h1>
      <div className="instance">
        <a href="https://linkshortener.sites.starmain.dev">
        linkshortener.sites.starmain.dev</a>
        <br />(based on
          <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"> this
          challenge</a> from frontendmentor)
      </div>
      <div className="instance">
        <a href="https://listadecompras.sites.starmain.dev">
        listadecompras.sites.starmain.dev</a>
      </div>
      <div className="instance">
      <a href="https://loremipsum.sites.starmain.dev">
      loremipsum.sites.starmain.dev</a>
      </div>
    </div>
  )
}

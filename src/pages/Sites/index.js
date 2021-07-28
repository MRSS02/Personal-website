import "./styles.css"

export default function Sites() {
  return (
    <div className="Sites">
      <h1 className="title">My websites: </h1>
      <div className="instance">
        <h2>Link Shortener</h2>
        <a className="projectLink" href="https://linkshortener.sites.starmain.dev">
        Check it out!</a>
        <div className="description">(based on
          <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"> this
          challenge</a> from frontendmentor)
        </div>
      </div>
      <div className="instance">
        <h2>Lista de Compras (Shop List)</h2>
        <a className="projectLink" href="https://listadecompras.sites.starmain.dev">
        Check it out!</a>
      </div>
      <div className="instance">
         <h2>Gerador de Lorem Ipsum (Lorem Ipsum Generator)</h2>
      <a className="projectLink" href="https://loremipsum.sites.starmain.dev">
      Check it out!</a>
      </div>
      <div className="instance">
       See more details on <a href="https://github.com/MRSS02">my Github page!</a>
      </div>
    </div>
  )
}

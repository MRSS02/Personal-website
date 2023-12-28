import "./styles.css"

export default function Sites() {
  return (
    <div className="Sites">
      <h1 className="title">My websites: </h1>
      <div className="grid">
        <div className="instance">
          <h2>Link Shortener</h2>
          <a className="projectLink" href="https://linkshortener.starmain.dev">
            Check it out!
          </a>
          <div className="description">
            (based on{' '}
            <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"> 
              this challenge
            </a> 
            <span> </ span>from frontendmentor)
          </div>
        </div>
        <div className="instance">
          <h2>Balls (joke website for learning purposes, displays an increasing quantity of sports balls)</h2>
          <a className="projectLink" href="https://balls.balls.starmain.dev">
            Check it out!
          </a>
        </div>
        <div className="instance">
          <h2>Lista de Compras (Shop List)</h2>
          <a className="projectLink" href="https://listadecompras.starmain.dev">
            Check it out!
          </a>
        </div>
        <div className="instance">
          <h2>Gerador de Lorem Ipsum (Lorem Ipsum Generator)</h2>
          <a className="projectLink" href="https://loremipsum.starmain.dev">
            Check it out!
          </a>
        </div>
        <div className="instance">
          <h2>Hublive (college project)</h2>
          <a className="projectLink" href="https://hublive.vercel.app/">
            Check it out!
          </a>
          <div className="description">
            Created with <a href="https://github.com/Edson-G">Edson G.</a> and <a href="">João Victor</a>
          </div>
        </div>
        <div className="instance">
        <h2>Job-challenge (landing page made for a job application)</h2>
        <a className="projectLink" href="https://job-challenge.starmain.dev/">
          Check it out!
        </a>
        </div>
        <div className="instance">
        <h2>Recipe List (angular app made for a job application)</h2>
        <a className="projectLink" href="https://recipelist.starmain.dev/">
          Check it out!
        </a>
        </div>
        </div>
        <div className="instance">
        <h2>Discord Video Embedder</h2>
        <a className="projectLink" href="https://video.starmain.dev/">
          Check it out!
        </a>
        </div>
        <div className="outsideLink">
        See more details on <a href="https://github.com/MRSS02">my Github page!</a>
        </div>
    </div>
  )
}

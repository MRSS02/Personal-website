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
            (based on
            <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"> 
              this challenge
            </a> 
            <span> </span>from frontendmentor)
          </div>
        </div>
        <div className="instance">
          <h2 className="subtitle">Balls</h2>
          <p className="description">Joke website for learning purposes, displays an increasing quantity of sports balls</p>
          <a className="projectLink" href="https://balls.balls.starmain.dev">
            Check it out!
          </a>
        </div>
        <div className="instance">
          <h2 className="subtitle">Lista de Compras (Shop List)</h2>
          <a className="projectLink" href="https://listadecompras.starmain.dev">
            Check it out!
          </a>
        </div> 
        <div className="instance">
          <h2 className="subtitle">Gerador de Lorem Ipsum (Lorem Ipsum Generator)</h2>
          <a className="projectLink" href="https://loremipsum.starmain.dev">
            Check it out!
          </a>
        </div>
        <div className="instance">
          <h2 className="subtitle">Hublive (college project)</h2>
          <p className="description">
            Created with <a href="https://github.com/Edson-G">Edson G.</a> and <a href="">João Victor</a>
          </p>
          <a className="projectLink" href="https://hublive.vercel.app/">
            Check it out!
          </a>        
        </div>
        <div className="instance">
        <h2>Job-challenge</h2> 
        <p className="description">Landing page made for a job application</p>
        <a className="projectLink" href="https://job-challenge.starmain.dev/">
          Check it out!
        </a>
        </div>
        <div className="instance">
        <h2>Recipe List</h2>
        <p className="description">Angular app made for a job application</p>
        <a className="projectLink" href="https://recipelist.starmain.dev/">
          Check it out!
        </a>
        </div>
        <div className="instance">
        <h2>Discord Video Embedder</h2>
        <a className="projectLink" href="https://video.starmain.dev/">
          Check it out!
        </a>
        </div>
        <div className="instance">
        <h2>Process Simulator</h2>
        <a className="projectLink" href="https://process-simulator.starmain.dev/">
          Check it out!
        </a>
        </div>
        </div>
        <div className="outsideLink">
        See more details on <a href="https://github.com/MRSS02">my Github page!</a>
        </div>
    </div>
  )
}

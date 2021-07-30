import "./styles.css"

export default function Games() {
  return (
    <div className="Games">
      <h1 className="title">My Games: </h1>
      <div className="instance">
        <h2 className="subtitle">A Viagem Inesquecível</h2>
        <p className="description">(game in Portuguese)</p>
        <a className="projectLink" href="https://gamejolt.com/games/AViageminesquecivel/208080">
        Check it out on GameJolt!</a>
      </div>
      <div className="instance">
        <h2 className="subtitle">
         A Megera Domada - O jogo</h2>
         <p className="description">(game in Portuguese)<br />
         based on Shakespeare's book "The taming of the Shrew"</p>
        <a className="projectLink" href="https://gamejolt.com/games/a-megera-domada-o-jogo-baseado-na-obra-shakespeareana/208087">
        Check it out on GameJolt!</a>
      </div>
      <div className="instance">
        <h2 className="subtitle">FIRED</h2>
        <p className="description">(game in English and Portuguese)</p>
        <a className="projectLink" href="https://gamejolt.com/games/FIRED/480626">
        Check it out on GameJolt!</a>
      </div>
      <div className="instance">
        <h2 className="subtitle">
         A revanche do garimpeiro</h2>
        <p className="description">(game in Portuguese)</p>
        <a className="projectLink" href="https://gamejolt.com/games/balasddfjhjkl/392551">
        Check it out on GameJolt!</a>
      </div>
      <div className="instance">
       See more details on <a href="https://gamejolt.com/@mparagames/games">my games page on GameJolt!</a>
      </div>
    </div>
  )
}

import "./styles.css"


export default function Home() {
  return(
    <div>
     <p className="title">Hi, this is my website.</p>
     <div className="myWork">
       <div className="desc">Check out my work!</div>
     </div>
     <div className="connections">
       <div className="instance">
         <img className="logo" src="/img/Youtube.svg" alt="Youtube" />
         Youtube Gaming channel:<a href="https://www.youtube.com/c/Starmain">
         https://www.youtube.com/c/Starmain</a>
       </div>
       <div className="instance">
         <img className="logo" src="/img/Discord.svg" alt="Discord" />
         Discord: MParaGames#1652
       </div>
       <div className="instance">
         <img className="logo" src="/img/GitHub.png" alt="Github" />
         Github: <a href="https://github.com/MRSS02">
         https://github.com/MRSS02</a>
       </div>
       <div className="instance">
         <img className="logo" src="/img/Gamejolt.svg" alt="Game Jolt" />
         Game Jolt: <a href=" https://gamejolt.com/@mparagames/games">
         https://gamejolt.com/@mparagames/games</a>
       </div>
     </div>
    </div>
  )
}

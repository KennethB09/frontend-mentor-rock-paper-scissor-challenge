import { TChoice } from "../App";
import scissor from "../assets/images/icon-scissors.svg";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";
import Pulse from "./pulse";

type PlayProps = {
  playerChoice: TChoice | null
  computerChoice: TChoice | null
  nextRound: boolean
  setNextRound: React.Dispatch<boolean>
  setPlayerChoice: React.Dispatch<TChoice | null>
  result: null | "win" | "lose" | "draw"
}

type Tpick = {
  rock: string
  paper: string
  scissor: string
  spock: string
  lizard: string
}

function Play({ playerChoice, computerChoice, nextRound, setNextRound, result, setPlayerChoice }: PlayProps) {

  const choice: Tpick = {
    rock: rock,
    paper: paper,
    scissor: scissor,
    spock: spock,
    lizard: lizard
  }

  return (
    <div className="play-main-container">
      <div className="play-player-container">
        <h1>You Picked</h1>
        <div className={`play-player-picked-${playerChoice!}`}>
          <img  src={choice[playerChoice!]} alt={`player picked ${playerChoice}`}/>
          <div className="shadow-result"></div>
          {result === "win" && <Pulse />}
        </div>
      </div>
      {result !== undefined && <div className="play-result-container">
        {result !== "draw" ? <h1>YOU {result}</h1> : <h1>{result}</h1>}
        <button onClick={() => { setNextRound(!nextRound); setPlayerChoice(null); }}>Play again</button>
      </div>}
      <div className="play-computer-container">
        <h1>The House Picked</h1>
        <div className={`play-computer-picked-${computerChoice!}`}>
          <img  src={choice[computerChoice!]} alt={`computer picked ${computerChoice}`}/>
          <div className="shadow-result"></div>
          {result === "lose" && <Pulse />}
        </div>
      </div>
    </div>
  )
}

export default Play
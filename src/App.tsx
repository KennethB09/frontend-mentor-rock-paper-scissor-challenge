import { useState } from 'react'
import logo from "./assets/images/logo-bonus.svg"
import Choice from './components/choice'
import Play from './components/play'
import MatchHistory from './components/matchHistory'
import Rules from './components/rules'

export interface history {
  player: string | undefined
  computer: string
  result: "win" | "lose" | "draw"
}

export type TChoice = 'rock' | 'paper' | 'scissor' | 'lizard' | 'spock';

function App() {
  const [playerChoice, setPlayerChoice] = useState<TChoice | null>(null)
  const [computerChoice, setComputerChoice] = useState<TChoice | null>(null)
  const [result, setResult] = useState<null | "win" | "lose" | "draw">(null)
  const [nextRound, setNextRound] = useState(false)
  const [playerPoints, setPlayerPoints] = useState(0)
  const [history, setHistory] = useState<history[]>([])
  const [rulesOpen, setRulesOpen] = useState(false)
  const [historyOpen, setHistoryOpen] = useState(false)

  const RULES: Record<TChoice, TChoice[]> = {
    rock: ['scissor', 'lizard'],
    paper: ['rock', 'spock'],
    scissor: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['rock', 'scissor']
  };

  const choices: TChoice[] = ['rock', 'paper', 'scissor', 'lizard', 'spock'];

  function record(playerPick: string, computerChoice: string, result: "win" | "lose" | "draw") {
    const recordMatch: history = {
      player: playerPick,
      computer: computerChoice,
      result
    }
    setHistory(rec => [recordMatch, ...rec])
  }

  function toggleRules() {
    setRulesOpen(!rulesOpen)
  }

  function toggleHistory() {
    setHistoryOpen(!historyOpen)
  }

  function determineWinner (playerChoice: TChoice, computerChoice: TChoice) {
 
    const beatenChoices = RULES[playerChoice];
   
    if (beatenChoices.includes(computerChoice)) {
      setResult('win')
      setPlayerPoints(playerPoints + 1)
      record(playerChoice, computerChoice, "win")
    } else if (playerChoice === computerChoice) {
      setResult('draw')
      record(playerChoice, computerChoice, "draw")
    } else {
      setResult('lose')
      playerPoints!== 0? setPlayerPoints(playerPoints - 1) : setPlayerPoints(0)
      record(playerChoice, computerChoice, "lose")
    }
  };

  const playGame = (choice: TChoice) => {
    
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
   
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice)
  };

  return (
    <div className='app-main-container'>
      <div className='app-score-container'>

        <div className='app-title-container'>
          <img src={logo} alt='logo'/>
        </div>

        <div className='app-score'>
          <h1>score</h1>
          <span>{playerPoints}</span>
        </div>

      </div>
      {playerChoice === null ? <Choice playGame={playGame} /> :
        <Play playerChoice={playerChoice} computerChoice={computerChoice!} nextRound={nextRound} setNextRound={setNextRound} result={result} setPlayerChoice={setPlayerChoice} />}
        <div className='app-history-rules-container'>
          <button onClick={toggleHistory}>history</button>
          <button onClick={toggleRules}>rules</button>
        </div>
          {historyOpen && <MatchHistory toggleHistory={toggleHistory} history={history} />}
          {rulesOpen && <Rules toggleRules={toggleRules}/>}
    </div>
  )
}

export default App
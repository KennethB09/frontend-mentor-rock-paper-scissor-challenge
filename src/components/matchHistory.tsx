import { history } from "../App"
import x from "../assets/images/icon-close.svg";

type MatchHistoryProps = {
  history: history[]
  toggleHistory: () => void
}

function MatchHistory({ history, toggleHistory }: MatchHistoryProps) {
  const date = new Date()
  return (
    <div className="match-history-main-container">
      <div className="match-history-title-close-container">
        <h1>Match History</h1>
        <button onClick={toggleHistory}><img src={x} alt="close"/></button>
      </div>
      {history.length !== 0 ? <ul>
        {history.map((h, i) => {
          return <li key={i}><span className="match-history-result">{h.result}</span><p>You {h.player}<strong>VS</strong>Computer {h.computer}</p><span className="match-history-date">{date.toLocaleDateString()}</span></li>
        })}
      </ul> : <p>No Match History</p>}

    </div>
  )
}

export default MatchHistory
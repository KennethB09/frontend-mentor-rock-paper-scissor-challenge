import { TChoice } from "../App";
import scissor from "../assets/images/icon-scissors.svg";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";
import line from "../assets/images/bg-pentagon.svg";

type ChoiceProps = {
    playGame: React.Dispatch<TChoice>
}

function Choice({ playGame }: ChoiceProps) {
    return (
        <div className="choice-main-container">
            <div className="choice-pentagon-container">
                <img className="choice-pentagon" src={line}/>
            </div>
            <div className="choice-scissor-container">
                <button className="choice-scissor-btn" onClick={() => playGame('scissor')}><img src={scissor} alt="scissor"/></button>
            </div>
            <div className="choice-spock-paper-container">
                <button className="choice-spock-btn" onClick={() => playGame('spock')}><img src={spock} alt="spock"/></button>
                <button className="choice-paper-btn" onClick={() => playGame('paper')}><img src={paper} alt="paper"/></button>
            </div>
            <div className="choice-rock-lizard-container">
                <button className="choice-lizard-btn" onClick={() => playGame('lizard')}><img src={lizard} alt="lizard"/></button>
                <button className="choice-rock-btn" onClick={() => playGame('rock')}><img src={rock} alt="rock"/></button>
            </div>
        </div>
    )
}

export default Choice

import rules from "../assets/images/image-rules-bonus.svg";
import x from "../assets/images/icon-close.svg";

type rulesProps = {
  toggleRules: () => void
}

function Rules({ toggleRules }: rulesProps) {

  return (
    <div className="rules-main-container">
      <div className="rules-title-close-container">
        <h1>rules</h1>
      </div>
      <button onClick={toggleRules}><img src={x} alt="close" /></button>
      <p>If you win, your points will increase by 1; if you lose, your life will decrease by 1 and when it reach 0 its game over.</p>
      <div className="rules-image-container">
        <img className="rules-image" src={rules} alt="rules" />
      </div>
    </div>
  )
}

export default Rules
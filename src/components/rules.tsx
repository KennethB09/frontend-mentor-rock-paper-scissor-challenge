
import rules from "../assets/images/image-rules-bonus.svg";
import x from "../assets/images/icon-close.svg";

type rulesProps = {
  toggleRules: () => void
}

function Rules({ toggleRules }: rulesProps) {

  return (
    <div className="bg-clickable" onClick={toggleRules}>
      <div className="rules-main-container">
        <div className="rules-title-close-container">
          <h1>rules</h1>
        </div>
        <button onClick={toggleRules}><img src={x} alt="close" /></button>
        <div className="rules-image-container">
          <img src={rules} alt="rules" />
        </div>
      </div>
    </div>
  )
}

export default Rules
import UMap from "./UMap";
import "./style/Guess.css";

const Guess = () => {
  return (
    <div className="Guess">
      <UMap />
      <div className="info">
        <img src="/src/assets/testImg2.jpg" alt="" />
        <div className="controls">
          <div className="btn submit">Submit</div>
          {/* <div className="btn exit">Exit</div> */}
        </div>
      </div>
    </div>
  );
};

export default Guess;

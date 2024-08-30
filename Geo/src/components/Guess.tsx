import UMap from "./UMap";
import "./style/Guess.css";

const Guess = () => {
  const click = () => {
    console.log("hi");
  };

  return (
    <div className="Guess">
      <UMap />
      <div className="info">
        <img src="/src/assets/testImg.jpg" alt="" />
        <div className="controls">
          <div className="btn submit" onClick={click}>
            &#10003;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guess;

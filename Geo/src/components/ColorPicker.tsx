import { useState, useEffect } from "react";
import "./style/ColorPicker.css";

const ColorPicker = (props: { setter: Function }) => {
  const [red, setRed] = useState<number>(255);
  const [green, setGreen] = useState<number>(255);
  const [blue, setBlue] = useState<number>(255);

  useEffect(() => {
    props.setter(`rgb(${red}, ${green}, ${blue})`);
  }, [red, green, blue, props]);

  return (
    <div className="ColorPicker">
      <div className="squares">
        <div className="" style={{ display: "flex" }}>
          <ColorSquare
            color={{ r: 255, g: 0, b: 0 }}
            setters={{ sr: setRed, sg: setGreen, sb: setBlue }}
          />
          <ColorSquare
            color={{ r: 255, g: 125, b: 0 }}
            setters={{ sr: setRed, sg: setGreen, sb: setBlue }}
          />
          <ColorSquare
            color={{ r: 255, g: 255, b: 0 }}
            setters={{ sr: setRed, sg: setGreen, sb: setBlue }}
          />
          <ColorSquare
            color={{ r: 0, g: 255, b: 0 }}
            setters={{ sr: setRed, sg: setGreen, sb: setBlue }}
          />
          <ColorSquare
            color={{ r: 0, g: 255, b: 255 }}
            setters={{ sr: setRed, sg: setGreen, sb: setBlue }}
          />
          <ColorSquare
            color={{ r: 0, g: 0, b: 255 }}
            setters={{ sr: setRed, sg: setGreen, sb: setBlue }}
          />
          <ColorSquare
            color={{ r: 125, g: 0, b: 255 }}
            setters={{ sr: setRed, sg: setGreen, sb: setBlue }}
          />
          <ColorSquare
            color={{ r: 255, g: 0, b: 255 }}
            setters={{ sr: setRed, sg: setGreen, sb: setBlue }}
          />
        </div>
        <div className="lower" style={{ display: "flex" }}>
          <ColorSquare
            color={{ r: 0, g: 0, b: 0 }}
            setters={{ sr: setRed, sg: setGreen, sb: setBlue }}
          />
          <ColorSquare
            color={{ r: 255, g: 255, b: 255 }}
            setters={{ sr: setRed, sg: setGreen, sb: setBlue }}
          />
          <div
            className="center square"
            onClick={() => {
              setRed(Math.floor(Math.random() * 256));
              setGreen(Math.floor(Math.random() * 256));
              setBlue(Math.floor(Math.random() * 256));
            }}
          >
            <p>?</p>
          </div>
          <div className="rgb">
            <label htmlFor="red">R</label>
            <input
              className={"c"}
              type="number"
              name="red"
              id="red"
              value={red}
              onChange={(e) => {
                let n = Number(e.target.value);
                if (n > 255) n = 255;
                if (n < 0) n = 0;
                setRed(n);
              }}
            />
            <label htmlFor="green">G</label>
            <input
              className={"c"}
              type="number"
              name="green"
              id="green"
              value={green}
              onChange={(e) => {
                let n = Number(e.target.value);
                if (n > 255) n = 255;
                if (n < 0) n = 0;
                setGreen(n);
              }}
            />
            <label htmlFor="blue">B</label>
            <input
              className={"c"}
              type="number"
              name="blue"
              id="blue"
              value={blue}
              onChange={(e) => {
                let n = Number(e.target.value);
                if (n > 255) n = 255;
                if (n < 0) n = 0;
                setBlue(n);
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="color"
        style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      ></div>
    </div>
  );
};

type color = { r: number; g: number; b: number };
type setters = { sr: Function; sg: Function; sb: Function };
const ColorSquare = (props: { color: color; setters: setters }) => {
  return (
    <div
      onClick={() => {
        props.setters.sr(props.color.r);
        props.setters.sg(props.color.g);
        props.setters.sb(props.color.b);
      }}
      style={{
        backgroundColor:
          "rgb(" +
          props.color.r +
          " " +
          props.color.g +
          " " +
          props.color.b +
          ")",
      }}
      className="square"
    ></div>
  );
};

export default ColorPicker;

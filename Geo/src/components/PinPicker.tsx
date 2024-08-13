import { useState } from "react";
import "./style/PinPicker.css";
import ColorPicker from "./ColorPicker";

const PinPicker = () => {
  const [background, setBackground] = useState<string>("rgb(240, 0, 0)");
  const [center, setCenter] = useState<string>("red");
  const [outline, setOutline] = useState<string>("red");

  return (
    <div className="pin">
      <div className="flex">
        <div className="">
          <h2>Backgorund</h2>
          <ColorPicker setter={setBackground} />
        </div>
        <div className="">
          <h2>Outline</h2>
          <ColorPicker setter={setOutline} />
        </div>
      </div>

      <h2>Center</h2>
      <ColorPicker setter={setCenter} />

      <svg
        width="100"
        height="150"
        viewBox="0 0 24 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* pin */}
        <path
          d="M12 1C7 1 3 5 3 10c0 7 9 23 9 23s9-16 9-23c0-5-4-9-9-9z"
          stroke={outline}
          fill={background}
          stroke-width="1.5"
        />
        {/* center */}
        <circle cx="12" cy="10" r="4" fill={center} />
      </svg>
    </div>
  );
};

export default PinPicker;

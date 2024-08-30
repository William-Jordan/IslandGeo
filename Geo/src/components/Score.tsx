import { useState, useEffect } from "react";

import { address } from "../key.ts";
import axios from "axios";

const Score = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<any[]>("http://" + address + ":3000/people")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="Score">
      {loading ? (
        "loading"
      ) : (
        <table>
          <thead></thead>
          <tbody>
            {data ? (
              data.map((row, index) => (
                <tr key={index}>
                  <td>
                    <Pin
                      background={`rgb(${row.pin.background.r}, ${row.pin.background.g}, ${row.pin.background.b})`}
                      center={`rgb(${row.pin.center.r}, ${row.pin.center.g}, ${row.pin.center.b})`}
                      outline={`rgb(${row.pin.outline.r}, ${row.pin.outline.g}, ${row.pin.outline.b})`}
                    />
                  </td>
                  <td>{row.name}</td>
                  <td>{row.points}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>no data found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

const Pin = (props: {
  outline: string;
  background: string;
  center: string;
}) => {
  return (
    <svg
      width="100"
      height="150"
      viewBox="0 0 24 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* pin */}
      <path
        d="M12 1C7 1 3 5 3 10c0 7 9 23 9 23s9-16 9-23c0-5-4-9-9-9z"
        stroke={props.outline}
        fill={props.background}
        strokeWidth="1.5"
      />
      {/* center */}
      <circle cx="12" cy="10" r="4" fill={props.center} />
    </svg>
  );
};

export default Score;

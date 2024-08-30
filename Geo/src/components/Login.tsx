import axios from "axios";
import { address } from "../key.ts";

async function addItemToServer(
  name: string,
  description: string,
): Promise<any> {
  try {
    const response = await axios.post<any>(
      "http://" + address + ":3000/items",
      {
        name,
        description,
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error adding item to server:", error);
    throw new Error("Failed to add item to server");
  }
}

const Login = () => {
  return (
    <div className={"Login"}>
      <div
        className="click"
        onClick={() => addItemToServer("will", "100 points")}
      ></div>
    </div>
  );
};

export default Login;

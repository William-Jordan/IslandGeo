import { useState, useEffect } from "react";
import axios from "axios";

interface Item {
  name: string;
  description: string;
}

async function addItemToServer(
  name: string,
  description: string
): Promise<Item> {
  try {
    const response = await axios.post<Item>(
      "http://142.105.203.227:3000/items",
      {
        name,
        description,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error adding item to server:", error);
    throw new Error("Failed to add item to server");
  }
}

const add = (name: string, description: string) => {
  addItemToServer(name, description)
    .then((item) => {
      console.log("Item added:", item);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};

const TEST = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<Item[]>("http://142.105.203.227:3000/items")
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <button onClick={() => add("name test", "desc")}>test</button>;
      <button onClick={() => add("name test", "desc")}>list</button>;
      {loading ? (
        <p>loading</p>
      ) : (
        items.map((item, index) => <li key={index}>{item.name}</li>)
      )}
    </>
  );
};

export default TEST;

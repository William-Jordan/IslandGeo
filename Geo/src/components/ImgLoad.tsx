import React, { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
  value: string;
}

const ImgLoad: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from the API on component mount
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleAddItem = () => {
    const newItem: Item = {
      id: data.length + 1,
      name: `Item ${data.length + 1}`,
      value: String.fromCharCode(65 + data.length),
    };

    fetch("http://localhost:5000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((addedItem) => {
        setData((prevData) => [...prevData, addedItem]);
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ImgLoad;

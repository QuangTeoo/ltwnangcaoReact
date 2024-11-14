import { useState } from "react";

function Car() {
  const [cars, setCars] = useState({
    name: "Ford",
    color: "red",
    year: 2018,
  });
  const [data, setData] = useState("");
  const handleUpdateYear = () => {
    setCars({
      ...cars,
      year: data,
    });
    setData("");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Show information of Car: {JSON.stringify(cars)} </h1>
      <div>
        {" "}
        Update Year of Car:{" "}
        <input
          type="number"
          value={data}
          onInput={(e) => setData(e.target.value)}
        />
      </div>
      <input
        style={{ marginTop: "10px" }}
        type="button"
        value="Update"
        onClick={handleUpdateYear}
      />
    </div>
  );
}

export default Car;

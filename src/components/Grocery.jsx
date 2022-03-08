import { useEffect, useState } from "react";
import axios from "axios";
import "./Gocery.css"

export const Grocery = () => {
  const [text, setText] = useState("");
  const [groceries, setGroceries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);
  const getData = () => {
    axios
      .get(`http://localhost:3001/groceries?_limit=3&_page=${page}`)
      .then((res) => {
        setGroceries(res.data);
      });
  };
  return (
    <div>
      <h1>Groceries</h1>
      <input className="input"
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="b"
        onClick={() => {
          fetch("http://localhost:3001/groceries", {
            method: "POST",
            body: JSON.stringify({ title: text, purchased: false }),
            headers: {
              "content-type": "application/json",
            },
          }).then(() => {
            getData();
          });
        }}
      >
        Save Grocery
      </button>
      <br />
      {groceries.map((g) => {
        return <div className="div" key={g.id}>{g.title}</div>;
      })}
      <button className="b"
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button className="b"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(0);

  function handleSingleSelected(getCurrentId) {
    setSelected(getCurrentId);
  }

  return (
    <div className="wrapper">
      <h1>Accordian</h1>
      <div className="accordian-container">
        {data &&
          data.length &&
          data.map((dataItem) => (
            <div className="data-item">
              <div
                className="title"
                key={dataItem.id}
                onClick={() => handleSingleSelected(dataItem.id)}
              >
                <h3>{dataItem.title}</h3>
                <span>{selected !== dataItem.id ?  "+" : null}</span>
              </div>
              <div className="accordian-content">
                {selected === dataItem.id && <div>{dataItem.content}</div>}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

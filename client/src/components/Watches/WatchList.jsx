import React, { useContext } from "react";
import WatchCard from "./WatchCard";
import "./Watches.scss";
import MainContext from "../../context/context";

function WatchList() {
  const { full } = useContext(MainContext);

  const filteredWatches = full.filter(item => item.title.includes("Watches"));

  return (
    <section className="wtch">
      <h2>Let everyone easily experience technological life</h2>
      <p>Watches</p>
      <div className="watches">
        {filteredWatches.slice(0, 3).map((item, index) => {
          return <WatchCard item={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default WatchList;

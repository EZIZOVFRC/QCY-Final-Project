import React, { useState } from "react";
import WatchCard from "./WatchCard";
import "./Watches.scss";
function WhatchList({ data }) {
  return (
    <section className="wtch" >
      <h2>Let everyone easily experience technological life</h2>
      <p>Watches</p>
      <div className="watches">
        {data.slice(0,3).map((item, index) => {
          return <WatchCard item={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default WhatchList;
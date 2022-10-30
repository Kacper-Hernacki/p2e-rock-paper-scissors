import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  const wins = useSelector((state) => state.counter.wins);
  const losses = useSelector((state) => state.counter.losses);
  const draws = useSelector((state) => state.counter.draws);
  const total = wins + losses + draws;

  return (
    <div>
      <h1>Total games: {total}</h1>
      <p>
        <span>wins:</span> {wins}
        <span>losses:</span>
        {losses}
        <span>draws:</span> {draws}
      </p>
    </div>
  );
}

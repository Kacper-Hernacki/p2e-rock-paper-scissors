import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Counter() {
  const wins = useSelector((state) => state.counter.wins);
  const losses = useSelector((state) => state.counter.losses);
  const draws = useSelector((state) => state.counter.draws);
  const total = wins + losses + draws;

  return (
    <Container>
      <h1>Total games: {total}</h1>
      <p>
        <span>{wins} wins</span>
        <span>{losses} losses</span>
        <span>{draws} draws</span>
      </p>
    </Container>
  );
}

const Container = styled.div`
  p {
    margin-top: 4px;
    display: flex;
    flex-direction: column;
  }
  span {
    margin-left: 2px;
  }
`;

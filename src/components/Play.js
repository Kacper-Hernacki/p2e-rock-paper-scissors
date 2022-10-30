import React from "react";
import { generatePath, Link } from "react-router-dom";
import styled, { css } from "styled-components";

const PlayButton = styled.button`
  width: 400px;
  height: 100px;
  font-size: 40px;
  border-radius: 20px;
  cursor: pointer;
`;

export default function Play({ itemId }) {
  return (
    <Link
      to={generatePath("/game/:itemId", {
        itemId: itemId,
      })}
    >
      <PlayButton>Play</PlayButton>
    </Link>
  );
}

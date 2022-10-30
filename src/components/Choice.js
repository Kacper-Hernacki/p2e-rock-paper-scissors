import React from "react";
import styled from "styled-components";
import { getImage } from "../helpers";

const Container = styled.div`
  width: 200px;
  cursor: pointer;
  margin: 10px;
  border-radius: 10%;

  &:hover {
    background-color: yellow;
  }
`;

const Image = styled.img`
  width: 200px;
  object-fit: contain;
`;

export default function Choice({ name, id, chooseItem }) {
  const cover = getImage(name);

  return (
    <Container onClick={chooseItem(id)}>
      <Image src={cover} />
    </Container>
  );
}

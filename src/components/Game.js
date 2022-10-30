import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { checkIfWon, getRandomInt } from "../helpers";
import choicesList from "./choicesList";
import { useDispatch } from "react-redux";
import { won, lost, draw } from "../slices/slice";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const GameDetails = styled.div`
  max-width: 500px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  object-fit: contain;
`;

const Title = styled.h1``;

const PlayButton = styled.button`
  width: 400px;
  height: 100px;
  font-size: 40px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 35px;
`;

const renderHeader = (param) => {
  switch (param) {
    case true:
      return "You won!";
    case false:
      return "You loose!";
    default:
      return "Draw";
  }
};

const renderDetails = (param) => {
  switch (param) {
    case true:
      return "beats";
    case false:
      return "loose with";
    default:
      return "draws";
  }
};

const renderBanner = ({
  won,
  item,
  opponent,
  itemCover,
  computersItemCover,
}) => {
  return (
    <Container>
      <GameDetails>
        <Title>{renderHeader(won)}</Title>
        <div>
          <Image src={itemCover} />
          <Image src={computersItemCover} />
        </div>

        <Title>{`${item} ${renderDetails(won)} ${opponent}`}</Title>
        <Link to="/">
          <PlayButton>Play again</PlayButton>
        </Link>
      </GameDetails>
    </Container>
  );
};

export default function Game() {
  const params = useParams();
  const computersChoice = getRandomInt(1, 4);
  const dispatch = useDispatch();

  const result = checkIfWon(
    Number(params?.itemId),
    computersChoice,
    choicesList
  );

  console.log(result);

  useEffect(() => {
    if (result?.won === true) {
      dispatch(won());
    } else if (result?.won === "draw") {
      dispatch(draw());
    } else {
      dispatch(lost());
    }
  }, [result]);

  return <div>{renderBanner(result)}</div>;
}

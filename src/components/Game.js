import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { checkIfWon, getRandomInt } from "../helpers";
import choicesList from "./choicesList";
import { useSelector, useDispatch } from "react-redux";
import { won, lost, draw } from "../slices/slice";

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
    <>
      <h1>{renderHeader(won)}</h1>
      <img src={itemCover} />
      <img src={computersItemCover} />
      <h1>{`${item} ${renderDetails(won)} ${opponent}`}</h1>
      <Link to="/">
        <button>Play again</button>
      </Link>
    </>
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

  useEffect(() => {
    if (result?.won) {
      dispatch(won());
    } else if (!result?.won) {
      dispatch(lost());
    } else {
      dispatch(draw());
    }
  }, [result]);

  return <div>{renderBanner(result)}</div>;
}

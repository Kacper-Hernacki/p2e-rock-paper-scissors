import React from "react";
import rocks from "../assets/rocks.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";

export const getImage = (name) => {
  switch (name) {
    case "rock":
      return rocks;
      break;
    case "paper":
      return paper;
      break;
    case "scissors":
      return scissors;
      break;
    default:
      break;
  }
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export const checkIfWon = (selectedItem, computersItem, choices) => {
  const selectedItemDetails = choices?.find((item) => item.id === selectedItem);
  let battleDetails = {};
  const itemCover = getImage(selectedItemDetails?.name);

  if (selectedItemDetails?.beatsId === computersItem) {
    return (battleDetails = {
      won: true,
      item: selectedItemDetails?.name,
      opponent: selectedItemDetails?.beats,
      itemCover: itemCover,
      computersItemCover: getImage(selectedItemDetails?.beats),
    });
  } else if (selectedItemDetails?.looseId === computersItem) {
    return (battleDetails = {
      won: false,
      item: selectedItemDetails?.name,
      opponent: selectedItemDetails?.loose,
      itemCover: itemCover,
      computersItemCover: getImage(selectedItemDetails?.loose),
    });
  } else {
    return (battleDetails = {
      won: "draw",
      item: selectedItemDetails?.name,
      opponent: selectedItemDetails?.name,
      itemCover: itemCover,
      computersItemCover: itemCover,
    });
  }
};

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

import React, { useState } from "react";
import Choice from "./Choice";
import choicesList from "./choicesList";
import Play from "./Play";

export default function Choices() {
  const [selectedItem, setSelectedItem] = useState();

  const chooseItem = (id) => {
    setSelectedItem(id);
  };

  const isSelected = (id) => {
    if (id === selectedItem) {
      return true;
    }
    return false;
  };

  return (
    <div>
      {choicesList?.map((item, id) => {
        return (
          <Choice
            key={id}
            id={item?.id}
            name={item?.name}
            chooseItem={chooseItem}
            selected={isSelected(id + 1)}
          />
        );
      })}
      {selectedItem ? <Play itemId={selectedItem} /> : null}
    </div>
  );
}

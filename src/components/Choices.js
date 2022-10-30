import React, { useState } from "react";
import Choice from "./Choice";
import choicesList from "./choicesList";

export default function Choices() {
  const [selectedItem, setSelectedItem] = useState();

  const chooseItem = async (id) => {
    setSelectedItem(id);
  };

  console.log(selectedItem);

  return (
    <div>
      {choicesList?.map((item, id) => {
        return (
          <Choice
            key={id}
            id={item?.id}
            name={item?.name}
            chooseItem={chooseItem}
          />
        );
      })}
    </div>
  );
}

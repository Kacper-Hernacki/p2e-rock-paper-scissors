import React, { useState } from "react";
import styled from "styled-components";
import Choice from "./Choice";
import choicesList from "./choicesList";
import Play from "./Play";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const SelectModule = styled.div`
  display: grid;
  place-items: center;

  button {
    margin-top: 40px;
  }
`;

const ChoicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

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
    <Container>
      <SelectModule>
        <ChoicesContainer>
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
        </ChoicesContainer>
        {selectedItem ? <Play itemId={selectedItem} /> : null}
      </SelectModule>
    </Container>
  );
}

import React from "react";
import Counter from "./Counter";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <Navbar>
      <Counter />
    </Navbar>
  );
}

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: aliceblue;
`;

import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./pages/header"
import Main from "./pages/main"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  body{
    width: 100%;
    background-color: #F2F4F1;
  }
`

export default function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </div>
  );
}



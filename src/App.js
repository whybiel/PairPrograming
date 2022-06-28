import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./pages/header"
import Main from "./pages/main"
import Footer from "./pages/footer"

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
  ::-webkit-scrollbar{
    width:5px;
  }
  ::-webkit-scrollbar-track{
    background:#fff;
  }
  ::-webkit-scrollbar-thumb{
    width:2px;
    background: #373737;
    border-radius: 30px;
  }
`

export default function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}



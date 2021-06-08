import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoTemplate>안녕하세요</TodoTemplate>
    </div>
  );
}

export default App;

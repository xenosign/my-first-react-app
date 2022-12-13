import "./App.css";
import BtnToNaver from "./components/BtnToNaver";
import ClassProps from "./components/ClassProps";
import ClassState from "./components/ClassState";
import Counter from "./components/Counter";
import CustomList from "./components/CustomList";
import CustomObj from "./components/CustomObj";
import FunctionalState from "./components/FuntionalState";
import ImgComponent from "./components/ImgComponent";
import MainHeader from "./components/MainHeader";
import ChangeObj from "./components/ChangeObj";
import Comparing from "./components/Comparing";
import TestRef from "./components/TestRef";
import ChangeFocus from "./components/ChangeFocus";
import RefDOM from "./components/RefDOM";
import RandomQuiz from "./components/RandomQuiz";
import ReactFragment from "./components/ReactFragment";
import TableColumn from "./components/TableColumn";
import { useState, useRef, useEffect } from "react";
import ConditionalRender from "./components/ConditionalRender";
import ConditionalRender2 from "./components/ConditionalRender2";
import PracticeOne from "./components/PracticeOne";
import PracticeTwo from "./components/PracticeTwo";
import TestUseEffect from "./components/TestUseEffect";
import Timer from "./components/Timer";
import PracticeTimer from "./components/PracticeTimer";
import UseEffectFetch from "./components/UseEffectFetch";
import UsingUseMemo from "./components/UsingUseMemo";
import TestInlineCSS from "./components/TestInlineCSS";
import TestCssFile from "./components/TestCssFile";
import TestStyled from "./components/TestStyled";
import styled, { keyframes } from "styled-components";
import Images from "./components/Images";
import Dialog from "./components/Dialog";
import WelcomeDialog from "./components/WelcomeDialog";
import FancyBorder from "./components/FancyBorder";
import SignUpDialog from "./components/SignUpDialog";

function App() {
  return (
    <div className="App">
      <Dialog
        // color="skyblue"
        title={<button onClick={() => alert("Welcome")}>웰컴 버튼</button>}
        message="회원 가입이 필요한 서비스 입니다!"
      ></Dialog>
    </div>
  );
}
export default App;

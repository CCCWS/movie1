import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  //BrowserRouter 일반적인 url
  //HaxhRouter #이 붙음

  //Router는 먼저 렌더링 해줌, 한번에 하나만 렌더링하기위해 Switch사용
  //Switch는 Route를 찾음
  //Route는 http://localhost:3000/movies/test /movies/test부분
  //Route를 찾으면 해당 컴포넌트를 렌더링
  //path의 값은 http://localhost:3000 뒤에 붙은 값

  //다른 페이지로 이동하기위해 <a>로 파일경로를 적으면 페이지가 새로고침됨
  // 리액트 장점 > 화면 새로고침 없이 어플처럼 사용하는것 > Link사용 새로고침없이 페이지 이동
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/:title" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

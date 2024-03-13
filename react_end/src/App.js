/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '종로 쌍화차 맛집';
  let [a,b] = useState(['정현시와 함께하는 삼각형 여행기','두바이 벼락부자 vs 사주로 움직이는 수경수','수경수의 미래를 예측해보자!']);
  let [like, likePlus] = useState(0);
  
// useState 변동시 자동으로 html 반영되게 만들고 싶으면 쓰면된당

  return (
    <div className="App">
    <div className="black-nav">
        <h4>수경수 블로그</h4>
    </div>


    <button onClick={() => {
  let player = [...a]; // 현재 상태를 복제
  player.sort((c, d) => c.toLowerCase() < d.toLowerCase() ? -1 : 1); // 가나다순으로 정렬
  b(player); // 상태 업데이트
}}> '가나다순으로 정리해요' </button>


    <button onClick={()=> {
     let copy = [...a];
      copy[1]='정현시와 함께하는 삼각형 여행기';
      b(copy);
      } }>버튼누르깅</button>

    <div className="list">
        <h4>{a[0]}<span onClick={()=> {likePlus(like + 1)}}>👍</span>{like}</h4>
        <p>3월 5일 발행</p>
      </div>

      <div className="list">
        <h4>{a[1]}</h4>
        <p>3월 6일 발행</p>
      </div>
      
      
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

      <div className="list">
        <h4>{a[2]}</h4>
        <p>3월 9일 발행</p>
      </div>

    </div>
  );
}

export default App;

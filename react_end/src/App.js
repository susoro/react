import logo from './logo.svg';
import './App.css';

function App() {

  let post = '종로 쌍화차 맛집';
  return (
    <div className="App">
    <div className="black-nav">
        <h4>블로그임</h4>
    </div>

    <div className="zip-file">
      <h4 className="zip">{post}</h4>
    </div>
    </div>
  );
}

export default App;

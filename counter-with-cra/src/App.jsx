import "./App.css";

// 이미지 에셋 불러오기
// import logo from "./assets/logo.svg";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter count={9} />
      <Counter count={1} />
      <Counter count={2} />
    </div>
  );
}

export default App;

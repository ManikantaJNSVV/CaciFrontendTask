import "./App.css";
import Starships from "./components/Starships";
import Header from "./Ui/atoms/Header";

function App() {
  return (
    <div className="App">
      <Header title={"🚀 Starships Explorer"}></Header>
      <Starships></Starships>
    </div>
  );
}

export default App;

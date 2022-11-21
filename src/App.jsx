import "./components/header"
import { Header } from "./components/header"
import "./App.css"
import {SearchdateWise} from "./components/date"


function App() {
  return (
    <div>
      <Header />
      <div className="background">
        <SearchdateWise/>
      </div>
      <div className="bottomText">
        <h1>Find your drive</h1>
        <div className="explore">
        <h2>Explore the world's largest car sharing marketplace</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
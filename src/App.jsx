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
    </div>
  );
}

export default App;
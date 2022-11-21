import './components/header'
import { Header } from './components/header'
import './App.css'
import { SearchdateWise } from './components/date'
import {SimpleSlider} from "./components/slider.jsx"
import {OneSlider} from "./components/slider.jsx"

function App() {
  return (
    <div>
      <Header />
      <div className="background">
        <SearchdateWise />
      </div>
      <div className="bottomText">
        <h1>Find your drive</h1>
        <div className="explore">
          <h2>Explore the world's largest car sharing marketplace</h2>
        </div>
      </div>
      <div className='sliderShow'>
        <SimpleSlider />
      </div>
      <div>
      <OneSlider />
      </div>
    </div>
  )
}

export default App

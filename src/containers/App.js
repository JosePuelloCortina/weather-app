import { Routes, Route, BrowserRouter} from "react-router-dom"
import Card from '../components/Card'

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route exact to path="/" element={<Card/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

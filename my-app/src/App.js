import {HashRouter,Routes,Route} from"react-router-dom";
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import MapPage from "./components/MapPage/MapPage";
import TimePage from "./components/TimePage/TimePage";


function App() {
  return (

  <HashRouter>
  <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/map" element={<MapPage/>}/>
    <Route path="/time" element={<TimePage/>}/>
  </Routes>
  </HashRouter>
  );
}

export default App;

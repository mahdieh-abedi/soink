import { Routes, Route} from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home";
import Artists from "./components/artists/Artists";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="artist" element={<Artists />}>
          {/* <Route path=":teamId" element={<Team />} /> */}
        </Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;

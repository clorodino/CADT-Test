import './App.scss';
import Designs from './views/Designs/Designs'
import { Routes, Route } from "react-router-dom";
import Setouts from './views/Setouts/Setouts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Designs />} />
        <Route path="designs" element={<Designs />} />
        <Route path="setouts" element={<Setouts />} />
      </Routes>
    </div>
  );
}

export default App;

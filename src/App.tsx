import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Data from './components/Data'
import Charts from './components/Charts'
import InsertRecord from './components/InsertRecord'
import Alert from "./components/general/Alert"

function App() {
  return (
    <>
      <Navbar/>

      <div className="p-5">
        <Alert/>
        <Routes>
           <Route path="/" element={<Data />} />
           <Route path="/charts" element={<Charts />} />
           <Route path="/insert-record" element={<InsertRecord />} />
        </Routes>
      </div>
   </>
  );
}

export default App;

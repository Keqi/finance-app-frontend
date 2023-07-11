import { Routes, Route } from 'react-router-dom';

import Data from './components/Data'
import Charts from './components/Charts'
import InsertRecord from './components/InsertRecord'

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Data />} />
         <Route path="/charts" element={<Charts />} />
         <Route path="/insert-record" element={<InsertRecord />} />
      </Routes>
   </>
  );
}

export default App;

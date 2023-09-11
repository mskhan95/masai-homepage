import './App.css';
import MasaiInNews from './Component/masaiInNews';
import CiriculumAndProdogy from './Component/CiriculumAndProdogy';
// import Navbar from './Component/Navbar';

import CarrearPossibility from './Component/CarrearPossibility';
import Our_courses from './Component/Our_courses';
function App() {
  return (
    <div className="App">
    <Our_courses/> 
    <CiriculumAndProdogy/>
    <MasaiInNews/>
    <CarrearPossibility/>
    
    {/* <Navbar/> */}
  
    </div>
  );
}

export default App;

import './App.css';
import { useState} from "react";
import MasaiInNews from './Component/masaiInNews';
import CiriculumAndProdogy from './Component/CiriculumAndProdogy';

 import Desktop from './Component/Desktop'
import Our_courses from './Component/Our_courses';
  
import CarrearPossibility from './Component/CarrearPossibility';
function App() {
  const [activeCourse, setActiveCourse] = useState(null);
  return (
    <div className="App">
       <Desktop/>
       <Our_courses activeCourse={activeCourse}setActiveCourse={setActiveCourse} />
      <CiriculumAndProdogy activeCourse={activeCourse}setActiveCourse={setActiveCourse}/>
    <MasaiInNews activeCourse={activeCourse}setActiveCourse={setActiveCourse}/>
    <CarrearPossibility/>

   
  
</div>
  );
}

export default App;

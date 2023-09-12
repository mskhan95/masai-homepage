import './App.css';

import { useState} from "react";
import MasaiInNews from './Component/masaiInNews';
import CiriculumAndProdogy from './Component/CiriculumAndProdogy';
import {Tech_Community} from './Component/Tech_Community';
import {Hiring_Partner} from "./Component/Hiring_Partner.jsx"



// import MasaiInNews from './Component/masaiInNews';
// import CiriculumAndProdogy from './Component/CiriculumAndProdogy';
 import Navbar from './Component/Navbar';

 import Desktop from './Component/Desktop'
import Our_courses from './Component/Our_courses';
import Footer from './Component/Footer';
import CarrearPossibility from './Component/CarrearPossibility';



function App() {
  const [activeCourse, setActiveCourse] = useState(null);
  return (
    <div className="App">

    <Navbar/>
       <Desktop/>
       <Our_courses activeCourse={activeCourse}setActiveCourse={setActiveCourse} />
       
      {/* <CiriculumAndProdogy activeCourse={activeCourse}setActiveCourse={setActiveCourse}/> */}
      <Tech_Community/>
      <Hiring_Partner/>
    <MasaiInNews activeCourse={activeCourse}setActiveCourse={setActiveCourse}/>
    <CarrearPossibility/>
    <Footer/>

   
  
</div>

     

  )
}

export default App;

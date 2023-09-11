import './App.css';


// import MasaiInNews from './Component/masaiInNews';
// import CiriculumAndProdogy from './Component/CiriculumAndProdogy';
 import Navbar from './Component/Navbar';
 import Desktop from './Component/Desktop'
import Our_courses from './Component/Our_courses';
import Footer from './Component/Footer';
import CarrearPossibility from './Component/CarrearPossibility';
function App() {
  return (
    <div className="App">

     <Navbar/>
      {/* <CiriculumAndProdogy/> */}
    {/* <MasaiInNews/> */}
    <CarrearPossibility/>
    
    {/* <Desktop/> */}
  <Our_courses/>

  <Footer/>
   </div>
  );
}

export default App;

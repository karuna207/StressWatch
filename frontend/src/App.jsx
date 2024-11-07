import React from 'react' 
import { Routes,Route } from 'react-router-dom' 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import FormData from './pages/FormData';
import Home from './pages/Home'; 
import Contact from './pages/Contact'; 
import About from './pages/About'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"> 
      <ToastContainer></ToastContainer>  
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}></Route> 
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route> 
        <Route path='/form' element={<FormData/>}></Route> 

    
      </Routes> 
      <Footer/>
      
    </div> 
  )
};

export default App;

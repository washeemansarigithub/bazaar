import Navbar from './Components/Navbar'
import './App.css'
import Home from './Components/Home'
import Card from "./Components/CardContainer";
import CardContainer from './Components/CardContainer';
import Destination from './Components/Destination';
import ImageLayout from './Components/ImageLayout';
import International from './Components/International';
import ImageInter from './Components/ImageInter';
import Feature from './Components/Feature';
import ImageGallery from './Components/ImageGallery';
import Gallery from './Components/Gallery';
import ButtonRow from './Components/ImageWithButton.jsx';
import ImageWithButton from './Components/ImageWithButton.jsx';
import Hotels from './Components/Hotels.jsx';
import HotelsGallery from './Components/HotelsGallery.jsx';
import Footer from './Components/Footer.jsx';
import ContactIcons from './Components/ContactIcons.jsx';
function App() {


  return (
    <>
    <ContactIcons />
      <Navbar/>

      <Home/>
      {/* <CardContainer/> */}
      <Destination/>
      <ImageLayout/>

      <International/>
     <ImageInter/>
     <Feature/>
     <ImageGallery/>
     <Gallery/>
     <ImageWithButton/>
     <Hotels/>
     <HotelsGallery/>
     <Footer/>
      </>
  )
}

export default App

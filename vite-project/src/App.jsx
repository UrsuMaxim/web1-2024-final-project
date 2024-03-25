import './App.css'
import Destinations from './Components/Destinations/Destinations'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Questions from './Components/Questions/Questions'
import Reviews from './Components/Reviews/Reviews'
import Subscribe from './Components/Subscribe/Subscribe'
import Portofoliu from './Components/Potofoliu/Portofoliu'
import Middle from './Components/Middle/Middle'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Middle/>
      <Destinations/>
      <Portofoliu/>
      <Reviews/>
    </>
  )
}


// <Questions/>
// <Subscribe/>
// <Footer/> 

export default App

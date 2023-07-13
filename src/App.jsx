import { ChatBot } from "./Components/ChatBot"
import { Choice } from "./Components/Choice"
import Contact from "./Components/Contact"
import { DesignerChoice } from "./Components/DesignerChoice"
import EssentialBasic from "./Components/EssentialBasics"
import ExclusiveRequest from "./Components/ExclusiveRequest"
import Footer from "./Components/Footer"
import HouseOfMaterials from "./Components/HouseOfMaterials"
import Last from "./Components/Last"
import MarqueeCom from "./Components/Marque"
import MaterialDepot from "./Components/MaterialDepot"
import Mobile from "./Components/Mobile"
import Navigation from "./Components/Navbar"
import { ShopWithConfidence } from "./Components/ShopWithConfidence"
import StyleSpectrum from "./Components/StyleSpectrum"
import { Tailored } from "./Components/Tailored"
import { ThreeImage } from "./Components/ThreeImage"
import TileGallery from "./Components/TileGallery"
import TrendingNow from "./Components/TrendingNow"
import WallPanel from "./Components/WallPanel"

function App() {
 

  return (
    <>
      <Navigation />
      <ThreeImage />
      <Contact />
      <ChatBot/>
      <Choice />
      <HouseOfMaterials />
      <TileGallery />
      <DesignerChoice />
      <ExclusiveRequest />
      <TrendingNow />
      <WallPanel />
      <EssentialBasic />
      <StyleSpectrum />
      <MaterialDepot />
      <Mobile />
      <ShopWithConfidence />
      <Tailored/>
      <MarqueeCom />
      <Footer />
      <Last/>
      
    </>
  )
}

export default App

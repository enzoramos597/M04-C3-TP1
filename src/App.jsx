import Footer from "./components/Footer"
import Header from "./components/Header"
import portada from "./assets/Inicio_portada.webp"
import Main from "./components/Main"

function App() {

  return (
    <>
    <div
        className="min-h-screen flex flex-col text-neutral-100"
        style={{
          backgroundImage: `url(${portada})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
      {/* Overlay oscuro */}
        <div className="bg-black/50 flex flex-col min-h-screen">
          <Header />    
          <Main />  
          <Footer />
        </div>      
      </div>
      
    </>
  )
}

export default App

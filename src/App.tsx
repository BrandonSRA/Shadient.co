import { Footer } from "./components/Footer";
import { Navbar } from "./components/NavBar";
import BrowserRouter from "./router";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter />
      <Footer />
    </>
  );
}

export default App;

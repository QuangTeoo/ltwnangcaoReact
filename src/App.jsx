import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

export default App;

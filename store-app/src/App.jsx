import "./App.css";
import { NavBar } from "./components/index";
import { Routes, Route } from "react-router-dom";
import { Home, Store, About } from "./views/index";
import ShoppingCartProvider from "./context/ShoppingCartContext";
const App = () => {
  return (  
    <ShoppingCartProvider>
        <NavBar />
        {/* content  */}
       
        <div className="container border m-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
    </ShoppingCartProvider>
  );
};

export default App;

import NavBar from "./components/NavBar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Favorites from "./pages/favorites/Favorites";
import Details from "./pages/details/Details";
function App() {
  return (
    <>
      <div>
        <div className="min-h-screen bg-slate-200 text-black text-lg">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            {/* :id will be use in useParams.id in details.jsx*/}
            <Route path="/recipe-item/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

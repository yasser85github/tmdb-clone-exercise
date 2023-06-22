import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import Header from "./components/Header";

//import pages
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

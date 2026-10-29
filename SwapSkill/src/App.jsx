import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function Home() {
return ( <h1>Welcome to Skillora</h1>
);
}

function App() {
return ( <BrowserRouter> <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>

);
}

export default App;

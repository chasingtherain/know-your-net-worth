import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

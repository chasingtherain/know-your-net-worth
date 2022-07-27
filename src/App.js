import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FormModal from "./components/modal/FormModal";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/modal' element={<FormModal/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

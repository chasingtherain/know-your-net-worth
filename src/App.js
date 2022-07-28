import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AssetForm from "./components/form/AssetForm";
import Header from "./components/Header";
import FormModal from "./components/modal/FormModal";
import HomePage from "./pages/HomePage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AssetPage from "./pages/AssetPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/modal' element={<FormModal/>}/>
        <Route path='/updateitem' element={<AssetPage/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;

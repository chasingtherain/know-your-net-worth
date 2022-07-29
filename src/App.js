import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AssetForm from "./components/form/AssetForm";
import Header from "./components/Header";
import FormModal from "./components/modal/FormModal";
import HomePage from "./pages/HomePage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AssetPage from "./pages/AssetPage";
import DeleteModal from "./components/modal/DeleteModal";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<SigninPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/modal' element={<FormModal/>}/>
        <Route path='/updateitem' element={<AssetPage/>}/>
        <Route path='/delete' element={<DeleteModal/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;

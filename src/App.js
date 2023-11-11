import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Main from "./component/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./component/pages/FirstPage";
import SecondPage from "./component/pages/SecondPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/manageConsumers" element={<SecondPage/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

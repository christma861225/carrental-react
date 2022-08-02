import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import FTP from "./pages/FTP";
import FTPEDIT from "./pages/FTPEDIT";
import ErrorReporting from "./pages/ErrorReporting";
import Userprofile from "./pages/Userprofile";
import Useredit from "./pages/Useredit";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/ftp" element={<FTP />} />
          <Route path="/ftp-edit" element={<FTPEDIT />} />
          <Route path="/error" element={<ErrorReporting />} />
          <Route path="/user-profile" element={<Userprofile />} />
          <Route path="/user-edit" element={<Useredit />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

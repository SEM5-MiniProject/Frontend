import "./App.css";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import { useEffect } from "react";
import Exploree from "./components/Explore/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./components/addProductform/Form";
import SellerAdd from "./components/addProductform/SellerAdd";

function App() {
  useEffect(() => {
    document.title = "Meal Diaries - Food Delivery Simplified";
  }, []);

  return (
   
    <ThemeProvider theme={theme}>

      <Router>
        <Routes>
          <Route path="/" element={
            <Home/>
          } />
          <Route path="/Explore" element={<Exploree/>} />
          <Route path="/addproduct" element={<Form/>} />
          <Route path="/selleradd" element={<SellerAdd/>} />
          
          {/* <Route path="/offers" element={} />
          <Route path="/aboutus" element={} />
          <Route path="/contactus" element={} /> */}
        </Routes>
      </Router>
</ThemeProvider>    
  );
}

export default App;

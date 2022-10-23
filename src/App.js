import logo from "./logo.svg";
import "./App.css";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Banner from "./components/banner";
import Products from "./components/products";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import Promotions from "./components/promotions";
import SearchBox from "./components/search";
import SignForm from "./components/signform";
import { useEffect } from "react";
import LoginForm from "./components/login";
import { PromotionsContainer } from "./styles/promotions";
import Exploree from "./components/Explore/index";
import AddProFirst from "./components/AddProduct/first";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Meal Diaries";
  }, []);

  return (
    
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
          
            <Appbar/>
            {/* <AddProFirst/> */}
            {/*  */}
            <Banner />
            <Promotions />
            <SearchBox />
            <SignForm />
            <LoginForm/>
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Trending Food Items</Typography>
            </Box>
            <Products />
            <PromotionsContainer/>
           
            <br/>
            <Exploree/>
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>

      <Router>
        <Routes>
          {/* <Route path="/home" element={} /> */}
          <Route path="/Explore" element={<Exploree/>} />
          {/* <Route path="/offers" element={} />
          <Route path="/aboutus" element={} />
          <Route path="/contactus" element={} /> */}
        </Routes>
      </Router>
    
    </ThemeProvider>    
  );
}

export default App;

import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { BannerShopButton } from "../../styles/banner";
// import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function AppbarDesktop({ matches }) {
  const { setFirst } = useUIContext();
  const { setShowSearchBox } = useUIContext();

  return (<>
    <AppbarContainer>
      <AppbarHeader variant="h4">Meal Diaries</AppbarHeader>
      {/* <nav className="navbar" > */}
      <MyList type="row">
        <ListItemButton>
        <Link to="/"><ListItemText primary="Home" /></Link>
          {/* <Button href="#"><ListItemText primary="Home" /></Button> */}
        </ListItemButton>
        <ListItemButton>
          <Link to="/Explore"><ListItemText primary="Explore" /></Link>
          {/* <Button href="/Explore"><ListItemText primary="Explore" /></Button> */}
        </ListItemButton>
        <ListItemButton>
        <Link to="#"><ListItemText primary="Offers" /></Link>
          {/* <Button href="#"><ListItemText primary="Offers" /></Button> */}
        </ListItemButton>
        <ListItemButton>
        <Link to="#"><ListItemText primary="About Us" /></Link>
          {/* <Button href="#"><ListItemText primary="About Us" /></Button> */}
        </ListItemButton>
        <ListItemButton>
          <Link to="#"><ListItemText primary="Contact Us" /></Link>
          {/* <Button href="#"><ListItemText primary="Contact Us" /></Button> */}
        </ListItemButton>
      <Link to="/addproduct">
        <BannerShopButton onClick = {() => setFirst(true)} style={{fontSize:"12px", color: 'black', padding:'10px'}} color = "secondary"><center>Add Product</center></BannerShopButton>
      </Link>
        
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          {/* <AddProFirst/> */}
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      {/* </nav> */}
       <Actions matches={matches} />   
    </AppbarContainer>

</>
    
  );
}

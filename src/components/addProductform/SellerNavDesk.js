import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Slide,
  } from "@mui/material";
  import {
    AppbarContainer,
    AppbarHeader,
    MyList,
  } from "../../styles/appbar";

  import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Products from "../products";
import SellerProducts from "./S_index";
import { PromotionsContainer } from "../../styles/promotions";
import { useState } from "react";


  
  export default function SellerNavDesk({ matches }) {
    const [show, setShow] = useState(true);
    return (<>
      <AppbarContainer >
        <AppbarHeader variant="h4">Meal Diaries</AppbarHeader>
        <nav className="navbar" >
        <MyList type="row">

          <ListItemButton>
            <Link className="nav-item" to="/AddFood"><ListItemText primaryTypographyProps={{fontSize: '18px'}} primary="Add Food" /></Link>
            {/* <Button href="/Explore"><ListItemText primary="Explore" /></Button> */}
          </ListItemButton>
          <ListItemButton>
          <Link className="nav-item" to="/UpdateFood"><ListItemText primaryTypographyProps={{fontSize: '18px'}} primary="Update Food" /></Link>
            {/* <Button href="#"><ListItemText primary="Offers" /></Button> */}
          </ListItemButton>
          <ListItemButton>
          {/* <Link className="nav-item" to="#"><ListItemText primaryTypographyProps={{fontSize: '18px'}} primary="About Us" /></Link>
            {/* <Button href="#"><ListItemText primary="About Us" /></Button> */}
          </ListItemButton>
       
          <ListItemButton >
            {/* <AddProFirst/> */}
            <ListItemIcon>
              <Logout style ={{position: "absolute", right: -140, top: -5}}/>
            </ListItemIcon>
          </ListItemButton>
        </MyList>
        </nav>
       
      </AppbarContainer>
<PromotionsContainer style ={{padding: "8px 1px 10px 1px"}}><Typography  variant="h5">Added Products List</Typography></PromotionsContainer>
<br/><br/>
      <SellerProducts/>  
  </>
      
    );
  }
  
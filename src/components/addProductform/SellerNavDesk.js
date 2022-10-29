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

  import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Products from "../products";

  
  export default function SellerNavDesk({ matches }) {

    return (<>
      <AppbarContainer >
        <AppbarHeader variant="h4">Meal Diaries</AppbarHeader>
        <nav className="navbar" >
        <MyList type="row">
          <ListItemButton>
            <Link className="nav-item" to="/EditFood"><ListItemText primaryTypographyProps={{fontSize: '18px'}} primary="Edit Food" /></Link>
            {/* <Button className="nav-item" href="/"><ListItemText primary="Home" /></Button> */}
          </ListItemButton>
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

      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
            <Typography variant="h4">Added Products List</Typography>
      </Box>
      <Products/>  
  </>
      
    );
  }
  
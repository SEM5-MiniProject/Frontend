import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import LoginIcon from "@mui/icons-material/Login";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { BannerShopButton } from "../../styles/banner";
import AddProFirst from "../AddProduct/first";

export default function AppbarDesktop({ matches }) {
  const { setFirst } = useUIContext();
  const { setShowSearchBox } = useUIContext();

  return (<>
    <AppbarContainer>
      <AppbarHeader variant="h4">Meal Diaries</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Explore" />
        <ListItemText primary="Offers" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        <BannerShopButton onClick = {() => setFirst(true)} style={{fontSize:"12px", color: 'black', padding:'10px'}} color = "secondary"><center>Add Product</center></BannerShopButton>
        
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          {/* <AddProFirst/> */}
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
          </MyList>
       <Actions matches={matches} />   
    </AppbarContainer>

</>
    
  );
}

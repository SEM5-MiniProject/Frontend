import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { Add, AddAPhoto, ArrowDropUp, ArrowUpward, ArrowUpwardOutlined, ArrowUpwardRounded, ArrowUpwardTwoTone, Edit, Update, UpdateRounded } from "@material-ui/icons";

import { Logout, PushPin } from "@mui/icons-material";
import SellerProducts from "./S_index";

export default function SellerNavMobile({ matches }) {
  
  return (<>
    <AppbarContainer>
      <IconButton >
        <Logout />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        Meal Diaries
      </AppbarHeader>
      <IconButton><Add/></IconButton>
     
      <IconButton >
        <ArrowUpward/>
      </IconButton>
     
    </AppbarContainer>
    <SellerProducts/>
</>
  );
}

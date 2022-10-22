import { Fullscreen } from "@mui/icons-material";
import { Button, Dialog, DialogTitle, Slide, TextField } from "@mui/material";
import DialogContent from "@mui/material/node/DialogContent/DialogContent";

import { Box, styled } from "@mui/system";
import { useUIContext } from "../../context/ui";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LoginForm from "../login";
import { 
    Divider
  } from "@mui/material" 
import {
    IconButton,  
  } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Colors, salmon } from "../../styles/theme";
import { BannerShopButton } from "../../styles/banner";



const SignformContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: Colors.secondary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
    opacity: 1,
  }));
  
  export default function SignForm() {
    const { showSignForm, setSignForm } = useUIContext();
    const { setLoginForm } = useUIContext();
   
  return (
    <Slide direction="down" in={showSignForm} timeout={500}>
        <SignformContainer>
        <center>
           <TextField required label = "Name" color = "secondary" placeholder= "Name" sx={{position: "absolute", bottom: 420, right:850, backgroundColor : 'orchid'}}></TextField>    
            <TextField required label = "Email" placeholder= "Email" sx={{position: "absolute", bottom: 300, right:850, backgroundColor : 'orchid'}}></TextField>
            <TextField placeholder = "password" id="Password" variant="outlined" required label="Password" sx={{position: "absolute", bottom: 360, right:850, backgroundColor : 'orchid'}} />
            
            <TextField required label = "Phone No." color = "secondary" placeholder= "Phone No." sx={{position: "absolute", bottom: 420, right:520, backgroundColor : 'orchid'}}></TextField>
            <TextField required label = "House No." placeholder= "House No." sx={{position: "absolute", bottom: 300, right:520, backgroundColor : 'orchid'}}></TextField>
            <TextField placeholder = "Sector" id="Sector" variant="outlined" required label="Sector" sx={{position: "absolute", bottom: 360, right:520, backgroundColor : 'orchid'}} />
            
            <TextField required label = "City" color = "secondary" placeholder= "City" sx={{position: "absolute", bottom: 420, right:190, backgroundColor : 'orchid'}}></TextField>
            <TextField required label = "State" placeholder= "State" sx={{position: "absolute", bottom: 300, right:190, backgroundColor : 'orchid'}}></TextField>
            <TextField placeholder = "Pincode" id="Pincode" variant="outlined" required label="Pincode" sx={{position: "absolute", bottom: 360, right:190, backgroundColor : 'orchid'}} />
           
            <BannerShopButton color = "primary" sx={{position: "absolute", bottom: 190, right:525}} style={{fontSize:"10px"}}>Sign up</BannerShopButton>
            <BannerShopButton  
            onClick={() => setLoginForm(true) & setSignForm(false) } 
            color = "primary" sx={{position: "absolute", bottom: 190, right:670, backgroundColor: 'lawngreen'}} style={{fontSize:"10px", color: 'black'}} >Login</BannerShopButton>
            
            <IconButton
                  onClick={() => setSignForm(false) }
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon sx={{ fontSize: "4rem" }} color="primary" />
        </IconButton>
        </center>
        </SignformContainer>
       
        
         </Slide>
  );
  }
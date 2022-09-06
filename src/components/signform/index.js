import { Fullscreen } from "@mui/icons-material";
import { Button, Dialog, DialogTitle, Slide, TextField } from "@mui/material";
import DialogContent from "@mui/material/node/DialogContent/DialogContent";
import { useUIContext } from "../../context/ui";
import { Box, styled } from "@mui/system";

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
    opacity: 0.9,
  }));
  
  export default function SignForm() {
    const { showSignForm, setSignForm } = useUIContext();
    const MiddleDivider = styled((props) => (
        <Divider variant="middle" {...props} />
      ))``;
  
  return (
    <Slide direction="down" in={showSignForm} timeout={500}>
        <SignformContainer>
           <TextField required label = "Name" color = "secondary" placeholder= "Name" sx={{position: "absolute", bottom: 420, right:520}}></TextField>
            
            <TextField required label = "Email" placeholder= "Email" sx={{position: "absolute", bottom: 300, right:520}}></TextField>
            <TextField placeholder = "password" id="Password" variant="outlined" required label="Password" sx={{position: "absolute", bottom: 360, right:520}} />
            <BannerShopButton color = "primary" sx={{position: "absolute", bottom: 190, right:525}} style={{fontSize:"10px"}}>Sign up</BannerShopButton>
            <BannerShopButton color = "primary" sx={{position: "absolute", bottom: 190, right:670}} style={{fontSize:"10px"}}>Login</BannerShopButton>
            
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
        </SignformContainer>
       
        
         </Slide>
  );
  }
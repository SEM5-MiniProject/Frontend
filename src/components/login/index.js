import { Fullscreen } from "@mui/icons-material";
import { Button, Dialog, DialogTitle, Slide, TextField } from "@mui/material";
import DialogContent from "@mui/material/node/DialogContent/DialogContent";
import { useUIContext } from "../../context/ui";
import { Box, styled } from "@mui/system";

import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { 
    Divider
  } from "@mui/material" 
import {
    IconButton,  
  } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Colors, salmon } from "../../styles/theme";
import { BannerShopButton } from "../../styles/banner";



const LoginformContainer = styled(Box)(({ theme }) => ({
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
  
  export default function LoginForm() {
    const { showLoginForm, setLoginForm } = useUIContext();
    // const MiddleDivider = styled((props) => (
    //     <Divider variant="middle" {...props} />
    //   ))``;
  
  return (
    <Slide direction="down" in={showLoginForm} timeout={500}>
        <LoginformContainer>

          <TextField required label = "Name" placeholder= "Name" sx={{position: "absolute", bottom: 300, right:520, backgroundColor : 'orchid'}}></TextField>
            <TextField placeholder = "Email" id="Email" variant="outlined" required label="Email" sx={{position: "absolute", bottom: 360, right:520, backgroundColor : 'orchid'}} />
        
          
            <BannerShopButton color = "primary" sx={{position: "absolute", bottom: 190, right:670, backgroundColor: 'lawngreen'}} style={{fontSize:"10px", color: 'black'}}>Login</BannerShopButton>
            
            <IconButton
                  onClick={() => setLoginForm(false) }
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon sx={{ fontSize: "4rem" }} color="primary" />
        </IconButton>
        </LoginformContainer>
       
        
         </Slide>
  );
  }
import { Box, styled } from "@mui/system";
import { useUIContext } from "../../context/ui";
import { Slide, TextField } from "@mui/material";
import { IconButton } from "@material-ui/core";
import theme from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { BannerShopButton } from "../../styles/banner";

const SliderAP = styled(Box)(({ theme }) => ({
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
  
  export default function AddProFirst() {
    const { showFirst, setFirst } = useUIContext();
  
  
  return (
    <Slide direction="down" in={showFirst} timeout={100}>
        <SliderAP>
<center>
          <TextField required label = "Adhaar No." placeholder= "Restaurant Name" sx={{position: "absolute", bottom: 300, right:520, backgroundColor : 'orchid'}}></TextField>
            <TextField placeholder = "Owner Name" id="o_name" variant="outlined" required label="Owner Name" sx={{position: "absolute", bottom: 360, right:520, backgroundColor : 'orchid'}} />
            <TextField placeholder = "Restaurant Name" id="adhaar" variant="outlined" required label="Adhaar" sx={{position: "absolute", bottom: 420, right:520, backgroundColor : 'orchid'}} />
        
          
            <BannerShopButton color = "primary" sx={{position: "absolute", bottom: 190, right:670, backgroundColor: 'lawngreen'}} style={{fontSize:"10px", color: 'black'}}>Proceed... </BannerShopButton>
            
            <IconButton
                  onClick={() => setFirst(false) }
          sx={{
            position: "absolute",
            top: 10,
            right: 50,
          }}
        >
          <CloseIcon sx={{ fontSize: "4rem"  }} color="primary" />
        </IconButton>
        </center>
        </SliderAP>
       
        
         </Slide>
  );
  }
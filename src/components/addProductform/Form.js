import { Box, styled } from '@mui/system';

import { TextField } from '@mui/material';
import  React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddAPhoto } from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import Appbar from '../appbar';
import { useUIContext } from '../../context/ui';
import { Link } from 'react-router-dom';
export const Colors = {
  primary: "#5f2c3e",
  secondary: "#d1adcc",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  orchid: "#da70d6",
  lawngreen : "#7cfc00",
  ///////////////
  // Grays
  ///////////////
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

const BackG = styled(Box)(({ theme }) => ({
  position: "absolute",
  
  top: 80,
  left: 190,
  width: "70%",
  height: "80%",
  background: Colors.secondary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99999,
  opacity: 1,
  boxShadow: '1px 2px 9px #000000',
}));
const list = [
  { label: "Lunch", value: 1 },
  { label: "Dinner", value: 2 },
  { label: "Breakfast", value: 3 },
  { label: "Snacks", value: 4 },
  
];
export default function Form(){
  const { showSellerAdd ,setSellerAdd } = useUIContext();
  return (<>
  <Appbar/>
  
      
      <center><BackG in={showSellerAdd}>
      <h5 style = { {color: Colors.primary, fontFamily:  "cursive", position : "absolute", bottom: 470 }} > Provide the details</h5>
        <TextField required label = "Name" placeholder= "Enter Name of Product" sx={{position: "absolute", bottom: 400, right:500, backgroundColor : 'orchid'}}></TextField>
      <TextField required label = "Price" placeholder= "Enter the Price" sx={{position: "absolute", bottom: 400, right:190, backgroundColor : 'orchid'}}></TextField>
      <TextField required label = "Description" placeholder= "Enter the Desription" sx={{position: "absolute", bottom: 311, right:500, backgroundColor : 'orchid'}}></TextField>
      <TextField required label = "Belongs To" placeholder= "Enter Belongs to" sx={{position: "absolute", bottom: 311, right:190, backgroundColor : 'orchid'}}></TextField>
      <label style = {{ position : "absolute" ,top: 245, right: 520}}><b>Select Category: </b></label>
      <div className="container" >
    <div className="row">
      <br></br>
      <div className="col-md-5"></div>{/*position of field */}
       <div className="col-md-3" >{/*width of field */}
        <Select options={ list } />
      </div>
      <div className="col-md-5"></div>{/*position of field */}
    </div>
  </div>

  <label style = {{ position : "absolute" ,top: 305, right: 520}}><b>  Upload Image: </b></label>


  <AddAPhoto style = {{ position : "absolute" ,top: 305, right: 490}}/>

  <input style = {{ position : "absolute" ,top: 364, right: 490}} type="radio" value="veg" name="isveg" /> 
  <label style = {{ position : "absolute" ,top: 357, right: 506}}><b>  IsVeg </b></label>

  
  <input style = {{ position : "absolute" ,top: 364, right: 300}} type="radio" value="isavail" name="isavailable" /> 
  <label style = {{ position : "absolute" ,top: 357, right: 315}}><b>  IsAvailable </b></label>
{/* <Button style = {{ color: 'white', backgroundColor : '#590059', position : "absolute" ,top: 427, right: 390}} 
onClick = {() => window.open("http://localhost:3000/SellerAdd")} >Proceed...</Button> */}

<Link className="nav-item addbutton" to="/SellerAdd">
        <Button onClick = {() => setSellerAdd(true)} style = {{ color: 'white', backgroundColor : '#590059', position : "absolute" ,top: 427, right: 390}}  ><center>Proceed...</center></Button>
      </Link>
        

      </BackG></center>
      </>
   
  );
}
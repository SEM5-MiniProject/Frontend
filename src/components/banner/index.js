import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import setSignForm from "../signform";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";
import SignForm from "../signform";
import { useUIContext } from "../../context/ui";
export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { setSignForm } = useUIContext();

  return (
    <BannerContainer >
      <BannerImage src="/images/banner/foodiee.png" />
      <BannerContent>
        <Typography variant="h5">Huge variety of foods available at a tap of your finger</Typography>
        <BannerTitle variant="body1">Meal Diaries</BannerTitle>

        <BannerDescription variant="subtitle1">
          We at Meal Diaries are committed to provide the best quality of food at a pocket-friendly cost and reduced time.
          We want our consumers to eat and live a healthy life.
        </BannerDescription>

        <BannerShopButton color="primary" onClick={() => setSignForm(true)}>Sign up</BannerShopButton>
      </BannerContent>
    </BannerContainer>
    
    
  );
}

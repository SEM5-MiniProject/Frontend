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
        <Typography variant="h6">Huge variety in foods is here</Typography>
        <BannerTitle variant="h2">
          Meal Diaries
        </BannerTitle>

        <BannerDescription variant="subtitle">
          We here at Meal Diaries provide the best quality of foods at efficient cost and time.
          We want our consumers to eat and live a healthier life.
        </BannerDescription>

        <BannerShopButton color="primary" onClick={() => setSignForm(true)}>Sign up</BannerShopButton>
      </BannerContent>
    </BannerContainer>
    
    
  );
}

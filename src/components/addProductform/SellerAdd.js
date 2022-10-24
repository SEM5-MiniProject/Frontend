
import SellerNavDesk from "./SellerNavDesk";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import SellerNavMobile from "./SellerNavMobile";

export default function SellerAdd() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {matches ? <SellerNavMobile matches={matches}/> : <SellerNavDesk matches={matches}/>}
    </>
  );
}
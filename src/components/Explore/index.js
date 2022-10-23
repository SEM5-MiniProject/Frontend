import { useTheme } from "@mui/material/styles";
import { Container, Typography, Grid } from "@mui/material";
import { explor } from "./data";


import { useMediaQuery } from "@mui/material";
import SingleExplore from "./SingleExplore";
import Appbar from "../appbar";

export default function Exploree() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const renderExplore = explor.map(exp => (
        <Grid item key={exp.id} display="flex" flexDirection={'column'} alignItems="center">
            <SingleExplore exp={exp} matches={matches} />
        </Grid>
    ));
    // const renderExplore = explor.map((product) => (
    //     <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
    //       {matches ? (
    //         <SingleProduct product={product} matches={matches} />
    //       ) : (
    //         <SingleProductDesktop product={product} matches={matches} />
    //       )}
    //     </Grid>
    //   ));
    return (
        <>
        <Appbar />
        <Typography textAlign={"center"} variant="h4">What would you like to have ?</Typography>
            <br />
            <Container>
                <Grid
                    container
                    spacing={{ xs: 2, md: 9 }}
                    justifyContent="center"
                    sx={{ margin: `20px 4px 20px 4px` }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {renderExplore}
                </Grid>
            </Container></>
        //     {/* <br></br>
        //     <Container>
        //     <Grid        
        //       container
        //       spacing={{ xs: 2, md: 3 }}
        //       justifyContent="center"
        //       sx={{ margin: `20px 4px 10px 4px` }}
        //       columns={{ xs: 4, sm: 8, md: 12 }}
        //     >
        //       {renderExplore}
        //     </Grid>
        //   </Container></> */}
    )
}


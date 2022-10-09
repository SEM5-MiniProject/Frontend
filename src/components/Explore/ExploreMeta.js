import { ExploreMetaWrapper } from "../../styles/Explore";
import { Typography } from "@mui/material";
export default function ExploreMeta({exp,matches}){

    return (
        <ExploreMetaWrapper>
            <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
          {exp.name}
        </Typography>
        
        </ExploreMetaWrapper>
    )
}
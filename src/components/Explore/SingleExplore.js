import { ExploreBox, ExploreImage } from "../../styles/Explore";
import { BannerShopButton } from "../../styles/banner";
import { useUIContext } from "../../context/ui";
import ExploreMeta from "./ExploreMeta";
export default function SingleExplore({exp,matches}){
   
    return (
        <ExploreBox>
            <ExploreImage src = {exp.image}/>
            <ExploreMeta exp = {exp} matches = {matches} />
            
        </ExploreBox>
    )
}
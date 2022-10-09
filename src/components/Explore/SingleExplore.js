import { ExploreBox, ExploreImage } from "../../styles/Explore";

import ExploreMeta from "./ExploreMeta";
export default function SingleExplore({exp,matches}){

    return (
        <ExploreBox>
            <ExploreImage src = {exp.image}/>
            <ExploreMeta exp = {exp} matches = {matches} />
        </ExploreBox>
    )
}
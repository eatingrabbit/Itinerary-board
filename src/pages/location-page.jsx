import { useParams } from "react-router-dom"
import styled from "styled-components";
import Header from "../components/header";
import PostItem from "../components/post-item";
import SearchOptionSettingSection from "../components/search-option-setting-section";


const LocationPage=()=>{
    const {locationId} = useParams();
    return (
        <div>
            <Header />
            <Inner>
                <SearchOptionSettingSection locationId={locationId} />
                <PostItem></PostItem>
                <PostItem></PostItem>
                <PostItem></PostItem>
                <PostItem></PostItem>
                <PostItem></PostItem>
            </Inner>
        </div>
    )
}

const Inner=styled.div`
    margin: 0 auto;
    // background-color: #aaa;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // @media only screen and (min-width:1200px){
    //     .inner{
    //         max-width: 1200px;
    //     }
    // }
`;

export default LocationPage;
import styled from "styled-components";
import SouthKoreaButtonMap from "../components/south-korea-button-map";
import Header from "../components/header";
import TestMap from "../components/test-map";
import Submap from "../components/submap";
import { useState } from "react";
import { selectLocation } from "../components/search-option-setting-section";
import { Link } from "react-router-dom";
import { SelectedTagListContext } from "../context/selected-tag-list-context";
import { useContext } from "react";

const MainPage=styled(({className})=>{
    const [selectedProvince, setSelectedProvince]=useState("");
    return(
        <div className={className}>
            <Header />
            {/* <BackgroundImage /> */}
            <FlexBox>
                {selectedProvince=="" ? 
                    <SouthKoreaButtonMap setSelectedProvince={setSelectedProvince}/>
                :
                    <Submap setSelectedProvince={setSelectedProvince} selectedProvince={selectedProvince}/>
                }
                {/* <TestMap /> */}
                
                <div style={{"marginLeft": "50px"}}>
                    <ShareYourItineraryText>
                        쉽고 빠르게 여행을 계획하세요.
                    </ShareYourItineraryText>
                    <WhatIsYourTravelDestinationText>
                        당신이 여행할 장소는...
                    </WhatIsYourTravelDestinationText>
                    <LocationText>
                        {selectLocation(selectedProvince)}
                    </LocationText>
                    {selectedProvince=="" ? <SelectedTagText>도를 선택해 주세요</SelectedTagText> : <SelectedTagTextList />}
                    <WhatIsYourTravelDestinationText>
                        당신의 여행 일정은...
                        <TravelDaysInput></TravelDaysInput>
                        일
                    </WhatIsYourTravelDestinationText>
                    <GoToNextButton selectedProvince={selectedProvince}/>
                </div>
                
            </FlexBox>
        </div>
    )
    
})`
    height: 100vh;
    overflow: hidden;
`

const GoToNextButton=styled(({className, selectedProvince})=>{
    if(selectedProvince==""){
        return <span className={className}>click to go to next page</span>
    }
    else return <Link to={`/${selectedProvince}`}
        className={className}
    >
        click to go to next page
    </Link>
})`
    ${(props)=>{
        if(props.selectedProvince=="")
            return "background-color: #aaa;"
        else 
            return "background-color: green; cursor: pointer;"
    }}
    color: white;

    width: 3rem;
    border-radius: 30px;
    padding: 10px 20px;
    margin-top: 20px;
    text-align: center;
    
    // position: relative;
    // margin-left: auto; 
    text-decoration: unset;
`;



const BackgroundImage=styled.div`
    background-image: url("https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/VuM2Vf8AZVsvwSjoDOY4W8nVGCU.jpg");
    // background-color: green;
    height: 100vh;
    background-position: center;
    background-size: cover;
    opacity: 0.2;
    position: absolute;
    width: 100%;
    height: 85%;
    z-index: -1;
`

const ShareYourItineraryText=styled.div`
    font-size: 2rem;
    font-weight: 600;
    text-align: left;
    margin: 0 100px 150px 0;
`

const WhatIsYourTravelDestinationText=styled.div`
    font-size: 1.8rem;
    font-weight: 600;
    text-align: left;
    margin: 60px 20px 20px 0;
`;

const LocationText=styled.div`
    font-size: 5rem;
    font-weight: 700;
    text-align: left;
    margin: 0 100px 20px 0;
`
const SelectedTagTextList=styled(({className})=>{
    const {selectedTagList} =useContext(SelectedTagListContext);
    return (<div className={className}>
        {selectedTagList.length==0 ? 
            <SelectedTagText>전체</SelectedTagText>
        : 
            selectedTagList.map(
                (selectedTag)=>{return <SelectedTagText>{selectedTag}</SelectedTagText>}
            )
        }
        
    </div>)
})`
    display: flex;
`;

const SelectedTagText=styled.div`
    font-size: 1.5rem;
    margin-right: 1rem;
    font-weight: 600;
    color: #5f6caf;
`

const TravelDaysInput=styled(({className})=>{
    return <input className={className} type="number" placeholder="1"></input>
    }
)`
    margin-left: 20px;
    border: 0;
    // border-bottom: 2px solid black;
    width: 4rem;
    // height: 2.2rem;
    font-size: 3rem;
    text-align: right;
    background-color: transparent;
`


const FlexBox=styled.div`
    margin: 40px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default MainPage;
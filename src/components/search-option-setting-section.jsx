import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SelectedTagListContext } from "../context/selected-tag-list-context";
import { useContext } from "react";

const SearchOptionSettingSection=styled(({className, locationId})=>{
    return <div className={className}>
        <LocationNameText>
            {selectLocation(locationId)}
        </LocationNameText>
        <OptionRowList />
    </div>
})`
    // background-color: #5f6caf;
    // color: white;
    
    width: 100%;
    height: 300px;
    padding-top: 50px;
    padding-bottom: 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
`;

const LocationNameText=styled.div`
    font-size: 4rem;
    font-weight: 600;
    margin: 0 auto;
`;

const OptionRowList=styled(({className})=>{
    return <div className={className}>
        <TagOptionRow />
        <TravelDaysOptionRow />
        <SearchButton />
    </div>
})`
    width: 70%;
`;

const OptionNameText=styled.div`
    width: 5rem;
    border-right: 2px solid #ccc;
    margin-right: 10px;
`;

const TagOptionRow=styled(({className})=>{
    const {selectedTagList} =useContext(SelectedTagListContext);
    return <div className={className}>
        <OptionNameText>시/도</OptionNameText>
        {
            selectedTagList.length == 0 ? 
                <TagItem>전체</TagItem>
            : selectedTagList.map(
                (selectedTag)=>{return <TagItem>#{selectedTag}</TagItem>}
            )
        }
        <TagItem>+</TagItem>
    </div>
})`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const TagItem=styled.div`
    background-color: #F8F9FA;
    color: #5f6caf;
    font-weight: 600;
    
    // height: 10px;
    // width: 3rem;
    border-radius: 30px;
    padding: 4px 10px;
    margin: 0 3px;
    text-align: center;
`;

const TravelDaysOptionRow=styled(({className})=>{
    return <div className={className}>
        <OptionNameText>여행 일정</OptionNameText>
        <TravelDaysInput />일
    </div>
})`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const TravelDaysInput=styled(({className})=>{
    return <input className={className} type="number" placeholder="1"></input>
    }
)`
    border: 0;
    width: 2rem;
    font-size: 1.5rem;
`;

const SearchButton=styled(({className})=>{
    function onClick(){
        console.log("조회하기")
    }
    return <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        조회하기
    </div>
})`
    width: 8rem;
    height: 2rem;
    background-color: #5f6caf;
    color: white;
    font-size: 1rem;
    text-align: center;
    line-height: 2rem;
    border-radius: 30px;
    margin-top: 20px;
    &:hover{
        cursor: pointer;
    }
`;



export function selectLocation(locationId){
    switch(locationId){
        case "busan":
            return "부산";
        case "daegu":
            return "대구";
        case "daejeon":
            return "대전";
        case "gangwon":
            return "강원도";
        case "gwangju":
            return "광주";
        case "gyeonggi":
            return "경기도";
        case "incheon":
            return "인천";
        case "jeju":
            return "제주도";
        case "north-chungcheong":
            return "충청북도";
        case "north-gyeongsang":
            return "경상북도";
        case "north-jeolla":
            return "전라북도";
        case "sejong":
            return "세종";
        case "seoul":
            return "서울";
        case "south-chungcheong":
            return "충청남도";
        case "south-gyeongsang":
            return "경상남도";
        case "south-jeolla":
            return "전라남도";
        case "ulsan":
            return "울산";
        default:
            return "???";
    }
}

export default SearchOptionSettingSection;
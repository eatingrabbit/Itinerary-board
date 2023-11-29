import styled from "styled-components";
import * as submaps from "./submap-pieces";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Submap=styled(({className, setSelectedProvince, selectedProvince})=>{
    const MapProvider=()=>{
        switch(selectedProvince){
            case "jeju":
                return <submaps.JejudoSubmap />
            case "south-gyeongsang":
                return <submaps.SouthGyeongsangSubmap />
            case "north-gyeongsang":
                return <submaps.NorthGyeongsangSubmap />
            case "south-jeolla":
                return <submaps.SouthJeollaSubmap />
            case "north-jeolla":
                return <submaps.NorthJeollaSubmap />
            case "south-chungcheong":
                return <submaps.SouthChungcheongSubmap />
            case "north-chungcheong":
                return <submaps.NorthChungcheongSubmap />
            case "gangwon":
                return <submaps.GangwonSubmap />
            case "gyeonggi":
                return <submaps.GyeonggiSubmap />
            default:
                return <div style={{"width" : "597px", "height": "723px"}}>there is no submap!</div>
        }
    }
    
    return <div className={className}>
        <GoToBackButton setSelectedProvince={setSelectedProvince}/>
        {MapProvider()}
    </div>
})`
    width: 35%;
    height: 100%;
    position: relative;
`;

const GoToBackButton=styled(({className, setSelectedProvince})=>{
    function onClick(){
        setSelectedProvince(0);
    }
    return <div 
        onClick={onClick}
        className={className}
    >
        <FontAwesomeIcon icon={faXmark} /> 
    </div>
})`
    position: absolute;
    top: 50px;
    right: 50px;
    
    // width: 40px;
    height: 40px;
    box-sizing: border-box;
    // background-color: black;
    // color: white;
    
    color: black;
    
    border-radius: 30px;
    // padding: 0 10px;
    line-height: 40px;  
    text-align: center;
    cursor: pointer;
    font-size: 2rem;
`;
export default Submap
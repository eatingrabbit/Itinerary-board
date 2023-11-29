import styled from "styled-components";
import { SelectedTagListContext } from "../../context/selected-tag-list-context";
import { useState, useContext } from "react";

export const StyledG=styled.g`
    fill: #aaa;
    stroke: white;
    stroke-width: 0.2;
`;

export const StyledPath=styled(({className, id, d})=>{
    const {selectedTagList, setSelectedTagList} = useContext(SelectedTagListContext);
    const [isSelected, setIsSelected]=useState(false);
    function onClick(){
        if(selectedTagList.includes(id)){
            selectedTagList.splice(selectedTagList.indexOf(id), 1)
            setSelectedTagList([...selectedTagList])
            setIsSelected(false);
        }
        else{
            setSelectedTagList([...selectedTagList, id])
            setIsSelected(true);
        }
        // console.log(selectedTagList);
    }
    return <g className={className} onClick={onClick}>
        <Path id={id} d={d} isSelected={isSelected}/>
    </g>
    
})``;

export const Path=styled.path`
    fill: ${(props)=>{
        if(props.isSelected==true) return "#5f6caf";
        else return "#aaa";
    }};
    stroke: white;
    stroke-width: 0.2;
    &:hover{
        // transform: scale(1.1);
        // transform-origin: 50% 50%;
        // stroke: black;
        // stroke-width: 1;
        fill: #5f6caf;
        cursor: pointer;
    }
`;

export const StyledPolygon=styled(({className, id, points})=>{
    const {selectedTagList, setSelectedTagList} = useContext(SelectedTagListContext);
    const [isSelected, setIsSelected]=useState(false);
    function onClick(){
        if(selectedTagList.includes(id)){
            selectedTagList.splice(selectedTagList.indexOf(id), 1)
            setSelectedTagList([...selectedTagList])
            setIsSelected(false);
        }
        else{
            setSelectedTagList([...selectedTagList, id])
            setIsSelected(true);
        }
        // console.log(selectedTagList);
    }
    return <g className={className} onClick={onClick}>
        <Polygon id={id} points={points} isSelected={isSelected}/>
    </g>
    
})``;

export const Polygon=styled.polygon`
    fill: ${(props)=>{
        if(props.isSelected==true) return "#5f6caf";
        else return "#aaa";
    }};
    stroke: white;
    stroke-width: 0.2;
    &:hover{
        // transform: scale(1.1);
        // transform-origin: 50% 50%;
        // stroke: black;
        // stroke-width: 1;
        fill: #5f6caf;
        cursor: pointer;
    }
`
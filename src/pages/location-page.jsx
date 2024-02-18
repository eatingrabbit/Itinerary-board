import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import PostItem from "../components/post-item";
import SearchOptionSettingSection from "../components/search-option-setting-section";
import {PostListInner} from "../components/inner";
import axios from "axios";

const LocationPage=()=>{
    const {locationId} = useParams();
    const [postList, setPostList] = useState([]);
    
    useEffect(()=>{
        axios.get(`/post-search?page=1`)
        .then((result)=>{
            console.log(result.data);
            setPostList([...result.data.postList])
        })
        .catch((e)=>{
            console.log(e)
        })
        .finally(()=>{
            
        });
    }, [])
    
    return (
        <div>
            <Header />
            <PostListInner>
                <SearchOptionSettingSection locationId={locationId} />
                {
                    postList.map(
                        (postInfo)=><PostItem postInfo={postInfo}/>
                    )
                }
            </PostListInner>
        </div>
    )
}

export default LocationPage;
import { useParams } from "react-router-dom"
import styled from "styled-components";
import Header from "../components/header";
import PostItem from "../components/post-item";
import SearchOptionSettingSection from "../components/search-option-setting-section";
import {PostListInner} from "../components/inner";

const BookmarkPage=()=>{
    
    return (
        <div>
            <Header />
            <PostListInner>
                <BookmarkHead>북마크한 페이지</BookmarkHead>
                {
                    [].map(
                        (postInfo)=><PostItem postInfo={postInfo}/>
                    )
                }
            </PostListInner>
        </div>
    )
}

const BookmarkHead = styled.div`
    width: 100%;
    height: 100px;
    padding-top: 50px;
    padding-bottom: 30px;
    border-bottom: 1px solid #eee;
    font-size: 2.8rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`

export default BookmarkPage;
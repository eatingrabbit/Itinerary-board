import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import dummyPostInfo from "./dummyPostInfo";
import BookmarkButton from "./bookmark-button";
import tagIdTotagName from "../policies/tagIdToTagName";

const PostItem=styled(({className, postInfo})=>{
    return <div className={className}>
        <PostContainer>
            <Column>
                <PostTitle postId={postInfo["postId"]}>{postInfo["postTitle"]}</PostTitle>
                <Row>
                    <PostUserName>{postInfo["writerUserName"]}</PostUserName>
                    <Divider />
                    <PostDate>{postInfo["postDate"]}</PostDate>
                </Row>
                <PostContent postId={postInfo["postId"]}>
                {postInfo["postContent"]}
                </PostContent>
            </Column>
            <PostMetaDataRow>
                <Row>
                    <PostTravelDays>
                        {postInfo["postTripDays"]-1 != 0 && `${postInfo["postTripDays"]-1}박`}
                        {postInfo["postTripDays"]}일
                    </PostTravelDays>
                    <TagOptionRow tagList = {tagIdTotagName(postInfo["tagIdList"])}/>
                </Row>
                <BookmarkButton isBookmarked={postInfo["bookmared"]}/>
            </PostMetaDataRow>
        </PostContainer>
        <PostThumbnail postId={postInfo["postId"]} src="https://fun-coding.org/style/images/art/BeginCodingMainSize.jpg" />
    </div>
})`
    // background-color: green;
    height: 200px;
    padding-bottom: 20px;
    border-bottom: 2px solid #eee;
    // border-radius: 20px;
    margin: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`

const Column = styled.div``

const PostThumbnail=styled(({className, postId, src})=>{
    return <Link to={`/post/${postId}`}>
        <img src={src} className={className}/>
    </Link>
})`
    width: 250px;
    height: 200px;
    border-radius: 20px;
`;

const PostContainer=styled.div`
    width: 600px;
    height: 100%;
    box-sizing: border-box;
    // padding: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PostTitle=styled(({className, postId, children})=>{
    return <Link to={`/post/${postId}`} className={className}>
        <div>{children}</div>
    </Link>
})`
    font-size: 1.8rem;
    font-weight: 600;
    text-decoration: unset;
    color: black;
    &:hover{
        text-decoration: underline;
    }
    
    &>*{
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

const PostTravelDays=styled.div`
    width: 4rem;
    font-weight: 600;
    // color: #5f6caf;
    margin-right: 1rem;
`;

const TagOptionRow=styled(({className, tagList})=>{
    // const tagList = ["안동시", "의성군"];
    return <div className={className}>
        {tagList.map(
            (selectedTag)=>{return <TagItem>#{selectedTag}</TagItem>}
        )}
    </div>
})`
    // width: 100%;
    display: flex;
    align-items: center;
`;

const TagItem=styled.div`
    background-color: #F8F9FA;
    color: #5f6caf;
    font-weight: 600;
    
    border-radius: 30px;
    padding: 4px 10px;
    margin: 0 3px;
    text-align: center;
`;

const PostContent=styled(({className, postId, children})=>{
    return <Link to={`/post/${postId}`} className={className}>
        <div>{children}</div>
    </Link>
})`
    width: 35rem;
    color: #888;
    line-height: 1.5rem;
    text-decoration: unset;
    &>*{
        margin-top: 20px;
        margin-bottom: 10px;
    }
    
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    
   display: -webkit-box;
   -webkit-line-clamp: 2; // 원하는 라인수
   -webkit-box-orient: vertical
`;

const PostMetaDataRow=styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const PostUserName = styled.div`
    font-weight: 500;
    // padding-right: 1rem;
`

const Divider=styled(({className})=> <div className={className}>|</div>)`
    color: #ccc;
    margin: 0 5px;
`
const PostDate=styled.div`
    color: #888;
`;

export default PostItem;
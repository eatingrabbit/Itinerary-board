import { useParams } from "react-router-dom"
import Header from "../components/header";
import {PostInner} from "../components/inner";
import { useEffect, useState } from "react";
import dummyPostInfo from "../components/dummyPostInfo";
import styled from "styled-components";
import BookmarkButton from "../components/bookmark-button";
import axios from "axios";
import tagIdToTagName from "../policies/tagIdToTagName";

const PostPage=()=>{
    const {postId} = useParams();
    const [postInfo, setPostInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        axios.get(`/post-read?postId=${postId}`)
        .then((result)=>{
            console.log(result.data);
            setPostInfo({...result.data})
            setLoading(false)
        })
        .catch((e)=>{
            console.log(e)
        })
        .finally(()=>{
            
        });
    }, [])
    
    if (loading){
        return <div>loading...</div>
    }
    
    const PostMetadata = styled(({className})=>{
        return <div className={className}>
            <Row>
                <PostUserName>{postInfo["writerUserName"]}</PostUserName>
                <Divider />
                <PostDate>{postInfo["postDate"]}</PostDate>
            </Row>
            <Space height={20}></Space>
            <PostMetaDataRow>
                <Row>
                    <PostTravelDays>
                        {postInfo["postTripDays"]-1 != 0 && `${postInfo["postTripDays"]-1}박`}
                        {postInfo["postTripDays"]}일
                    </PostTravelDays>
                    <TagOptionRow tagList={tagIdToTagName(postInfo["tagIdList"])}/>
                </Row>
                <BookmarkButton isBookmarked={postInfo["isBookmarked"]} />
            </PostMetaDataRow>
            
        </div>
    })`
        font-size: 1.1rem;
        // &>*:first-child{
        //     font-size: 1.1rem;
        // }
        // &>*:last-child{
        //     font-size: 1.2rem;
        // }
    `
    
    return (
        <>
            <Header />
            <PostInner>
                <PostThumbnail src={"https://fun-coding.org/style/images/art/BeginCodingMainSize.jpg"} />
                {/* <PostThumbnailBackground src={"https://fun-coding.org/style/images/art/BeginCodingMainSize.jpg"} /> */}
                <PostHead>
                    <PostTitle>{postInfo["postTitle"]}</PostTitle>
                    <PostMetadata />
                </PostHead>
                <PostContent>
                    {postInfo["postContent"]}
                </PostContent>
            </PostInner>
        </>
    )
    
}

const Row = styled.div`
    display: flex;
    align-items: center;
`

const Column = styled.div``

const Space = styled.div`
    ${(props)=>{
        return `height: ${props.height}px;`
    }}
`

const PostMetaDataRow=styled.div`
    display: flex;
    justify-content: space-between;
    // margin-bottom: 10px;
`;

const PostThumbnail=styled(({className, src})=>{
    return <img src={src} className={className}/>
})`
    width: 100%;
    height: 300px;
    z-index: 1;
    padding: 30px;
    object-fit: cover;
`

// header와 딱 붙도록 구현한 썸네일
const PostThumbnailBackground=styled.div`
    background-image: url(${(props)=>{return props.src}});
    background-position: center;
    background-size: cover;
    background-color: #5f6caf;
    width: 100%;
    height: 250px;
    z-index: 1;
    // padding: 50px;
`

const PostThumbnailOpacity = styled.div`
    // width: 100%;
    height: 250px;
    background-color: rgb(0, 0, 0, 0.54);
    z-index: 2;
    position: absolute;
`

const PostHead = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #eee;
`

const PostContent = styled.div`
    width: 100%;
    padding-top: 30px;
    padding-bottom: 50px;
    font-size: 1.2rem;
    line-height: 1.5;
    white-space: pre-line;
`

const PostTitle = styled.div`
    font-size: 3rem;
    font-weight: 700;
    text-align: left;
    padding-top: 1rem;
    padding-bottom : 2rem;
`

const PostUserName = styled.div`
    font-weight: 500;
`

const PostDate = styled.div`
    color: #888;
`

const Divider=styled(({className})=> <div className={className}>|</div>)`
    color: #ccc;
    margin: 0 5px;
`

const PostTravelDays = styled.div`
    font-weight: 600;
    // color: #5f6caf;
`

const TagOptionRow=styled(({className, tagList})=>{
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

export default PostPage;
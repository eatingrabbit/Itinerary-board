import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const PostItem=styled(({className})=>{
    return <div className={className}>
        <PostContainer>
            <PostTitle>3박4일 여행 후기</PostTitle>
            <PostDateAndTravelDaysContainer>
                <PostDate>2023.8.23</PostDate>
                <Divider>|</Divider>
                <PostTravelDays>3박 4일</PostTravelDays>
            </PostDateAndTravelDaysContainer>
            <PostContent>이것은 설명입니다 매우 긴 설명 꾸어엉 꾸엉꾸엉 꾸어엉 꾸엉꾸엉 꾸어엉 꾸엉꾸엉 꾸어엉 꾸엉꾸엉</PostContent>
            <PostBookmarkButton />
        </PostContainer>
        <PostThumbnail src="https://fun-coding.org/style/images/art/BeginCodingMainSize.jpg" />
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

const PostThumbnail=styled(({className, src})=>{
    return <Link to={`/post/1`}>
        <img src={src} className={className}/>
    </Link>
})`
    width: 250px;
    height: 200px;
    border-radius: 20px;
`;

const PostContainer=styled.div`
    width: 600px;
    box-sizing: border-box;
    // padding: 20px;
    margin-right: 20px;
`

const PostTitle=styled(({className, children})=>{
    return <Link to={`/post/1`} className={className}>
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
        margin-bottom: 10px;
    }
`;

const PostContent=styled(({className, children})=>{
    return <Link to={`/post/1`} className={className}>
        <div>{children}</div>
    </Link>
})`
    color: #888;
    line-height: 1.5rem;
    text-decoration: unset;
    &>*{
        margin-bottom: 10px;
    }
`;

const PostDateAndTravelDaysContainer=styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const Divider=styled.div`
    color: #ccc;
    margin: 0 5px;
`
const PostDate=styled.div``;

const PostTravelDays=styled.div`
    font-weight: 600;
    color: #5f6caf;
`;

const PostBookmarkButton=styled(({className})=>{
    return <div className={className}>
        <FontAwesomeIcon icon={faStar} color="#aaa" />
    </div>
})`
    text-align: right;
    font-size: 1.3rem;
    margin-right: 10px;
    &>*:hover{
        color: orange;
        cursor: pointer;
    }
`;

export default PostItem;
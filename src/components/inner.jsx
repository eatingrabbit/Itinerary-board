import styled from "styled-components";

const PostListInner=styled.div`
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

const PostInner=styled.div`
    margin: 0 auto;
    // background-color: #aaa;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // @media only screen and (min-width:1200px){
    //     .inner{
    //         max-width: 1200px;
    //     }
    // }
`;

export {PostListInner, PostInner};
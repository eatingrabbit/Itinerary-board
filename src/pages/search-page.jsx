import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import PostItem from "../components/post-item";
import SearchOptionSettingSection from "../components/search-option-setting-section";
import {PostListInner} from "../components/inner";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faStar, faPen } from '@fortawesome/free-solid-svg-icons'

const SearchPage=()=>{
    const {locationId} = useParams();
    const [postList, setPostList] = useState([]);
    const [keyword, setKeyword] = useState('');
    
    useEffect(()=>{
        // axios.get(`/post-search-with-query?page=1&query=${keyword}`)
        // .then((result)=>{
        //     console.log(result.data);
        //     setPostList([...result.data.postList])
        // })
        // .catch((e)=>{
        //     console.log(e)
        // })
        // .finally(()=>{
            
        // });
    }, [])
    
    const handleSearch = ()=>{
        axios.get(`/post-search-with-query?page=1&query=${keyword}`)
        .then((result)=>{
            console.log(result.data);
            setPostList([...result.data.postList])
        })
        .catch((e)=>{
            console.log(e)
        })
        .finally(()=>{
            
        });
    }
    
    return (
        <div>
            <Header />
            <PostListInner>
                <SearchHead>검색</SearchHead>
                <StyledInput onChange={(e)=>{setKeyword(e.target.value)}} onSubmit={handleSearch} />
                {
                    postList.map(
                        (postInfo)=><PostItem postInfo={postInfo}/>
                    )
                }
            </PostListInner>
        </div>
    )
}

const SearchHead = styled.div`
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

const StyledFontAwesomeIcon=styled(FontAwesomeIcon)`
    font-size: 1.6rem;
    margin-left: 20px;
    color: #333;
`;

const StyledInput = styled(({className, onChange, onSubmit})=>{
    return <div className={className}>
        <StyledFontAwesomeIcon icon={faMagnifyingGlass}/>
        <input
            type='text'
            placeholder='검색어를 입력하세요'
            onChange={onChange}
            onSubmit={onSubmit}
        />
    </div>
})`
    border: solid 1px #aaa;
    width: 800px;
    display: flex;
    align-items: center;
    
    &>input{
        width: 600px;
        border: solid 0px #aaa;
        // border-bottom: solid 2px #aaa;
        // margin-bottom: 5px;
        font-size: 1.5rem;
        padding: 15px;
    }
    &>input:focus { outline: none; }
    
`;


export default SearchPage;
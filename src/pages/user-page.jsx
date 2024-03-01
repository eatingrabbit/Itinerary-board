import { useContext, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import {PostInner} from "../components/inner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser} from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from "react-router-dom";
import axios from "axios";
import { UserContext, UserInfoContext } from "../context/user-context";

const UserPage=styled(({className})=>{
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate();
    
    const onClickLogout = (e)=>{
        e.preventDefault()
            
        axios.post(
            '/user/logout',
        )
        .then((result)=>{
            setUser(null)
            navigate('/')
        })
        .catch((e)=>{
            console.log(e)
            return alert("로그아웃에 실패하였습니다.")
        })
    }
    
    return(
        <div className={className}>
            <Header />
            <PostInner>
                <UserHead>User Info</UserHead>
                <LogoutButton onClick={onClickLogout} />
            </PostInner>
        </div>
    )
})`

`

const UserHead = styled.div`
    width: 100%;
    height: 100px;
    padding-top: 50px;
    padding-bottom: 30px;
    // border-bottom: 1px solid #eee;
    font-size: 3rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`


const Row = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 8px;
    border-bottom: solid 2px #aaa;
`

const Space = styled.div`
    ${(props)=>{
        return (`
            height: ${props.height}px;
            width: ${props.width}px;
        `)
    }}
`

const StyledFontAwesomeIcon=styled(FontAwesomeIcon)`
    font-size: 1.2rem;
    color: #aaa;
`;

const StyledInput = styled(({className, type = 'text', placeholder, label, onChange})=>{
    return <input 
        className={className}
        type={type}
        placeholder={placeholder}
        id={label}
        onChange={onChange}
    ></input>
})`
    border: solid 0px #fff;
    // border-bottom: solid 2px #aaa;
    // margin-bottom: 5px;
    font-size: 1.3rem;
    
    &:focus { outline: none; }
`;

const LogoutButton=styled(({className, onClick})=>{
    
    return(
        <div className={className} onClick={onClick}>
            Logout
        </div>
    )
})`
    width: 400px; 
    height: 3rem;
    background-color: green;
    color: white;
    font-size: 1.3rem;
    // font-weight: 500;
    text-align: center;
    line-height: 3rem;
    border-radius: 30px;
    margin-top: 50px;
    &:hover{
        cursor: pointer;
    }
`




export default UserPage;
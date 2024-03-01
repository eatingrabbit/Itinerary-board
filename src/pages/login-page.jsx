import { useContext, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import {PostInner} from "../components/inner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser} from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from "react-router-dom";
import axios from "axios";
import { UserContext, UserInfoContext } from "../context/user-context";

const LoginPage=styled(({className})=>{
    return(
        <div className={className}>
            <Header />
            <PostInner>
                <LoginHead>LOGIN</LoginHead>
                <LoginForm />
            </PostInner>
        </div>
    )
})`

`

const LoginHead = styled.div`
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

const LoginForm = styled(({className})=>{
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate();
    
    const onClickLogin = (e)=>{
        e.preventDefault()
        if(!userEmail){
            return alert("Email을 입력하세요.")
        }
        if(!userPassword){
            return alert("Password를 입력하세요.")
        }
        
        console.log(userEmail)
        axios.post(
            '/user/login',
            {
                'userEmail': userEmail,
                'userPassword': userPassword
            }
        )
        .then((result)=>{
            setUser(result.data.userId)
            navigate('/')
        })
        .catch((e)=>{
            console.log(e)
            return alert("로그인에 실패하였습니다. email과 password를 다시 확인해주세요.")
        })
    }
    
    
    return <form className={className} onSubmit={onClickLogin}>
        <Row>
            <Space width={10}/>
            <StyledFontAwesomeIcon icon={faUser} /> 
            <Space width={20}/> 
            <StyledInput 
                label={"email"} 
                placeholder={"Email Address"} 
                onChange={(e)=>setUserEmail(e.target.value)}
            />
        </Row>
        <Space height={30} />
        <Row>
            <Space width={10}/> 
            <StyledFontAwesomeIcon icon={faLock} /> 
            <Space width={20}/> 
            <StyledInput 
                type={"password"}
                label={"password"}
                placeholder={"Password"} 
                onChange={(e)=>setUserPassword(e.target.value)}
            />
        </Row>
        <LoginButton onClick={onClickLogin} />
        <JoinButton />
    </form>
})`
    width: 400px;
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

const LoginButton=styled(({className, onClick})=>{
    
    return(
        <div className={className} onClick={onClick}>
            Login
        </div>
    )
})`
    
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

const JoinButton=styled(({className})=>{
    const navigate = useNavigate();
    function onClick(){
        navigate("/join");
    }
    return(
        <div className={className} onClick={onClick}>
            Sign up
        </div>
    )
})`
    
    height: 3rem;
    background-color: #fff;
    color: green;
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
    line-height: 3rem;
    border: solid 2px green;
    border-radius: 30px;
    margin-top: 10px;
    &:hover{
        cursor: pointer;
    }
`



export default LoginPage;
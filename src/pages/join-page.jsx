import { useParams } from "react-router-dom"
import { useContext, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import {PostInner} from "../components/inner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser} from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from "react-router-dom";
import { UserContext, UserInfoContext } from "../context/user-context";
import axios from "axios";

const JoinPage=styled(({className})=>{
    return(
        <div className={className}>
            <Header />
            <PostInner>
                <JoinHead>JOIN</JoinHead>
                <JoinForm />
            </PostInner>
        </div>
    )
})`

`

const JoinHead = styled.div`
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

const JoinForm = styled(({className})=>{
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userPasswordCheck, setUserPasswordCheck] = useState('')
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate();
    
    const onClickJoin = (e)=>{
        e.preventDefault()
        console.log(userName)
        if(!userName){
            return alert("이름을 입력하세요.")
        }
        if(!userEmail){
            return alert("Email을 입력하세요.")
        }
        if(!userPassword){
            return alert("Password를 입력하세요.")
        }
        if(!userPasswordCheck){
            return alert("Password를 한번 더 입력하세요.")
        }
        
        axios.post(
            '/user/join',
            {
                'userName': userName,
                'userEmail': userEmail,
                'userPassword': userPassword,
                'userPasswordCheck': userPasswordCheck
            }
        )
        .then((result)=>{
            if(result.data.userName==null){
                return alert("이메일이 중복됩니다. 다른 이메일을 사용해 주세요.")
            }
            else{
                alert("회원가입에 성공했습니다!")
                navigate('/login')
            }
        })
        .catch((e)=>{
            console.log(e)
            return alert("회원가입에 실패하였습니다. 입력한 정보를 다시 확인해주세요.")
        })
    }
    
    return <form className={className}>
        <Row>
            <Space width={10}/>
            <StyledFontAwesomeIcon icon={faUser} /> 
            <Space width={20}/> 
            <StyledInput 
                label={"userName"}
                placeholder={"Your Name"} 
                onChange={(e)=>setUserName(e.target.value)}
            />
        </Row>
        <Space height={30} />
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
        <Space height={30} />
        <Row>
            <Space width={10}/> 
            <StyledFontAwesomeIcon icon={faLock} /> 
            <Space width={20}/> 
            <StyledInput 
                type={"password"}
                label={"passwordCheck"}
                placeholder={"Password Check"} 
                onChange={(e)=>setUserPasswordCheck(e.target.value)}
            />
        </Row>
        <JoinButton onClick = {onClickJoin}/>
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
    // margin-left: 20px;
    color: #aaa;
    // margin-botttom: 10px;
`;

const StyledInput = styled(({className, type='text', placeholder, label, onChange})=>{
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

const JoinButton=styled(({className, onClick})=>{
    
    return(
        <div className={className} onClick={onClick}>
            Join
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


export default JoinPage;
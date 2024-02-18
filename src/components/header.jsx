import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faStar, faPen } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/user-context";
import loginCheck from "../policies/login-check";

const Header=styled(({className})=>{
    const { user, setUser } = useContext(UserContext);
    
    useEffect(()=>{
        console.log(user)
        if(user == null){
            loginCheck(setUser)
        }
    },[])
    
    
    const navigate = useNavigate();
    return(
        <header className={className}>
            <Logo />
            <div style={{"display": "flex"}}>
                <StyledFontAwesomeIcon icon={faMagnifyingGlass} />
                {user != null ?
                    <>
                        <StyledFontAwesomeIcon icon={faPen} onClick={()=>{navigate("/create-post")}}/>
                        <StyledFontAwesomeIcon icon={faStar} color="orange" onClick={()=>{navigate("/bookmark")}}/>
                        <StyledFontAwesomeIcon icon={faUser} color="green" onClick={()=>{navigate("/user")}}/>
                    </> :
                    <LoginButton />
                }
                
            </div>
        </header>
    )
})`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0 20px;
    font-size: 2rem;
    border-bottom: 1px solid #eee;
    background-color: #fff;
`;

const StyledFontAwesomeIcon=styled(FontAwesomeIcon)`
    font-size: 1.6rem;
    margin-left: 20px;
    &:hover{
        cursor: pointer;
    }
`;

const Logo=styled(({className})=>{
    return <Link to={'/'} className={className}>Logo</Link>
})`
    text-decoration: unset;
    color: black;
`

const LoginButton=styled(({className})=>{
    const navigate = useNavigate();
    function onClick(){
        navigate("/login");
    }
    return(
        <div className={className} onClick={onClick}>
            LOGIN
        </div>
    )
})`
    width: 5rem;
    height: 2rem;
    background-color: green;
    color: white;
    font-size: 1rem;
    text-align: center;
    line-height: 2rem;
    border-radius: 30px;
    margin-left: 20px;
    
    &:hover{
        cursor: pointer;
    }
`

export default Header
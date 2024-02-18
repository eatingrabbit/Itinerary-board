import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const BookmarkButton=styled(({className, isBookmarked})=>{
    const handleClick = ()=>{
        console.log(isBookmarked);
    }
    
    return <div className={className} onClick={handleClick}>
        <FontAwesomeIcon icon={faStar} color="#aaa" />
    </div>
})`
    text-align: right;
    font-size: 1.3rem;
    margin-right: 10px;
    ${(props)=>{
        if(props.isBookmarked==true) return "&>*{color: orange;}"
    }}
    &>*:hover{
        color: orange;
        cursor: pointer;
    }
`;

export default BookmarkButton;
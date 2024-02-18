import axios from "axios";

const loginCheck=(setUser)=>{
    axios.get(
        '/user/info'
    )
    .then((result)=>{
        setUser(result.data.sauserId)
        return(result.data.sauserId)
    })
    .catch((e)=>{
        console.log(e)
    })
}

export default loginCheck
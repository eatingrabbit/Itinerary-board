import { useParams } from "react-router-dom"

const PostPage=()=>{
    const {postId} = useParams();
    return <div>this is {postId} post page</div>
}

export default PostPage;
import "./comment.css"
import UserInfo from "./userInfo";
import CommitDate from "./commitDate";
import CommentWrapper from "./commentWrapper";

function Comment(props){
    return(
        <div>
        <CommentWrapper className="comment-first">
           <UserInfo avatarUrl={props.data.author.avatarUrl} name={props.data.author.name}/>
           <div className="text">{props.data.text}</div>
           <CommitDate date={props.data.date}/>     
        </CommentWrapper>

        <CommentWrapper className="comment-second">
           <UserInfo avatarUrl={props.data.author.avatarUrl} name={props.data.author.name}/>    
        </CommentWrapper>


        <CommentWrapper className="comment-third">
           <div className="text">{props.data.text}</div>
           <CommitDate date={props.data.date}/>     
        </CommentWrapper>

 
        </div> 
            
    )
}
export default Comment;
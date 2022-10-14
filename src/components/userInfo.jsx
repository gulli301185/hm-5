function UserInfo(props){
    return(
        <div className="userInfo">
        <img className="avatar" src={props.avatarUrl} alt="img"/>
        <div>{props.name}</div>
        </div>
    )
}

export default UserInfo;
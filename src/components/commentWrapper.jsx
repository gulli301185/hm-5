function CommentWrapper(props){
    const classes="wrapper " + props.className
    return(
        <div className={classes}>{props.children}</div>
    )
}
export default CommentWrapper;
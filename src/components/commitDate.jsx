function CommitDate(props){
    function formatDate(date){
        return date.toLocaleDateString();
    }
    return(
        <div className="date">{formatDate(props.date)}</div>
    )
}
export default CommitDate;
export default function ExpensesRecord(props){
    const style={margin:10}
    return(
        <div style={style} >
            <span style={style}>{`Rs : ${props.data.amount}`}</span>
            <span style={style}>{props.data.expensesType}</span>
            <span style={style}>{props.data.timeStamp}</span>
            <br/>
            <span>-----------------------------------</span>
        </div>
    )
}
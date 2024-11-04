export default function Button(props) {
    const buttonStyle = {width:208,height:50,margin:10}
    return (
        <button type={props.type} style={buttonStyle} onClick={props.onClick}>{props.children}</button>
    )
}
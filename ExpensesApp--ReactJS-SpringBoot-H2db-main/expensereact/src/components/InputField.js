export default function InputField(props){
    const InputFieldStyle = {width:200,height:40,margin:10}
    const InputFieldLableStyle = {margin:10}
    return(
        <div>
            <label style={InputFieldLableStyle}>{props.lable}</label>
            <br/>
            <input type={props.type} style={InputFieldStyle} onChange={e => props.onChange(e.target.value)} />
        </div>
    )
}
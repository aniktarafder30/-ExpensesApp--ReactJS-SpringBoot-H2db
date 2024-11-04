import {useContext, useEffect, useState} from "react";
import InputField from "../components/InputField";
import axios from "axios";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";
import AuthContext from "../AuthContext";

export default function  AddExpense(){
    const authContext = useContext(AuthContext);
    const navigate = useNavigate()
    const [pageLoad,setPageLoad] = useState(false);
    const [data,setData] = useState([]);
    const [selectedType,setSelectedType] = useState();
    const [amount,setAmount] = useState();
    useEffect(()=>{
        axios.get(`http://localhost:8080/getallexpensestypes`)
            .then((response) =>{
                setData(response.data)
            })
    },[])

    const handleTypeOnChange =(e)=>{
        setSelectedType(e);
    }

    const handleAmountOnChange=(e)=>{
        setAmount(e)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8080/addexpenses`,
            {"expensesType":selectedType,
                "amount":amount,
                "userId":authContext.user.id
        }).then((responce)=>{
            alert("Added successfully")
            navigate("/Homepage")
        }).catch((e) =>{
            alert("Failed Please try again.")
        })
    }
    const style={margin:10}

    const selectType =(e) =>{
        return(
            <div style={style} key={e.id}>
                <input key={e.id} id={e.id} type={"radio"} name={"type"} value={e.typeName}
                       onChange={(e) => handleTypeOnChange(e.target.value)}
                />
                <label htmlFor={e.id}>{e.typeName}</label>
            </div>
        )
    }
    useEffect(()=>{
        if(authContext.user===null){
            navigate("/Login")
        }else{
            setPageLoad(true)
        }
    },[authContext])
    return(
        <div>
            {pageLoad ? <div>
                <button style={style} onClick={() => navigate("/Homepage")}>Back</button>
                <form onSubmit={handleSubmit}>
                    <div >
                        <label style={style}>Select Type</label>
                        {data.map((e) =>(
                            selectType(e)
                        ))}
                    </div>
                    <InputField onChange={handleAmountOnChange} type={"text"} lable={"Amount"}></InputField>
                    <Button type={"submit"}>Submit</Button>
                </form>
            </div> : <button onClick={() => navigate("/Login")}>Please login</button>}
        </div>
    )
}
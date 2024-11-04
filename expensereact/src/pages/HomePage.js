import {useContext, useEffect, useState} from "react";
import AuthContext from "../AuthContext";
import ExpensesRecord from "../components/ExpensesRecord";
import axios from "axios";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";
export default function HomePage(){
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const [pageLoad,setPageLoad] = useState(false);
    const [totalExpenses,setTotalExpenses] = useState(0);
    const [data,setData] = useState({
        Message:"No data found",
        Expenses:[]});
    useState(() =>{
        axios.get(`http://localhost:8080/getallexpenses?userid=${1}`)
            .then((resoponce) =>{
                setData(resoponce.data);
            })

    })
    const style ={margin:10}
    const handleAddExpense =()=>{
        navigate("/Addexpense");
    }
    const handleLogout=()=>{
        authContext.updateUser(null)
        navigate("/Login")
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
            {pageLoad? <div style={style}>
                <p>Hii..{authContext.user.firstName}</p>
                <Button onClick={handleAddExpense}>Add Expenses</Button>
                <p>Recent Expenses:</p>
                {data.Message==="No data found" ? <p>No Record found</p> :
                    <div>
                        <div>
                            {data.Expenses.map((e)=>{
                                return(
                                    <ExpensesRecord key={e.id} data={e}></ExpensesRecord>
                                )
                            })}
                        </div>
                        <p>{data.Message}</p>
                    </div>}

                <Button onClick={() => handleLogout()}>Log out</Button>
            </div>: <button onClick={() => navigate("/Login")}>Please login</button>}
        </div>

    )
}
import Button from "../components/Button";
import InputField from "../components/InputField";
import {useState,useContext} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import AuthContext from "../AuthContext";

export default function LoginPage() {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const [userId,setUserId] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState("");
    const [loading,setLoading] = useState(false);
    const [showError,setShowError] = useState(false);
    const handleChangeUserId = (e) => {

        if(e.length===0){
            setErrorMessage("Enter User Id")
        }else {
            setUserId(e);
        }

    }
    const handleChangePassword = (e) => {
        if(e.length===0){
            setErrorMessage("Enter Password")
        }else {
            setPassword(e);
        }
    }
    const handleSubmit = () => {
        if(userId.length===0){
            setErrorMessage("Enter User Id")
            setShowError(true)
        }else if(password.length===0){
            setErrorMessage("Enter Password")
            setShowError(true)
        }else {
            setLoading(true);
            console.log(userId);
            console.log(password);
            const url = `http://localhost:8080/verifyuser?id=${userId}&password=${password}`;
            axios.get(url)
                .then((response) =>{
                    setLoading(false);
                    console.log(response.data);
                    const Auth = response.data.Auth ? response.data.Auth : false;
                    if(Auth){
                        console.log(Auth);
                        authContext.updateUser(response.data.UserDetails);
                        navigate("/Homepage");
                    }else {
                        console.log(Auth);
                        setErrorMessage(response.data.Message? response.data.Message:"Somthing went worng");
                        setShowError(true);
                    }
                }).catch((e) =>{
                console.log(e);
                setShowError(true);
                setErrorMessage(e.message);
                setLoading(false);
            })
        }
    }
    return (
        <><h4>Login to continue..</h4>
            <InputField lable={"User Id"} type={"text"} onChange={handleChangeUserId}></InputField>
            <InputField lable={"Password"} type={"password"} onChange={handleChangePassword}></InputField>
            <p hidden={!showError}>{`Error : ${errorMessage}`}</p>
            <Button onClick={handleSubmit}>{loading ? "Loading..":"Submit"}</Button>
        </>
    )
}
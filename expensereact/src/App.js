import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import {Route,  BrowserRouter as Router, Routes} from "react-router-dom";
import AuthContext from "./AuthContext";
import {useState} from "react";
import AddExpense from "./pages/AddExpense";

function App() {
    const [user,setUser] = useState(null);
    const updateUser =(value) =>{
        setUser(value)
    }
    return (
        <Router>
            <AuthContext.Provider value={{user:user,updateUser:updateUser}}>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Homepage" element={<HomePage/>}/>
                <Route path="/Addexpense" element={<AddExpense/>}/>
            </Routes>
            </AuthContext.Provider>
        </Router>

    );
}

export default App;

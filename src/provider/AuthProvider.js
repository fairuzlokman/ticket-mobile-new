import { LoginUser } from "../api/loginAuth";
import { useState } from "react";
import { Alert } from "react-native";
import AuthContext from "../context/AuthContext";

const AuthProvider = (props) => {
    const [token, setToken] = useState(null)
    // const [sucessLogin, setSucessLogin] = useState(null)
    const [role, setRole] = useState(null)
    // const [thisUser, setThisUser] = useState(null)
    const [loginError, setLoginError] = useState(false)


    const login = async (userLogin, props) => {
        const { data } = await LoginUser(userLogin)

        // console.log(data?.data);

        if(data?.data?.token){
            console.log(data);
            setToken(data?.data?.token)
            setRole(data?.data?.user?.role)
            props.navigation.navigate('Ticketing System')
            setLoginError(false)
            alert(data?.message)
        } else setLoginError(true)
    }

    const logout = () => {
        setToken(null)
        navigate('/logout')
        setTimeout(viewLogout, 1000)
    }

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            token,
            role,
            loginError
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
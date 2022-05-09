import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useProtectPage = () => {
    const navigate = useNavigate()
    useEffect(() =>{
        const token = localStorage.getItem("token");
        if (token === null) {
            navigate("/")
        }
    },[])
}

export default useProtectPage
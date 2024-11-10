import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const ContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;    
    console.log("from context");
    console.log(backendUrl);
    const navigate = useNavigate();

    const value = {
        backendUrl,
        navigate 
    };

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;

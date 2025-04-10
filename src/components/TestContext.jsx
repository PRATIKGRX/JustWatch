import React, { children } from 'react'
import { useContext,createContext,useState} from 'react'
const TestContext = createContext();
export const ContextProvider = ({children})=>{
    const [name,setName] = useState('pratik');
    return(
        <TestContext.Provider value={{name,setName}}>
            {children}
        </TestContext.Provider>
    );
};
export const useTestContext = () =>{
    return useContext(TestContext);
}
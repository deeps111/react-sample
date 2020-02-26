import React from 'react'

export const TranslatedContext = React.createContext({ login : "deeps" , name : "deeps"});

const TranslatedResposeProvider = () => {
   // const contextValues = {a , b};
    return(
        <TranslatedContext.Provider values = { { login : "deeps"}, { name : "deeps"}}>
           {this.props.children} 
        </TranslatedContext.Provider>
    )
}

export default TranslatedResposeProvider;

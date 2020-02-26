import React from 'react'
import TranslatedResponseConsumer from '../TranslatedResponseConsumer/TranslatedResponseConsumer';


const NewChild = (props,contextValues) => {
  const {text , login} = props;
  const {pwd } = contextValues;
    return (
      <>
        <h4> My Text in New Child 3rd Comp :  {text} and {login} .. {pwd} </h4>        
      </>
    )
}

//NewChild = TranslatedResponseConsumer(NewChild);
export default TranslatedResponseConsumer(NewChild);

/*

        const NewChild = props => {
  const {text,pwd} = props;
    return (
      <>
        <h3> Hii This last comp login :  {content} & pwd : {pwd}</h3>        
      </>
    )
}

*/
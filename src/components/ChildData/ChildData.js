import React , { Component } from 'react'
import NewChild from '../NewChild/NewChild';

class ChildData extends Component {
  state = {text : "hello"};

  render() {
  const {content,pwd} = this.props;
    return (
      <>
        <h3> Hii This is my login :  {content} & pwd : {pwd}</h3>
        <NewChild text = {this.state.text}/>
      </>
    )
}
}

export default ChildData;

/*
    const ChildData = props => {
  const {content,pwd} = this.props;
    return (
      <>
        <h3> Hii This is my login :  {content} & pwd : {pwd}</h3>
        <NewChild content1 = {content} pwd = {pwd}/>
      </>
    )
}

*/
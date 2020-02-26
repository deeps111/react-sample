
import React from "react";
import ReactDOM from 'react-dom';

//const modalRoot = document.getElementById('modal-root');

export default class ModalSample extends React.Component {
    el = document.createElement('div');
    modalRoot = document.getElementById('modal-root');

    componentDidMount() {
       // const modalRoot = document.getElementById('modal-root');
        console.log("modal :"+ this.modalRoot);
        console.log(" el "+this.el);
        this.modalRoot &&
          this.el &&
            this.modalRoot.appendChild(this.el);            
           
    }
    compoonentWillUnmount() {
        this.modalRoot &&
        this.modalRoot.removeChild(this.el);
    }
    render() {
        return ReactDOM.createPortal(this.props.children , this.el,);
           
    }
}



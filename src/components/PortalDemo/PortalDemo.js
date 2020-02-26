
import React , {Component , Portal} from 'react'
import ModalSample from "../ModalSample/ModalSample";


export default class PortalDemo extends Component {
    state = {showContent : false}

    handleShow = () => {
        this.setState({showContent: true});
    }

    handleHide = () => {
        this.setState({showContent: false});
    }

    render() {
        
        return(
             <div className="app">
                 <h3>This div is overflow hidden </h3>
                 <button onClick={this.handleShow}>Click to show !</button>
                  {this.state.showContent ? (
                    <ModalSample>
                        <div className="modal">   
                          <div>                         
                                    With a portal, we can render content into a different
                                    part of the DOM, as if it were any other React child.
                            </div>   
                        This is being rendered inside the #modal-container div.
                        <button onClick={this.handleHide}>Hide modal</button>
                        </div>
                    </ModalSample> 
          ) : "hii"}
                 
                 
                
                
             </div>

        )
    }
}
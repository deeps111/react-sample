import React ,{Component} from 'react'

class Refs extends Component {    
        // create a ref to store the textInput DOM element
        textInput = React.createRef();        
      
    
      focusTextInput = () =>  {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
      }
    
      render() {
        // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor
        return (
          <div>
            <input
              type="text"
              ref={this.textInput} />&nbsp;

            <select ref={this.textInput}>
                <option>12</option>
                <option>13</option>
            </select>

            <button type="button" onClick={this.focusTextInput}>Focus the text input</button>
           {/* <input
              type="button"
              value="Focus the text input"
              onClick={this.focusTextInput}
            /> */}
          </div>
        );
      }
    }
    

export default Refs;
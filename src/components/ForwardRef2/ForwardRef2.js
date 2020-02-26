import React ,{Component} from 'react'
import ForwardRefs from '../ForwardRefs/ForwardRefs';

class ForwardRef2 extends Component{
    inputRef = React.createRef();

    handleClick = () => {
         this.inputRef &&
         this.inputRef.current.focus();
    }

    render(){
        return(
             <>
                <ForwardRefs ref={this.inputRef}/>
                <button type="button" onClick={this.handleClick}>Submit</button>
                {/*   <button type="button" ref={this.inputRef} onClick={this.handleClick}>Submit</button> */}
             </>
        )
    }
}

export default ForwardRef2;
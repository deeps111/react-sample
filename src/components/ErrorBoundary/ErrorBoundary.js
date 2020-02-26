import React , {Component} from 'react'

class ErrorBoundary extends Component{
    state = {hasError : false}
    
    // It receives error thrown by descendant component & returns value to update state.    
    static getDerivedStateFromError(error){
        return {hasError : true}
    }

    // It receives error thrown by descendant component & returns below two values.
    // error : error that was thrown
    // errorInfo : An Object with a component key containing info about which component has thrown error.
    componentDidCatch(error , errorInfo){
        //logErrorToMyService(error,errorInfo);
    }

    render() {       
        if (this.state.hasError) {
                return <h1>Uh oh! Something went wrong.</h1>;
              }
        //we return this.props.children, 
        //which would be everything between our <ErrorBoundary></ErrorBoundary> wrapper.
        return this.props.children;        
    }
}

export default ErrorBoundary;
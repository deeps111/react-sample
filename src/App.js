import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppSecond from './components/AppSecond/AppSecond';
import Routes from './components/Routes/Routes';
import RoutesWithoutLink from './components/RoutesWithoutLink/RoutesWithoutLink';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Fragments from './components/Fragments/Fragments';
import Refs from './components/Refs/Refs';
import ForwardRef2 from './components/ForwardRef2/ForwardRef2';
import PortalDemo from './components/PortalDemo/PortalDemo';
import RenderPropsIssue from './components/RenderPropsIssue/RenderPropsIssue';
import Child from './components/Child/Child';
import RenderPropsExample from './components/RenderPropsExample/RenderPropsExample';
import RedirectExample from './components/RedirectExample/RedirectExample';
import ParentComp from './components/ParentComp/ParentComp';
import WelcomDialog from './components/WelcomDialog/WelcomDialog';
import FirstReduxPage from './components/FirstReduxPage/FirstReduxPage';
import SetStateAsync from './components/SetStateAsync/SetStateAsync';
import TranslatedResponseConsumer from './components/TranslatedResponseConsumer/TranslatedResponseConsumer';
import NewChild from './components/NewChild/NewChild';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        React Sample Project
      </header>
      
      {/*
      index.js:1375 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
      in LogProps (at App.js:29)
      in ErrorBoundary (at App.js:28)
      in div (at App.js:13)
      in App (at src/index.js:7)
      <LogProps/>
      */}
      <div class="container">
        <div class="row">
         <ErrorBoundary>
          <div class="col-sm-4">
                <AppSecond/>
                <hr/>    
                <Routes/>    
                <hr/>        
                <Fragments/>
                <hr/>   
                <h3>Redirect on url change</h3>
                <RoutesWithoutLink/>
                <Refs/>         
                <h2> Forward Ref</h2>
                <ForwardRef2/>
                <NewChild/>
                <PortalDemo/>  
                </div>
        <div class="col-sm-4">
        <h3>Portal</h3>                             
                <h3 class="red">Render props</h3>   
                <RenderPropsIssue/>
                <RenderPropsExample name={() => [ "Deepaa" , "Divyaa" ].map((item) => <li key={item}>{item}</li>)} />
                <RenderPropsExample name={() => { return [ "Deepa" , "Divya" ]}} />               
                <RenderPropsExample name={() =>  { return "Divya 1"}} />
          </div>
        <div class="col-sm-4">
                <h3>Axios call Example </h3>
                <RedirectExample/>   
                <ParentComp/>
                <WelcomDialog/>  
                <SetStateAsync/>              
                <FirstReduxPage/>      
          </div>      
      </ErrorBoundary>
      </div>
      </div>
     
      
      <footer className="App-footer"> @Copyright Deepa Reddy   </footer>
      </div>         
      
  );
}

export default App;

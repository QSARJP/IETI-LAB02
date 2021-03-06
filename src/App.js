import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import logo from './components/logo.svg';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from "./components/Login"
import {TodoApp} from "./components/TodoApp"

class App extends Component {

    constructor(props) {
        super(props);
        const LoginView = () => (
            <Login handleSignIn={this.handleSignIn}/>
        );
      
        const TodoAppView = () => (
            <TodoApp/>
        );
        this.state = {loginView: LoginView,todoAppView: TodoAppView,isLoggedIn:false}
        this.handleSignIn=this.handleSignIn.bind(this);
        localStorage.setItem('email', "juan@mail.com");
        localStorage.setItem('password', "123");
        if (!localStorage.getItem("isLoggedIn")){
            localStorage.setItem("isLoggedIn",this.state.isLoggedIn);
        }
    }

    handleSignIn(){
        this.setState({isLoggedIn:true})
    }

    render() {
        const LoginView = this.state.loginView;
        const TodoAppView = this.state.todoAppView;
        const isLoggedIn = this.state.isLoggedIn || (localStorage.getItem("isLoggedIn") == "true" );
        let choose;
        if (!isLoggedIn){
            choose = (
                <div>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                    <div>
                        <Route exact path="/" component={LoginView}/>
                    </div>
                </div>

            );       
        }else {
            choose = (
                <div>
                    <ul>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>
                    <div>
                         <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>

            );    

        }

        return (
            
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    {choose}
                </div>
            </Router>
        );
    }

    
}

export default App;

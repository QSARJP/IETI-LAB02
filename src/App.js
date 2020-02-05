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
            <Login/>
        );
      
        const TodoAppView = () => (
            <TodoApp/>
        );
        this.state = {loginView: LoginView,todoAppView: TodoAppView,isLoggedIn:false}
    }


    render() {
        const LoginView = this.state.loginView;
        const TodoAppView = this.state.todoAppView;
        const isLoggedIn = this.state.isLoggedIn;
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

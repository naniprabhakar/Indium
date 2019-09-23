import React from 'react';
import './App.css';
//import User from './User';
//import Forms from './Forms';
//import Main from './Main';
//import Textarea from './Textarea';
//import Select from './Select';
import Loginpage from './Loginpage';
//import Log from './Log';
import Class from './Class';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
       }
        this.updateState = this.updateState.bind(this);
    };
    updateState() {
       this.setState({ data: 'Data updated...' })
   }
    render() {
        return (
            <div>
                <body>
                    <div>
                        <h1>Sample Login Page</h1>
                        <button onClick={this.updateState}>CLICK</button>
                        <h4>{this.state.data}</h4>
                    </div>
                    <Loginpage /><br />
                    <Class />
                </body>
            </div>
        );
    }
}
export default App;
import React, { Component } from "react";
import Expand from './Expand';

class App extends Component {
    state = {
        isOpen: false,
    };

    handleToggle = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    }

    render () {
        const item = (
            <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
        );
        return (
            <div className="app">
                <Expand 
                    title='Some title' 
                    isOpen={this.state.isOpen} 
                    onClose={this.handleToggle}>
                        {item}
                </Expand>
            </div>
        );
    }
}

export default App;
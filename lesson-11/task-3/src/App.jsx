import React, { Component } from "react";
import Expand from './Expand';

const App = () => {
        const item = (
            <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
        );
        return (
            <div className="app">
                <Expand title='Some title'>
                   {item}
                </Expand>
            </div>
        );
    };

export default App;
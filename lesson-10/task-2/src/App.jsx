import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
import Profile from "./Profile";

class App extends Component {
    state = {
        userData: {
            firstName: "John",
            lastName: "Doe"
        },
        searchQuery: ""
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value
            }
        });
    };

    handleSearchChange = event => {
        this.setState({ searchQuery: event.target.value }); 
    };

    render() {
        const { firstName, lastName } = this.state.userData;
        const { searchQuery } = this.state;

        return (
            <div className="page">
                <h1 className="title">
                    {`Hello, ${firstName} ${lastName}`}
                </h1>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={this.handleSearchChange}
                />
                <button onClick={this.handleSearchClick}>Search</button>  // Кнопка поиска
                <main className="content">
                    <ShoppingCart userName={`${firstName} ${lastName}`} />
                    <Profile userData={this.state.userData} handleChange={this.handleChange} />
                </main>
            </div>
        );
    }
}

export default App;
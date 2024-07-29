import React, { Component } from "react";
import User from "./User";
import Filter from './Filter';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };
    }

    handleFilterChange = (newFilterText) => {
        this.setState({ filterText: newFilterText });
    }

    render() {
        const { users } = this.props;
        const { filterText } = this.state;

        const filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(filterText.toLowerCase())
        );

        return (
            <div>
                <Filter 
                    filterText={filterText}
                    count={filteredUsers.length}
                    onChange={this.handleFilterChange}
                />
                <ul className="users">
                    {filteredUsers.map(user => (
                        <User 
                            key={user.id}
                            name={user.name}
                            age={user.age}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default UsersList;


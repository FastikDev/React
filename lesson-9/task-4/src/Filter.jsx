import React, { Component } from "react";

class Filter extends Component {
    handleChange = event => {
        this.props.onChange(event.target.value);
    };

    render() {
        const { filterText, count } = this.props;

        return (
            <div className="filter">
                <span className="filter__count">{count}</span>
                <input 
                    type="text" 
                    className="filter__input" 
                    value={filterText} 
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Filter;



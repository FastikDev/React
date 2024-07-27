import React from "react";

const Filter = ({ filterText, count, onChange }) => {
    const handleChange = event => {
        event,target.value;
    };

    return (
        <div className="filter">
            <span className="filter__count">{count}</span>
            <input 
                type="text" 
                className="filter__input" 
                value={filterText} 
                onChange={() => this.onChange()}
            />
        </div>
    );
};

export default Filter;


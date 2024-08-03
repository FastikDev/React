import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockOnlyChange(e) {
        this.props.onInStockOnlyChange(e.target.checked);
    }

    render () {

        return (
            <form>
                <input 
                    type='text' 
                    placeholder="Search..." 
                    value={this.props.filterText}
                    onChange={this.onFilterTextChange}/>
                <label>
                    <input 
                        type='checkbox' 
                        checked={this.props.inStockOnly}
                        onChange={this.onInStockOnlyChange}    
                    />
                    {' '}
                    Only show products in stock
                </label>
            </form>
        );
    }
}

export default SearchBar;
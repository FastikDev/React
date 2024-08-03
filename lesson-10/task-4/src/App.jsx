import React from "react";
import FilterableProductTable from "./FilterableProductTable";
import products from './products';

const App = () => {
    return (
        <FilterableProductTable products={products} />
    );
};

export default App;
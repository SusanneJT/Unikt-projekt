import React from "react";
import { GetProducts } from "../API-Communication/getProducts";
import { Product } from "./product";

export class RenderProducts extends React.Component {
    constructor() {
        super();
        this.state = { products: [] };
    }
    async componentDidMount() {
        const response = await GetProducts("/");
        this.setState({ products: response });
        console.log(await response);
    }
	render() { 
        const category = this.props.category;
        const onlySelected = this.props.onlySelected;
        const products = this.state.products;
        const rows = [];


        products.map(function(item){
            if (onlySelected && !item.selected) {
                return;
            }
            if(item.category == category){
                rows.push(
                        <div key={item.id.toString()}>
                            <Product 
                                name={item.name} 
                                price={item.price}
                            />
                        </div>
                );
            }
        })   
		return (
            <div>{rows}</div>
		);
	}
}
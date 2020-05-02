import React from "react";
import { Products } from "./productRepository";
import { Product } from "./product";

export class RenderProducts extends React.Component {
	render() { 
        const category = this.props.category;
        const rows = [];

        Products.map(function(item){
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
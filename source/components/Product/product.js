import React from "react";
import { ProductModal } from "./productModal";


export class Product extends React.Component {
	render() {
        const product = this.props.product
        const name = this.props.product.name;
        const price = this.props.product.price;
        const imgName = this.props.product.picName;

        const productDiv = {
            margin: "1%",
            textAlign: "center"
        }
        const buttonStyle = {
            padding:"3%",
            width: "40%",
            backgroundColor: "#97A88B",
            fontSize: "1.3vW",
			fontFamily: "garamond",
        }
        
          
		return (
            <div style={productDiv}>
                <img src={'./img/productImages/' + imgName} />
                <div>
                    <h5 style={{color: "#1E2F13"}}>{name}</h5>
                    <p>{price} :-</p>
                    <ProductModal  product={product}/>
                </div>
            </div>
		);
	}
}
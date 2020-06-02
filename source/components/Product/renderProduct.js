import React from "react";
import { GetProducts } from "../API-Communication/getProducts";
import { Product } from "./product";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

export class RenderProducts extends React.Component {
    constructor() {
        super();
        this.state = { products: [] };
    }
    /*async componentDidMount2() {
        const response = await GetProducts("/");
        this.setState({ products: response });
        console.log(await response);
    }*/

    async componentDidMount() {
        const promise = new Promise((resolve) => {
            const getProducts = GetProducts("/");
            resolve(getProducts);
        });
        promise.then((result) => {
            //console.log(result.data);
            this.setState({ products: result.data });
        }).catch((error) => {
            console.log(error + " -Produkterna Kunde inte hämtas!");
        })
    }

	render() { 
        const category = this.props.category;
        const onlySelected = this.props.onlySelected;
        const products = this.state.products;
        const rows = [];
        
        const styleCol = {
            margin: "2vw",
        }


        products.map(function(item){
            if (onlySelected && !item.selected) {
                return;
            }
            if(item.category == category){
                rows.push(
                        <Col style={styleCol} key={item.id.toString()}>
                            <Product 
                                product={item}
                            />
                        </Col>
                );
            }
        })   
		return (
            <Row>{rows}</Row>
		);
	}
}
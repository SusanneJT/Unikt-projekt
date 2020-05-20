import React from "react";
import {RenderProducts} from "./renderProduct";
import {SelectionProducts} from "./selectionProducts";


export class ProductGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          onlySelected: false
        };
        
        this.HandleOnlySelectedChange = this.HandleOnlySelectedChange.bind(this);
    }
    HandleOnlySelectedChange(onlySelected) {
        this.setState({
            onlySelected: onlySelected
        })
        console.log(onlySelected);
    }
	render() {
        const category = this.props.category;
		return (
			<div>
                <SelectionProducts
                    onlySelected={this.state.onlySelected}
                    HandleOnlySelectedChange={this.HandleOnlySelectedChange}
                    onOnlySelectedChange={this.HandleOnlySelectedChange}
                />
                <h1 style={{textAlign: "center"}}>{this.props.category}</h1>
                <RenderProducts 
                    category={category} 
                    onlySelected={this.state.onlySelected}
                />
			</div>	
		);
	}
}
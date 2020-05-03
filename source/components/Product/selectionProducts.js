import React from "react";

export class SelectionProducts extends React.Component {
    constructor(props) {
        super(props);
        this.HandleOnlySelectedChange = this.HandleOnlySelectedChange.bind(this);
    }
       
    HandleOnlySelectedChange(e) {
        this.props.onOnlySelectedChange(e.target.checked);
    }   
	render() {
        const styleSelection = {
            background: "#97A88B",
            textAlign: "center",
            padding: "1%"
        }
		return (
            <div style={styleSelection}>
                <form>
                    <label>Visa bara utvalda produkter</label>
                    <input 
                        checked={this.props.onlySelected}
                        onChange={this.HandleOnlySelectedChange} 
                        type="checkbox" 
                        placeholder="Checkbox" 
                        name="Checkbox"  
                    />
                </form>
            </div>
		);
	}
}
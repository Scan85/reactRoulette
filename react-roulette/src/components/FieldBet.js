import React from "react";

export default class FieldBetContainer extends React.Component {

	handleClick() {
		this.props.selectValue(this.props.value);
	}

	render(){
		return (
			<div className="fieldsBet" onClick={this.handleClick.bind(this)}>
                <p>{this.props.value}</p>
            </div>
		)
	}
}
import React from "react";

export default class NumberFields extends React.Component {
	handleClick() {
		this.props.selectValue(this.props.numberValue);
	}

	render(){
		return (
			<div className={this.props.numberColor} onClick={this.handleClick.bind(this)}>
                <p>{this.props.numberValue}</p>
            </div>
		)
	}
}
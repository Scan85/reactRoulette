import React from "react";

export default class ColorFields extends React.Component {
	handleClick() {
		this.props.selectValue(this.props.fieldColor);
	}

	render(){
		return (
			<div className={this.props.fieldColor} onClick={this.handleClick.bind(this)}></div>
		)
	}
}
import React from "react";

export default class GreenField extends React.Component {
	handleClick() {
		this.props.selectValue(0);
	}

	render(){
		return (
			<div className="greenField" onClick={this.handleClick.bind(this)}>
                <p>0</p>
            </div>
		)
	}
}
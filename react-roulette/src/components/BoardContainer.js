import React from "react";
import GreenField from "./GreenField";
import NumberContainer from "./NumberContainer";
import ColorField from "./ColorFields";
import BetContainer from "./FieldBetContainer";

export default class BoardContainer extends React.Component {
	render(){
		return (
			<div id="playBoard" className="boardContainer">
				<GreenField selectValue={this.props.selectValue.bind(this)} />
				<ColorField fieldColor="blackField" selectValue={this.props.selectValue.bind(this)} />
				<NumberContainer selectValue={this.props.selectValue.bind(this)} />
				<ColorField fieldColor="redField" selectValue={this.props.selectValue.bind(this)} />
				<BetContainer selectValue={this.props.selectValue.bind(this)} />
			</div>
		)
	}
}
import React from "react";
import FieldBet from "./FieldBet";
import * as Constants from "../constant/constant";

export default class FieldBetContainer extends React.Component {
	render(){
		return (
			<div className="fieldBetContainer">
				{
					Constants.fieldBets.map((value, index) =>
						<FieldBet key={index} value={value} selectValue={this.props.selectValue.bind(this)} />
					)
				}
				
            </div>
		)
	}
}
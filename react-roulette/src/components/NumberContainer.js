import React from "react";
import NumberFields from "./NumberFields";
import * as Constants from "../constant/constant";

export default class NumberContainer extends React.Component {
	render(){
		return (
			<div className="numberContainer">
				{
					Constants.totalNumbers.map((value, index) => 
						<NumberFields key={index} 
							numberValue={value} 
							selectValue={this.props.selectValue.bind(this)}
							numberColor={Constants.redNumbers.includes(value) ? "redNumber" : "blackNumber"} 
						/> 
					)
				}
			</div>
		)
	}
}
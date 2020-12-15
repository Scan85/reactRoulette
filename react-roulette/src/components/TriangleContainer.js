import React from "react";
import Wheel from "./Wheel";

export default class TriangleContainer extends React.Component {
	render(){
		return (
			<div className="triangleContainer">
				<Wheel rotation={this.props.rotation} wNumber={this.props.wNumber} />
			</div>
		)
	}
}
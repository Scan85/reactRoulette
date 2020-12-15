import React from "react";
import WheelImage from "../images/wheel.png";

export default class Triangles extends React.Component {

	render(){
        let rotation = {
            transform: `rotate(${this.props.rotation}deg)` 
        };
		return (
			<div className="wheelContainer">
				<img id="wheelImage" style={rotation} className="wheel" alt="wheel" width="500px" src={WheelImage} />
                <div className="winningNumber">
                    <p className="wNumberText">{this.props.wNumber}</p>
                </div>
			</div>
		)
	}
}
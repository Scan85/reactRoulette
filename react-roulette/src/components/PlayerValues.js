import React from "react";

export default class PlayerValue extends React.Component {
	render(){
		return (
			<div>
				<div className="playerName">
					<h1>Spieler</h1>
				</div>
				<div className="playerValue">
					<div className="inline-block">
						<h2>Guthaben: </h2>
					</div>
					<div id="value" className="inline-block">
						<h3>{this.props.value}</h3>
					</div>
				</div>
			</div>
		)
	}
}
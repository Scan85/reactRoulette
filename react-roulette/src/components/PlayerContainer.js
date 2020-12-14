import React from "react";
import PlayerValues from "./PlayerValues";
import PlayerBet from "./PlayerBet";
import GameReset from "./GameReset";

export default class PlayerContainer extends React.Component {
	render(){
		return (
			<div className="playerContainer">
				<PlayerValues value={this.props.playerValue} />
				<PlayerBet start={this.props.startGame.bind(this)} bet={this.props.betGame.bind(this)} />
				<GameReset resetGame={this.props.resetGame.bind(this)} />
            </div>
		)
	}
}
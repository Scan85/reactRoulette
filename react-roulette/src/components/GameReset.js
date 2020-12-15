import React from "react";

export default class GameReset extends React.Component {
	render(){
		return (
            <div className="gameReset">
                <div className="inline-block margin10">
                    <button className="gameButton" onClick={this.props.resetGame.bind(this)}>Neu Starten</button>
                </div>
            </div>
		)
	}
}
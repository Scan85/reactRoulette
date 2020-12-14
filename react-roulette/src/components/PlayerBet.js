import React from "react";

export default class PlayerBet extends React.Component {
    state = {
        betValue: ""
    }

    setBetValue(e) {
        this.setState({
            betValue: e.target.value
        });
    }

    betGame() {
        let betVal = this.state.betValue;

        if (betVal && betVal !== "" && betVal > 0) {
            this.props.bet(betVal);
        }
    }

	render(){
		return (
            <div className="playerBet">
                <div className="inline-block">
                    <input type="number" value={this.state.betValue} onChange={this.setBetValue.bind(this)} />
                </div>
                <div className="inline-block margin10">
                    <button className="gameButton" onClick={this.betGame.bind(this)}>Setzen</button>
                </div>
                <div className="inline-block margin10">
                    <button className="gameButton" onClick={this.props.start.bind(this)}>Starten</button>
                </div>
            </div>
		)
	}
}
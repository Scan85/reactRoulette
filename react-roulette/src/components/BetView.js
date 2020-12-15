import React from "react";

export default class BetView extends React.Component {
	render(){
		return (
            <div className="playerBets">
                <ul>
                    <li><b>Betrag -- Feld</b></li>
                    {
                        this.props.playerBets.map((value, index) =>
                            <li key={index}>{ value.BetValue + " -- " + value.BetField }</li>
                        )
                    }
                </ul>
            </div>
		)
	}
}
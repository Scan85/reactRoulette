import React from "react";

export default class Gewinnzahlen extends React.Component {

	render(){
		return (
            <div>
                <div className="winNumbers">
                    <p className="wNumber">Letzten Zahlen:</p>
                    {
                        this.props.winningList.map((value, index) => <p key={index} className="wNumber">{value}</p>)
                    }
                </div>
                <div className="winNumbers">
                    <p className="wNumber">Gewonnen:</p>
                    <p className="wNumber">{this.props.winningValue}</p>
                </div>
            </div>
		)
	}
}
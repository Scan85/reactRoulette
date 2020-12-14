import React from "react";
import "../css/App.css";
import "../css/style.css";
import TriangleContainer from "../components/TriangleContainer";
import BoardContainer from "../components/BoardContainer";
import PlayerContainer from "../components/PlayerContainer";

export default class App extends React.Component {

  state = {
    playerName: "Spieler 1",
    playerValue: 300,
    playerBets: [],
    selectedField: "",
    winningNumber: ""
  }
  
  startGame() {
    let winningNumber = Math.floor(Math.random() * Math.floor(37));

    this.setState = {
      winningNumber: winningNumber
    }
    console.log("Gewinnerzahl ist ", winningNumber);
  }

  selectValue(value) {
    this.setState({
      selectedField: value
    });
    console.log("Feld ausgewählt", value, this.state.selectedField);
  }

  betGame(value) {
    let sField = this.state.selectedField;
    let pValue = this.state.playerValue;
    let pBets = this.state.playerBets;

    if(sField && sField !== "" && value && value !== "" && pValue > value) {
      
      pBets.push({"betValue": value, "betField": sField});
      pValue = pValue - value;
      console.log("betrag setzen??", sField, value);

      this.setState({
        playerBets: pBets,
        playerValue: pValue
      });
    }
  }

  resetGame() {
    this.setState({
      playerName: "Spieler 1",
      playerValue: 300,
      playerBets: [],
      selectedField: "",
      winningNumber: ""
    });
  }

  render() {
    return (
      <div className="App mainContainer">
        <TriangleContainer />
        <BoardContainer selectValue={this.selectValue.bind(this)} />
        <PlayerContainer 
          playerValue={this.state.playerValue} 
          startGame={this.startGame.bind(this)} 
          betGame={this.betGame.bind(this)} 
          resetGame={this.resetGame.bind(this)} 
        />
      </div>
    );
  }
}
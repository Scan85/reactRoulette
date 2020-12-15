import React from "react";
import "../css/App.css";
import "../css/style.css";
import * as Constants from "../constant/constant";
import TriangleContainer from "../components/TriangleContainer";
import BoardContainer from "../components/BoardContainer";
import PlayerContainer from "../components/PlayerContainer";
import WinningList from "../components/GewinnZahlen";

export default class App extends React.Component {

  state = {
    playerName: "Spieler 1",
    playerValue: 300,
    playerBets: [],
    selectedField: "",
    winningNumber: "",
    winningList: [],
    winningValue: 0,
    gameStarted: false,
    rotation: 0
  }
  
  startGame() {
    let winningNumber = Math.floor(Math.random() * Math.floor(37));
    let playerBets = this.state.playerBets;
    let playerValue = this.state.playerValue;
    let winningList = this.state.winningList;
    let winningValue = 0;
    let rotation = this.state.rotation + 1000 + winningNumber * 10;
    winningList.push(winningNumber);

    /**
     * 0-36: 35/1
     * Rot oder Schwarz: 1/1 → bei „0“ keine Auszahlung
     * 1-12;13-24;25-36: 2/1 → bei „0“ keine Auszahlung
     */

    if (playerBets && playerBets.length > 0) {
      playerBets.map((value) => {
        if (value.BetField === "blackField" && Constants.blackNumbers.includes(winningNumber)) {
          winningValue += parseInt(value.BetValue) * 2; 
        } 
        else if (value.BetField === "redField" && Constants.redNumbers.includes(winningNumber)) {
          winningValue += parseInt(value.BetValue) * 2;
        } 
        else if (value.BetField === "1 - 12" && winningNumber >= 1 && winningNumber <= 12) {
          winningValue += parseInt(value.BetValue) * 3;
        } 
        else if (value.BetField === "13 - 24" && winningNumber >= 13 && winningNumber <= 24) {
          winningValue += parseInt(value.BetValue) * 3;
        } 
        else if (value.BetField === "25 - 36" && winningNumber >= 25 && winningNumber <= 36) {
          winningValue += parseInt(value.BetValue) * 3;
        } 
        else if (value.BetField === "0" && winningNumber.toString() === "0") {
          winningValue += parseInt(value.BetValue) * 35;
        }
        else if(value.BetField === winningNumber) {
          winningValue += parseInt(value.BetValue) * 35;
        }
        return winningValue;
      });

      playerValue += winningValue;
      
      this.setState({
        playerValue: playerValue,
        winningNumber: winningNumber,
        winningList: winningList,
        winningValue: winningValue,
        rotation: rotation,
        gameStarted: true
      });
    }
  }

  selectValue(value) {
    this.setState({
      selectedField: value
    });
  }

  betGame(value) {
    if(this.state.gameStarted) {
      this.setState({
        playerBets: [],
        gameStarted: false
      });
    }

    let sField = this.state.selectedField === 0 ? "0" : this.state.selectedField;
    let pValue = this.state.playerValue;
    let pBets = this.state.playerBets;

    if(sField && sField !== "" && value && value !== "" && pValue > value) {
      
      pValue = pValue - value;
      pBets.push({"BetValue": value, "BetField": sField});

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
      winningNumber: "",
      rotation: 0,
      winningList: []
    });
  }

  render() {
    return (
      <div className="App mainContainer">
        <TriangleContainer rotation={this.state.rotation} wNumber={this.state.winningNumber} />
        <WinningList winningList={this.state.winningList} winningValue={this.state.winningValue} />
        <BoardContainer selectValue={this.selectValue.bind(this)} />
        <PlayerContainer 
          playerValue={this.state.playerValue}
          playerBets={this.state.playerBets}
          startGame={this.startGame.bind(this)} 
          betGame={this.betGame.bind(this)} 
          resetGame={this.resetGame.bind(this)} 
        />
      </div>
    );
  }
}
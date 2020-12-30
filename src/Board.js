import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';


class Board extends Component {
  static defaultProps = { nrows: 3, ncols: 6, chanceLightsOn: 0.3 }
  constructor(props) {
    super(props);
    this.state = { hasWon: false, allLightsOn: false, board: this.createBoard() }
  }


  createBoard() {
    const board = [];
    for (let i = 0; i < this.props.nrows; i++) {
      let row = []
      for (let j = 0; j < this.props.ncols; j++) {
        let rand = Math.random() < this.props.chanceLightsOn ? 0 : 1;
        row.push(rand)
      }
      board.push(row)
    }
    return board
  }

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    return () => {
      // if this coord is actually on board, flip it
      function flipCell(y, x) {
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          board[y][x] = (board[y][x] === 0) ? 1 : 0;

        }
      }
      flipCell(y, x)
      flipCell(y, x - 1)
      flipCell(y, x + 1)
      flipCell(y - 1, x)
      flipCell(y + 1, x)

      // win when every cell is turned off
      let hasWon = board.every(r => r.every(c => c === 0))
      let allLightsOn = board.every(r => r.every(c => c === 1))
      this.setState({ hasWon, allLightsOn, board })
    }
  }


  renderBoard = () => {
    return (
      <table className="Board-table">
        <tbody>
          {this.state.board.map((tr, y) => {
            return (
              <tr key={y}>{tr.map((lit, x) => {
                let coord = `${y}-${x}`
                return <Cell key={coord} isLit={lit} flipCellsAroundMe={this.flipCellsAround(coord)} />
              })}
              </tr>
            )
          })
          }
        </tbody>
      </table>
    )
  }

  renderWinMsg() {
    return (
      <div className="Board-title win-msg">
        <span className="neon-orange">Congrats, </span>
        <span className="neon-blue"> you won!</span>
      </div >
    )
  }
  renderLightsOn() {
    return (
      <div className="Board-title win-msg">
        <span className="neon-orange">Great, but</span>
        <span className="neon-blue"> you should turn off the lights!</span>
      </div >
    )
  }

  render() {
    const { hasWon, allLightsOn } = this.state;
    return (
      <div className="Board">
        <div className="Board-title">
          <span className={`neon-orange ${(allLightsOn || hasWon) && 'dimmed'}`}>Lights</span>
          <span className={`neon-blue ${(allLightsOn || hasWon) && 'dimmed'}`}>Out</span>
        </div>
        {this.renderBoard()}
        { (this.state.hasWon) ? this.renderWinMsg() : null}
        { (this.state.allLightsOn) ? this.renderLightsOn() : null}
      </div >)
  }
}


export default Board;

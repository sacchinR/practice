import React, { Component } from 'react'
import './Table.css'
class Table extends Component {

    constructor() {
        super();
        this.state = {
            matrix: [['', '', ''], ['', '', ''], ['', '', '']],
            flag: 'x',
            checked: [[false, false, false], [false, false, false], [false, false, false]],
            finish: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillUpdate() {

    }

    checkCondition(x, y, f) {
        let mat = this.state.matrix
        let count = 0, i;

        for (i = x; i <= 2; i++) {
            if (mat[i][y] !== '' && mat[i][y] === f) {
                count++;
            }
            else {
                break;
            }
        }
        for (i = x - 1; i >= 0; i--) {
            if (mat[i][y] !== '' && mat[i][y] === f) {
                count++;
            }
            else {
                break
            }
        }

        if (count === 3) { return true };

        count = 0

        for (i = y; i <= 2; i++) {
            if (mat[x][i] !== '' && mat[x][i] === f) {
                count++;
            }
            else {
                break
            }
        }

        for (i = y - 1; i >= 0; i--) {
            if (mat[x][i] !== '' && mat[x][i] === f) {
                count++;
            }
            else {
                break
            }
        }

        if (count === 3) { return true };

        count = 0;

        for (i = x; i <= 2; i++) {
            if (mat[i][i] !== '' && mat[i][i] === f) {
                count++;
            }
            else {
                break
            }
        }

        for (i = x - 1; i >= 0; i--) {
            if (mat[i][i] !== '' && mat[i][i] === f) {
                count++;
            }
            else {
                break
            }
        }
        if (count === 3) { return true };
        count = 0
        for (i = x; i <= 2; i++) {
            if (mat[i][2 - i] !== '' && mat[i][2 - i] === f) {
                count++;
            }
            else {
                break
            }
        }
        for (i = x - 1; i >= 0; i--) {
            if (mat[i][2 - i] !== '' && mat[i][2 - i] === f) {
                count++;
            }
            else {
                break
            }
        }
        if (count === 3) { return true };
        return false
    }

    handleClick = (x, y) => {
        let mat = this.state.matrix
        let f = this.state.flag
        let ch = this.state.checked
        let pass = f
        if (this.state.finish === false) {
            if (this.state.checked[x][y] === false) {
                ch[x][y] = true
                if (this.state.flag === 'x') {

                    mat[x][y] = 'x'
                    f = 'y'
                }
                else {
                    mat[x][y] = 'y'
                    f = 'x'
                }
                this.setState({
                    matrix: mat,
                    flag: f,
                    checked: ch
                })
                if (f === 'x') {
                    pass = 'y'
                }
                else {
                    pass = 'x'
                }
                const result = this.checkCondition(x, y, pass)
                console.log(result, pass)
                if (result === true) {
                    mat[x][y] = pass
                    console.log(this.state.matrix, x, y)
                    this.setState({
                        matrix: mat,
                        finish: true
                    })

                    window.alert("player "+pass+" won the match");
                }
            }

        } else {
            console.log("game finished")
            window.alert("Game Finished")
        }


    }

    render() {
        console.log(this.state.matrix)
        return (
            <div className="table">
                <table>
                    <tbody>
                        <tr>
                            <td onClick={() => this.handleClick(0, 0)} > {this.state.matrix[0][0]} </td>
                            <td onClick={() => this.handleClick(0, 1)} > {this.state.matrix[0][1]} </td>
                            <td onClick={() => this.handleClick(0, 2)} > {this.state.matrix[0][2]} </td>
                        </tr>
                        <tr>
                            <td onClick={() => this.handleClick(1, 0)} > {this.state.matrix[1][0]} </td>
                            <td onClick={() => this.handleClick(1, 1)} > {this.state.matrix[1][1]} </td>
                            <td onClick={() => this.handleClick(1, 2)} > {this.state.matrix[1][2]} </td>
                        </tr>
                        <tr>
                            <td onClick={() => this.handleClick(2, 0)} > {this.state.matrix[2][0]} </td>
                            <td onClick={() => this.handleClick(2, 1)} > {this.state.matrix[2][1]} </td>
                            <td onClick={() => this.handleClick(2, 2)} > {this.state.matrix[2][2]} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Table
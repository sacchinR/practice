import React, { Component } from 'react'
import { newState, handleClick } from '../action/ticAction'
import { connect } from 'react-redux'
import { NEW_STATE, UPDATE } from '../action/types'
import './Table.css'
import { bindActionCreators } from 'redux';
class Table extends Component {

    componentWillMount() {
        this.props.newState()
    }
    onHandleClick(x, y) {
        
        handleClick(0, 0, this.props.table)
    }

    render() {
        const { matrix} = this.props.table
        return (
            <div className="table" >
                <table>
                    <tbody>
                        <tr>
                            <td onClick={()=>this.props.handleClick(0, 0, this.props.table)} > {matrix[0][0]} </td>
                            <td onClick={()=>this.props.handleClick(0, 1, this.props.table)} > {matrix[0][1]} </td>
                            <td  onClick={()=>this.props.handleClick(0, 2, this.props.table)} > {matrix[0][2]} </td>
                        </tr>
                        <tr>
                            <td onClick={()=>this.props.handleClick(1, 0, this.props.table)} > {matrix[1][0]} </td>
                            <td onClick={()=>this.props.handleClick(1, 1, this.props.table)} > {matrix[1][1]} </td>
                            <td onClick={()=>this.props.handleClick(1, 2, this.props.table)} > {matrix[1][2]} </td>
                        </tr>
                        <tr>
                            <td onClick={()=>this.props.handleClick(2, 0, this.props.table)} > {matrix[2][0]} </td>
                            <td onClick={()=>this.props.handleClick(2, 1, this.props.table)} > {matrix[2][1]} </td>
                            <td onClick={()=>this.props.handleClick(2, 2, this.props.table)} > {matrix[2][2]} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { ...state }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({newState:newState, handleClick:handleClick} , dispatch )
}

export default connect(mapStateToProps, matchDispatchToProps)(Table)
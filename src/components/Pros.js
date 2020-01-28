import React, {Component} from 'react'
import { connect } from 'react-redux'
import {UPDATE_ACTIVE_PROS, UPDATE_PROS} from './../reducers/rootReducer'

class Pros extends Component {
    constructor(props) {
        super(props)
    }

    clickHandle = (id) => {
        this.props.updateActivePros(id);
    };

    changeHandle = (e, id) => {
        this.props.updatePros(id, e.target.value);
    };

    render() {
        const {pros, activePros} = this.props;
        return(
            <div className="left">
                <p className="pros-border">PROS</p>
                <div className="data">
                    {
                        pros.length ? (
                            pros.map((item, index) => {
                                return (
                                    <div className="item" key={item.id} onClick={() => this.clickHandle(item.id)}>
                                        <span className="index"> {index + 1}. </span>
                                        {item.id == activePros ?
                                            <input value={item.value} onChange={(e) => this.changeHandle(e, item.id)}/>
                                            : <span> {item.value} </span>
                                        }
                                    </div>
                                )
                            })
                        ) : null
                    }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        updateActivePros: (id) => {
            dispatch({type: UPDATE_ACTIVE_PROS, id: id})
        },
        updatePros: (id, value) => {
            dispatch({type: UPDATE_PROS, payload: {id: id, value: value}})
        }
    }
};

const mapStateToProps = (state) => {
    return {
        pros: state.pros,
        activePros: state.activePros
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pros)